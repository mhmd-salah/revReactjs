import axios from "axios";
import { FormEvent } from "react";
import { useMutation } from "react-query";

axios.defaults.baseURL = "http://localhost:3000";

const addProduct = async (newProduct: { name: string; price: number }) => {
  const response = await axios.post(
    "http://localhost:3000/products",
    newProduct
  );
  return response.data;
};
const Products = () => {
  const mutation = useMutation(addProduct, {
    onSuccess: () => {
      console.log("success");
    },
    onError: (err) => {
      console.log("error:", err);
    },
  });

  const submitHandle = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name: "product", price: 30 });
  };
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={submitHandle}>
        <button disabled={mutation.isLoading}>
          {mutation.isLoading ? "adding..." : "add product"}
        </button>
      </form>
    </div>
  );
};

export default Products;
