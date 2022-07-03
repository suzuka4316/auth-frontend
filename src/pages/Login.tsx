import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { error, defaultError, success } from "../utils/notification";

const Login = (props: { setName: (name: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.status !== 200) {
        error("Login failed, make sure your email and password are correct.");
        return;
      }
      const content = await response.json();

      success("Successfully logged in!")
      props.setName(content.name);
      setRedirect(true);
    } catch (error) {
      defaultError();
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <input
        type="email"
        className="form-control"
        placeholder="name@example.com"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
