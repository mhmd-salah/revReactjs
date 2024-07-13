import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

// contation - redirect- children
export default function ProtuctedRoute({
  isAllowed,
  redirectPath,
  children,
  data
}: {
  isAllowed: boolean;
  redirectPath: string;
  children: ReactNode;
  data?:unknown
}) {
  if (!isAllowed) return <Navigate to={redirectPath} state={data}/>
  return children;
}
