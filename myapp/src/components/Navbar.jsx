import React from "react";
import { Link, json, useNavigate } from "react-router-dom";

export default function Navbar() {
  const role = localStorage.getItem("role");
  const hostel = localStorage.getItem("hostel");

  const navigate = useNavigate();

  const logouthandle = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <div id="Navbar">
      <nav
        className="navbar navbar-expand-lg bg-light"
        style={{ height: "70px" }}
        id="nav"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h2>H.M.P</h2>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rules">
                  Hostel rules
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={role === 2 ? "/users" : "/mycomp"}
                >
                  {role === 2 ? "All Users" : "My Complains"}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div id="but">
            {!localStorage.getItem("token") ? (
              <>
                <Link to="/login">
                  <button className="btn">Login</button>
                </Link>
                <Link to="/createuser">
                  <button className="btn">SignUp</button>
                </Link>
              </>
            ) : (
              <button className="btn" onClick={logouthandle}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

      <div id="comp_head">{hostel}</div>
    </div>
  );
}
