import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();

      setName(content.name);
    })();
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Nav name={name} setName={setName} />
        <main className="form-signin">
          <Routes>
            <Route path="/" element={<Home name={name} />} />
            <Route path="/login" element={<Login setName={setName} />} />
            <Route path="/signup" element={<Signup setNameAfterSignup={setName} />} />
          </Routes>
        </main>
      </div>
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
