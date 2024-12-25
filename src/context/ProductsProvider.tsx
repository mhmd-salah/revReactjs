import { createContext, ReactNode, useContext, useState } from "react";

interface Iproducts {
  id:number,
  title:string
}

export const useProductsContext = ()=>{
  const context = useContext(ProductsContext)
  return context;
}

export const ProductsContext = createContext<Iproducts[] | undefined>(undefined);

export default function ProductsProvider({children}:{children:ReactNode}) {
  const [products] = useState<Iproducts[]>([
    { id: 1, title: "product1" },
    { id: 2, title: "product2" },
    { id: 3, title: "product3" },
  ]);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}
