import React, { FormEvent } from "react";
import { useFetcher } from "react-router-dom";

const AddProductForm: React.FC = () => {
  const fetcher = useFetcher();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // جمع بيانات النموذج
    const formData = new FormData(event.currentTarget);
    const newProduct = {
      name: formData.get("name") as string,
      price: parseFloat(formData.get("price") as string),
      description: formData.get("description") as string,
    };

    // إرسال البيانات باستخدام fetch
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        console.log("Product added successfully!");
        fetcher.submit(formData, { method: "post" });
      } else {
        console.error("Error adding product!");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" required />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" required></textarea>
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
  