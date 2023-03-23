import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <div>
            <Link to="/">
              <h1>todo App</h1>
            </Link>
          </div>
          <div>
            <Link to="/add-todo">Add todo</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/user">Profile</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
