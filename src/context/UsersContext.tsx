import { createContext, ReactNode, useContext, useState } from "react";
export const ContextU = createContext<string[]>([]);

export const useUsersContext = ()=>{
  const context = useContext(ContextU)
  return context;
}


function UsersContext({ children }: { children: ReactNode }) {
  const [users] = useState(["mohamed","salah"])
  return <ContextU.Provider value={users}>{children}</ContextU.Provider>;
}

export default UsersContext;
