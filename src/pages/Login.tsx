import { useLocation } from "react-router-dom";
import Input from "../components/Input";

export default function Login() {
  const location = useLocation()
  console.log(location)
  return (
    <div className="w-[400px] ">
      <h2 className="text-2xl mb-2">Login</h2>
      <form className="flex flex-col gap-2 *:text-xl">
        <Input type="text" placeholder="email addres" />
        <Input type="password" placeholder="your password" />
        <button>Login</button>
      </form>
    </div>
  );
}
