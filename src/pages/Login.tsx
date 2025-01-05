import { useState } from "react";
import axiosInstance from "../config/axiosConfig";
import { useNavigate } from "react-router-dom";
import AuthTokenManager from "../global/authTokenManager";
// import { useAppDispatch } from "../App/hooks";
// import { login } from "../App/features/authSlice";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authManager = AuthTokenManager.getInstance();
  // state
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  //handlers
  const handleChange =
    (name: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({ ...formValues, [name]: event.target.value });
    };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formValues.email || !formValues.password) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post("/login", formValues);
      // dispatch(login(response.data.token));
      authManager.setToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setError(error.response.data || error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center ]">
      <h1 className="text-4xl mb-6 capitalize ">login</h1>
      <form onSubmit={onSubmitForm} className="*:block space-y-5">
        <input
          type="email"
          placeholder="email"
          onChange={handleChange("email")}
          className="px-2 py-1 text-lg text-black rounded-md outline-none w-full md:w-[300px]"
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleChange("password")}
          className="px-2 py-1 text-lg text-black rounded-md outline-none w-full md:w-[300px]"
        />
        <button type="submit" className="bg-teal-600 py-1 px-3">
          {loading ? "Loading..." : "Login"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};
export default Login;
