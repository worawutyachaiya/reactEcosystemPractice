// import Query from "./components/Query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./components/Register";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Query /> */}
      <Register/>
    </QueryClientProvider>
  );
};
export default App;
