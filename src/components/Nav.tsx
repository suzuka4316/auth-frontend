import { Link } from "react-router-dom";
import { defaultError, error, success } from "../utils/notification";

const Nav = (props: { name: string; setName: (name: string) => void }) => {
  const logout = async () => {
    try {
      const response = await fetch("http://localhost:8000/logout", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.status !== 200) {
        error("Logout failed, please try again");
        return;
      }
      
      success("Good bye for now!");
      props.setName("");
    } catch (error) {
      defaultError()
    }
  };

  const userSpecificNavs = () => {
    let menu;

    if (
      props.name === "" ||
      typeof props.name === "undefined" ||
      props.name === null
    ) {
      menu = (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link to="/login" className="active nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="active nav-link">
              Signup
            </Link>
          </li>
        </ul>
      );
    } else {
      menu = (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link to="/login" className="active nav-link" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      );
    }

    return menu;
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light mb-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div>{userSpecificNavs()}</div>
      </div>
    </nav>
  );
};

export default Nav;
