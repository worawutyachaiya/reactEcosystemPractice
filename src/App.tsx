// import Query from "./components/Query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Aggrid from "./components/Aggrid";
import Zod from "./components/Zod";
import Table from "./components/Table";
// import Secom from "./components/Secom";
// import Navlucide from "./components/Navlucide";
// import Register from "./components/Register";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Query /> */}
      {/* <Secom/> */}
      {/* <Navlucide/> */}
      {/* <Aggrid/> */}
      {/* <Zod/> */}
      <Table/>
    </QueryClientProvider>
  );
};
export default App;
