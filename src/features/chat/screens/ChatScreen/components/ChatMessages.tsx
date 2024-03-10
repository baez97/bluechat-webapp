import { memo } from "react";
import { List } from "antd";
import { Message } from "../../../../../__generated__/graphql";

export const ChatMessages = memo(
  ({ messages, userId }: { messages?: Message[]; userId: string }) => (
    <List
      dataSource={messages}
      renderItem={(item) => (
        <List.Item
          style={{ textAlign: item.receiverId !== userId ? "right" : "left" }}
        >
          <List.Item.Meta title={item.content} />
        </List.Item>
      )}
    />
  )
);
