import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://leboncoin-api.herokuapp.com/offer/${id}`
      );
      // console.log(response.data);
      setOffer(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="offerPage">
      <div className="Offer">
        <div className="main">
          <img alt={offer.title} src={offer.picture.url} />

          <div style={{ fontSize: 26 }}>{offer.title}</div>
          <div style={{ fontSize: 20 }}>{offer.price} €</div>
          <div style={{ fontSize: 16 }}>{offer.created}</div>
        </div>

        <div className="aside">
          <div>
            <h4 style={{ paddingLeft: 20, fontWeight: "bold" }}>
              {offer.creator.account.username}
            </h4>
            <div style={{ paddingLeft: 20 }}>
              Combien d'annonces il a-il en ligne?
            </div>
          </div>
          <hr />
          <div>
            <FontAwesomeIcon icon="shopping-cart" />
            <button
              onClick={(event) => {
                const token = Cookies.get("token");
                console.log({ offer });

                token
                  ? history.push("/payment", {
                      picture: offer.picture.secure_url,
                      title: offer.title,
                      price: offer.price,
                    })
                  : history.push("/user/log_in");
              }}
            >
              Acheter
            </button>
          </div>
        </div>

        <div>
          <h4>Description</h4>
          <div className="description">{offer.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
