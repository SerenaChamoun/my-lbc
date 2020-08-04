import React from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/logo.jpg";

const Header = ({ user, setUser }) => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header-1">
        <div>
          <img alt="logo" src={logo} />

          <button
            onClick={(event) => {
              user ? history.push("/publish") : history.push("/user/log_in");
            }}
          >
            <FontAwesomeIcon icon="plus-square" />
            <div>Déposer une annonce</div>
          </button>

          <div className="search">
            <span>
              <FontAwesomeIcon icon="search" />
            </span>
            <input
              // className="searchInput"
              style={{
                borderStyle: "none",
                fontSize: "22px",
                marginLeft: "10px",
              }}
              type="text"
              placeholder="Rechercher"
            />
          </div>
        </div>
        <div className="user">
          {user === null ? (
            <div
              onClick={() => {
                history.push("/user/log_in");
              }}
            >
              <FontAwesomeIcon icon="user" />
              <div>Se connecter</div>
            </div>
          ) : (
            <div
              onClick={() => {
                Cookies.remove("token");
                setUser(null);
                history.push("/user/log_in");
              }}
            >
              <FontAwesomeIcon icon="user" />
              Se deconnecter
            </div>
          )}
        </div>
      </div>
      {/* <div className="header-2"></div> */}
    </div>
  );
};

export default Header;
