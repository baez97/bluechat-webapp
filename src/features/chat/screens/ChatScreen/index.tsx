import { ChatMessages } from "./components/ChatMessages";
import { ChatList } from "./components/ChatList";
import { Layout, theme } from "antd";
import { useCallback, useState } from "react";
import { useAuthContext } from "../../../auth/AuthProvider";
import type { ChatMessages as IChatMessages } from "../../../../__generated__/graphql";
import { useChatMessages } from "../../hooks/useChatMessages";
const { Sider, Content } = Layout;
const SIDE_BAR_WIDTH = 300;

export const ChatScreen = () => {
  const { userId } = useAuthContext();
  const { chatMessagesMap, loading } = useChatMessages();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [selectedChat, setSelectedChat] = useState<string | undefined>(
    undefined
  );

  const handleSelectChat = useCallback(
    (senderId: string) => {
      setSelectedChat(senderId);
    },
    [setSelectedChat]
  );

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <Layout hasSider>
      <Sider width={SIDE_BAR_WIDTH} style={styles.sider}>
        <ChatList
          chatMessagesMap={chatMessagesMap}
          selected={selectedChat!}
          onSelect={handleSelectChat}
        />
      </Sider>
      <Layout style={{ marginLeft: SIDE_BAR_WIDTH }}>
        <Content style={{ backgroundColor: colorBgContainer }}>
          <ChatMessages
            messages={
              selectedChat ? chatMessagesMap.get(selectedChat) : undefined
            }
            userId={userId}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

const styles = {
  sider: {
    overflow: "auto",
    height: "100vh",
    position: "fixed",
    maxWidth: "none",
    boxSizing: "border-box",
    left: 0,
    top: 0,
    bottom: 0,
  },
} as const;

const getMessagesFromChatId = (chats: Array<IChatMessages>, chatId: string) => {
  if (!chatId) {
    return chats[0]?.messages;
  }
  const chat = chats.find((iChat) => {
    return iChat.senderId === chatId;
  });
  return chat?.messages;
};
