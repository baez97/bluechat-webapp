import { gql } from "../../../__generated__";

const messageFields = gql(`
  fragment MessageFields on Message {
    id
    content
    groupId
    senderId
    receiverId
    timestamp
  }
`);

export const GetInitialMessages = gql(`
  query GetInitialMessages($userId: ID!, $since: DateTime!) {
    Messages(userId: $userId, since: $since) {
      id
      content
      groupId
      senderId
      receiverId
      timestamp
    }
  }
`);

export const GetChatMessages = gql(`
  query GetChatMessages($userId: ID!, $since: DateTime!) {
    ChatMessages(userId: $userId, since: $since) {
      senderId
      messages {
        id
        content
        groupId
        senderId
        receiverId
        timestamp
      }
    }
  }
`);

export const SubscribeToNewMessages = gql(`
  subscription SubscribeToNewMessages($userId: ID!, $since: DateTime!) {
    NewMessages(userId: $userId, since: $since) {
      senderId
      messages {
        id
        content
        groupId
        senderId
        receiverId
        timestamp
      }
    }
  }
`);
