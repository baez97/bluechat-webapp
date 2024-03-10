import { Message } from "../../../__generated__/graphql";
import type { ChatMessages } from "../../../__generated__/graphql";
export type ChatMessagesMap = Map<string, Message[]>;

export const chatMessagesManager = {
  injectMessages(messagesMap: ChatMessagesMap, newChatMessages: ChatMessages) {
    const existingMessages = messagesMap.get(newChatMessages.senderId) ?? [];
    const existingMessagesSet = new Set(
      existingMessages.map((iMessage) => iMessage.id)
    );
    const finalMessages = [...existingMessages];
    newChatMessages.messages.forEach((iMessage) => {
      if (!existingMessagesSet.has(iMessage.id)) {
        finalMessages.push(iMessage);
      }
    });
    messagesMap.set(newChatMessages.senderId, finalMessages);
  },
};
