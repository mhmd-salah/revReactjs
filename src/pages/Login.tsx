import { useState } from "react";
import axiosInstance from "../api/axiosConfig";
import { useAppDispatch } from "../App/hooks";
import { login } from "../App/features/authSlice";
import { useNavigate } from "react-router-dom";
interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      dispatch(login(response.data.token));
      navigate("/");
    } catch (error) {
      console.log(error);
      if(error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="email"
          placeholder="email"
          onChange={handleChange("email")}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleChange("password")}
        />
        <button type="submit">
          {loading ? "Loading..." : "Login"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </>
  );
};
export default Login;
