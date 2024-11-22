import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const [email, setEmail] = useState(""); // État pour le champ email
  const [password, setPassword] = useState(""); // État pour le champ mot de passe
  const navigate = useNavigate(); // Redirection après connexion

  const handleLogin = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Spécifie que les données sont en JSON
        },
        body: JSON.stringify({ email, password }), // Envoie les données utilisateur
      });

      const data = await response.json(); // Convertit la réponse en JSON

      if (response.ok) {
        console.log("Token reçu :", data.token); // Affiche le token dans la console
        localStorage.setItem("token", data.token); // Stocke le token pour des tests
        navigate("/User"); // Redirige l'utilisateur vers la page utilisateur
      } else {
        alert("Connexion échouée : " + data.message); // Affiche un message d'erreur
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <section className="form">
      <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <div className="inputWapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Met à jour l'état email
            required
          />
        </div>
        <div className="inputWapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Met à jour l'état password
            required
          />
        </div>
        <div className="inputRemember">
          <label htmlFor="remember">Remember me</label>
          <input type="checkbox" id="remember" />
        </div>
        <button type="submit" className="submitbutton">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default Form;
