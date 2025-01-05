import { QueryClient, QueryClientProvider } from "react-query";
import Products from "./components/products/Products";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  );
};

export default App;
