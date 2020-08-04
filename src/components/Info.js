import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Info = () => {
  return (
    <div className="info">
      <h2>Pourquoi créer un compte ?</h2>
      <div style={{ display: "flex" }}>
        <FontAwesomeIcon icon="clock" />
        <div>
          <h4>Gagnez du temps</h4>
          <p>
            Publiez vos annonces rapidement, avec vos informations pré-remplies
            chaque fois que vous souhaitez déposer une nouvelle annonce.
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <FontAwesomeIcon icon="bell" />
        <div>
          <h4>Soyez les premiers informés</h4>
          <p>
            Créez des alertes Immo ou Emploi et ne manquez jamais l’annonce qui
            vous intéresse.
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <FontAwesomeIcon icon="eye" />
        <div>
          <h4>Visibilité</h4>
          <p>
            Suivez les statistiques de vos annonces (nombre de fois où votre
            annonce a été vue, nombre de contacts reçus).
          </p>
        </div>
      </div>
      <div className="signUp_Form"></div>
    </div>
  );
};

export default Info;
