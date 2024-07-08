import { useEffect, useState } from "react";

export default function Hooks() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const controller =new AbortController
    const signal = controller.signal;
    (async function fetchProducts() {
      try {
        const response = await (
          await fetch("https://dummyjson.com/products", { signal: signal })
        ).json();
        setProducts(response.products);
      } catch (error) {
        console.log(error);
      }
    })();
    return ()=>{
      controller.abort()
    }
  }, []);

  console.log("render|re-render");
  return (
    <div>
      {products.length
        ? products.map(({id,title}:{id:number,title:string}) => <p key={id}>{title}</p>)
        : <h2>loading...</h2>}
    </div>
  );
}
