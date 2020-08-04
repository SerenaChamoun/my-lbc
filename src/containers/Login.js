import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/user/log_in",
        { email: email, password: password }
      );

      console.log(response);
      console.log(response.status);
      console.log(response.data.token);

      if (email && password) {
        if (response.status === 200) {
          if (response.data.token) {
            //Je crée un cookie et je stocke dedans le token trouvé
            Cookies.set("token", response.data.token);
            // je redirige le user vers la page offers
            setUser(response.data.token);
            history.push("/");
          } else {
            alert("Vous devez créer un compte deja");
          }
        }
      } else {
        alert("Champs manquants");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        alert("Mauvais email ou mot de passe");
      }
    }
  };

  return (
    <div className="login_page">
      <div className="login_container">
        <h3>Connexion</h3>
        <div className="line"></div>
        <form onSubmit={handleSubmit}>
          <div>Adresse email</div>
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <div>Mot de passe</div>
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button className="submit" type="submit">
            Se connecter
          </button>
          <div style={{ textAlign: "center" }}>Vous n'avez pas de compte</div>

          <button
            className="account"
            onClick={() => {
              history.push("/user/sign_up");
            }}
          >
            Vous n'avez pas de compte?
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
