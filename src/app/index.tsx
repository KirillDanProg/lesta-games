import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./providers";
import AppRouter from "./providers/router/router.provider";
import "./styles/index.scss";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
