import { gql } from "../../../__generated__";

export const GetUsers = gql(`
  query GetUsers($userId: ID!) {
    GetUsers(userId: $userId) {
      id
      displayName
      username
      companyId
      photoUrl
      timestamp
    }
  }
`);
