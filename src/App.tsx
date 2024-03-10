import { ApolloProvider } from "@apollo/client";
import { ChatScreen } from "./features/chat/screens/ChatScreen";
import { client } from "./graphql/client";
import { AuthProvider } from "./features/auth/AuthProvider";
import "./App.css";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
        <AuthProvider>
          <ChatScreen />
        </AuthProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
