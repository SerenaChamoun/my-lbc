import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Publish = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [file, SetFile] = useState();

  return (
    <div className="publishPage">
      <div className="publishContainer">
        <h2>Déposer une annonce</h2>
        <div className="line"></div>
        <form
          onSubmit={async (event) => {
            event.preventDefault();

            try {
              const token = Cookies.get("token");
              if (token) {
                const formData = new FormData();
                formData.append("title", title);
                formData.append("description", description);
                formData.append("price", price);
                formData.append("file", file);

                const response = await axios.post(
                  "https://leboncoin-api.herokuapp.com/offer/publish",
                  formData,
                  { headers: { authorization: "Bearer " + token } }
                );
                console.log(response.data);
                console.log(response.data._id);
                //const published_offer = response.data.picture.secure_url;
                history.push("/offer/" + response.data._id);
              } else {
                alert("You have to login in before");
                // history.push("/user/log_in");
              }
            } catch (error) {
              //console.log(error);
              alert(error);
            }
          }}
        >
          <div>Titre de l'annonce *</div>
          <input
            style={{ height: 50 }}
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <div>Texte de l'annonce *</div>
          <input
            style={{ height: 300 }}
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <div>Prix *</div>
          <input
            style={{ height: 50, width: "50%" }}
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <div>Photo *</div>
          <input
            className="file"
            type="file"
            onChange={(event) => SetFile(event.target.files[0])}
          />
          <button type="submit">Valider</button>
        </form>
      </div>
    </div>
  );
};

export default Publish;
