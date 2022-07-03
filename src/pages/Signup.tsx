import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { defaultError, error, success } from "../utils/notification";

const Signup = (props: { setNameAfterSignup: (name: string) => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (response.status !== 200) {
        error("Signup failed, please try again");
        return;
      }

      success("You've created your account successfully!");
      props.setNameAfterSignup(name)
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
      <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Keith Chan"
        required
        onChange={(e) => setName(e.target.value)}
      />
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
        Sign up
      </button>
    </form>
  );
};

export default Signup;
