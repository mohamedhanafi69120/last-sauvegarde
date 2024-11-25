import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Counter } from "../Counter";

const Nav = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Vérifie si un token est présent

  const handleLogout = () => {
    localStorage.removeItem("token"); // Supprime le token
    navigate("/SignIn"); // Redirige vers la page de connexion
  };

  return (
    <nav>
      <Counter />
      <NavLink to="/" className="navLogo">
        <img src={Logo} alt="logo-argentbank" className="logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {!token ? (
        <NavLink to="SignIn" className="navSign">
          <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
          Sign In
        </NavLink>
      ) : (
        <button onClick={handleLogout} className="navSign">
          <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
          Sign Out
        </button>
      )}
    </nav>
  );
};

export default Nav;
