import { useEffect, useState } from "react";
import { useAuthContext } from "../../auth/AuthProvider";
import { Message } from "../../../__generated__/graphql";
import { useQuery, useSubscription } from "@apollo/client";
import { GetChatMessages, SubscribeToNewMessages } from "../graphql/messages";
import {
  ChatMessagesMap,
  chatMessagesManager,
} from "../model/chatMessagesManager";

const today = new Date();
const sixMonthsAgo = new Date();
sixMonthsAgo.setMonth(today.getMonth() - 6);
const todayString = today.toISOString();
const sixMonthsAgoString = sixMonthsAgo.toISOString();

export const useChatMessages = () => {
  const [chatMessagesMap, setChatMessagesMap] = useState<ChatMessagesMap>(
    new Map()
  );
  const { userId } = useAuthContext();
  const {
    data: chatMessages,
    loading,
    error,
  } = useQuery(GetChatMessages, {
    variables: { userId, since: sixMonthsAgoString },
  });

  const { data: newMessages } = useSubscription(SubscribeToNewMessages, {
    variables: { userId, since: todayString },
  });

  useEffect(() => {
    if (!chatMessages) {
      return;
    }
    const messagesMap = new Map<string, Message[]>();
    chatMessages.ChatMessages.forEach((iChat) => {
      messagesMap.set(iChat.senderId, iChat.messages);
    });
    setChatMessagesMap(messagesMap);
  }, [chatMessages?.ChatMessages?.length]);

  useEffect(() => {
    if (!chatMessages || !newMessages) {
      return;
    }
    setChatMessagesMap((previousChatMessagesMap) => {
      const newMessagesMap = new Map(previousChatMessagesMap);
      newMessages.NewMessages.forEach((iChatMessages) => {
        chatMessagesManager.injectMessages(newMessagesMap, iChatMessages);
      });
      return newMessagesMap;
    });
  }, [chatMessages, newMessages]);

  return { chatMessagesMap, loading, error };
};
