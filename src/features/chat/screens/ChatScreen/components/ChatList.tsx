import { MailOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { memo } from "react";
import { ChatMessagesMap } from "../../../hooks/useChatMessages";
import { User } from "../../../../../__generated__/graphql";
import { useUsers } from "../../../../users/hooks/useUsers";
type MenuItem = Required<MenuProps>["items"][number];

export const ChatList = memo(
  ({
    chatMessagesMap,
    selected,
    onSelect,
  }: {
    chatMessagesMap: ChatMessagesMap;
    selected: string;
    onSelect: (item: string) => void;
  }) => {
    const { users, loading } = useUsers();
    if (loading) {
      return;
    }
    const elements = [...chatMessagesMap.keys()].map((item) =>
      getItem(item, users?.GetUsers!)
    );
    const items = [
      {
        key: "chats",
        label: "Chats",
        children: elements,
        type: "group",
      },
    ];
    return (
      <Menu
        style={{ width: 300, height: "100%", boxSizing: "border-box" }}
        defaultSelectedKeys={[selected]}
        selectedKeys={[selected]}
        selectable
        mode="inline"
        items={items}
        onSelect={(item) => onSelect(item.key)}
      />
    );
  }
);

const getItem = (senderId: string, users: User[]) => {
  const userName = users.find((iUser) => iUser.id === senderId)?.username;
  return {
    key: senderId,
    label: userName,
    icon: <MailOutlined />,
  } as MenuItem;
};
