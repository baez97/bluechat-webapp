/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment MessageFields on Message {\n    id\n    content\n    groupId\n    senderId\n    receiverId\n    timestamp\n  }\n": types.MessageFieldsFragmentDoc,
    "\n  query GetInitialMessages($userId: ID!, $since: DateTime!) {\n    Messages(userId: $userId, since: $since) {\n      id\n      content\n      groupId\n      senderId\n      receiverId\n      timestamp\n    }\n  }\n": types.GetInitialMessagesDocument,
    "\n  query GetChatMessages($userId: ID!, $since: DateTime!) {\n    ChatMessages(userId: $userId, since: $since) {\n      senderId\n      messages {\n        id\n        content\n        groupId\n        senderId\n        receiverId\n        timestamp\n      }\n    }\n  }\n": types.GetChatMessagesDocument,
    "\n  subscription SubscribeToNewMessages($userId: ID!, $since: DateTime!) {\n    NewMessages(userId: $userId, since: $since) {\n      senderId\n      messages {\n        id\n        content\n        groupId\n        senderId\n        receiverId\n        timestamp\n      }\n    }\n  }\n": types.SubscribeToNewMessagesDocument,
    "\n  query GetUsers($userId: ID!) {\n    GetUsers(userId: $userId) {\n      id\n      displayName\n      username\n      companyId\n      photoUrl\n      timestamp\n    }\n  }\n": types.GetUsersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MessageFields on Message {\n    id\n    content\n    groupId\n    senderId\n    receiverId\n    timestamp\n  }\n"): (typeof documents)["\n  fragment MessageFields on Message {\n    id\n    content\n    groupId\n    senderId\n    receiverId\n    timestamp\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetInitialMessages($userId: ID!, $since: DateTime!) {\n    Messages(userId: $userId, since: $since) {\n      id\n      content\n      groupId\n      senderId\n      receiverId\n      timestamp\n    }\n  }\n"): (typeof documents)["\n  query GetInitialMessages($userId: ID!, $since: DateTime!) {\n    Messages(userId: $userId, since: $since) {\n      id\n      content\n      groupId\n      senderId\n      receiverId\n      timestamp\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetChatMessages($userId: ID!, $since: DateTime!) {\n    ChatMessages(userId: $userId, since: $since) {\n      senderId\n      messages {\n        id\n        content\n        groupId\n        senderId\n        receiverId\n        timestamp\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetChatMessages($userId: ID!, $since: DateTime!) {\n    ChatMessages(userId: $userId, since: $since) {\n      senderId\n      messages {\n        id\n        content\n        groupId\n        senderId\n        receiverId\n        timestamp\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription SubscribeToNewMessages($userId: ID!, $since: DateTime!) {\n    NewMessages(userId: $userId, since: $since) {\n      senderId\n      messages {\n        id\n        content\n        groupId\n        senderId\n        receiverId\n        timestamp\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription SubscribeToNewMessages($userId: ID!, $since: DateTime!) {\n    NewMessages(userId: $userId, since: $since) {\n      senderId\n      messages {\n        id\n        content\n        groupId\n        senderId\n        receiverId\n        timestamp\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUsers($userId: ID!) {\n    GetUsers(userId: $userId) {\n      id\n      displayName\n      username\n      companyId\n      photoUrl\n      timestamp\n    }\n  }\n"): (typeof documents)["\n  query GetUsers($userId: ID!) {\n    GetUsers(userId: $userId) {\n      id\n      displayName\n      username\n      companyId\n      photoUrl\n      timestamp\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;