import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import Info from "../components/Info";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (name && email && password1 && password2) {
        if (password1 === password2) {
          const response = await axios.post(
            "https://leboncoin-api.herokuapp.com/user/sign_up",
            {
              username: name,
              email: email,
              password: password1,
            }
          );
          console.log(response.data);
          console.log("status :", response.status);
          console.log("token :", response.data.token);

          if (response.status === 200) {
            if (response.data.token) {
              //creer un cookie pour le newuser en lui donnant le token comme valeur
              Cookies.set("token", response.data.token);
              //rediriger l'utilisateur vers la page Offers
              history.push("/offers");
            } else {
              alert("Le nom ou l'email renseigné existe déjà.");
            }
          }
        } else {
          alert("Mots de passe différents");
        }
      } else {
        alert("Champs manquants");
      }
    } catch (error) {
      console.log(error.response.data.error);
      alert(" Je ne sais pas quel est le pb");
    }
  };

  return (
    <div className="signUp_Page">
      <div className="signUp_container">
        <Info />
        <SignUpForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password1={password1}
          setPassword1={setPassword1}
          password2={password2}
          setPassword2={setPassword2}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default SignUp;
