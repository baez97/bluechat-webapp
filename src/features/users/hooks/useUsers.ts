import { useQuery } from "@apollo/client";
import { GetUsers } from "../graphql/users";

export const useUsers = () => {
  const { data: users, loading } = useQuery(GetUsers, {
    variables: { userId: "0" },
  });
  return { users, loading };
};
