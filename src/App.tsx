import "./App.css";
import { ChatScreen } from "./features/chat/screens/ChatScreen";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:8080/query",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <ChatScreen />
    </ApolloProvider>
  );
}

export default App;
