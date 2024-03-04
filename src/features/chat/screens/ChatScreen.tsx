import { useQuery, useSubscription } from "@apollo/client";
import { gql } from "../../../__generated__/gql";

const GET_INITIAL_MESSAGES = gql(/* GraphQL */ `
  query Messages($userId: ID!, $since: DateTime!) {
    Messages(userId: $userId, since: $since) {
      id
      content
      timestamp
    }
  }
`);

const NEW_MESSAGES = gql(`
  subscription SubscribeToNewMessages($userId: ID!, $since: DateTime!) {
    NewMessages(userId: $userId, since: $since) {
      id
      content
      timestamp
    }
  }
`);

const today = new Date().toISOString();
export const ChatScreen = () => {
  const { data, loading } = useQuery(GET_INITIAL_MESSAGES, {
    variables: { userId: "3", since: today },
  });
  const { data: newMessages } = useSubscription(NEW_MESSAGES, {
    variables: { userId: "3", since: today },
  });

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h1>Messages</h1>
      <>
        {data?.Messages.map((iMessage) => (
          <p>
            {iMessage.content}-{iMessage.timestamp}
          </p>
        ))}
      </>
      <>
        {newMessages?.NewMessages.map((iMessage) => (
          <p style={{ fontWeight: "bold" }}>
            {iMessage.content}-{iMessage.timestamp}
          </p>
        ))}
      </>
    </div>
  );
};
