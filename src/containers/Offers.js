import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Search from "../components/Search";

const Offers = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/offer/with-count"
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="offersPage">
      <div className="searchBar">
        <Search setData={setData} />
        <div className="offers">
          {data.offers.map((offer, index) => {
            return (
              <>
                <Link key={offer._id} to={`/offer/${offer._id}`}>
                  <div className="offer">
                    <div className="offerPic">
                      <img alt={offer.title} src={offer.picture.url} />
                    </div>
                    <div className="offerDetails">
                      <div>
                        <div>{offer.title}</div>
                        <div>{offer.price} €</div>
                      </div>

                      <div>{offer.created}</div>
                    </div>
                    {/* <div className="date"> */}
                    {/* ALGO POUR RESTRUCTURER LA CHAINE DE CARACTERE */}

                    {/* </div> */}
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;
