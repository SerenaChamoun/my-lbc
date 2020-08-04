import React, { useState } from "react";
import axios from "axios";

const Search = ({ setData }) => {
  const [title, setTitle] = useState("");
  const [priceMin, setPriceMin] = useState();
  const [priceMax, setPriceMax] = useState();
  // const [sort, setSort] = useState("");

  let filters = "";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (title) {
        filters = filters + "title=" + title + "&";
      }
      if (priceMin) {
        filters = filters + "priceMin=" + priceMin + "&";
      }
      if (priceMax) {
        filters = filters + "priceMax=" + priceMax + "&";
      }

      // if (sort) {
      //   filters = filters + "sort=" + sort + "&";
      // }

      console.log(filters);
      const response = await axios.get(
        `https://leboncoin-api.herokuapp.com/offer/with-count?${filters}`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="Search">
      <form
        style={{
          width: "700px",
          height: "180px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center ",
          justifyContent: "space-between",
          marginTop: "50px",
          borderRadius: "7px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          style={{
            width: "180px",
            height: "30px",
            marginRight: "5px",
            marginTop: "20px",
            backgroundColor: "#F4F6F7",
            borderStyle: "none",
            paddingLeft: "7px",
          }}
          type="text"
          placeholder="Que rechercher vous?"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <div>
          <span style={{ marginRight: "5px" }}>Prix entre </span>
          <input
            style={{
              width: "70px",
              height: "30px",
              backgroundColor: "#F4F6F7",
              borderStyle: "none",
              paddingLeft: "7px",
            }}
            placeholder="prix min"
            type="number"
            value={priceMin}
            onChange={(event) => setPriceMin(event.target.value)}
          />
          <span style={{ margin: "0 5px" }}>et</span>
          <input
            style={{
              width: "70px",
              height: "30px",
              backgroundColor: "#F4F6F7",
              borderStyle: "none",
              paddingLeft: "7px",
            }}
            placeholder="prix max"
            type="number"
            value={priceMax}
            onChange={(event) => setPriceMax(event.target.value)}
          />
        </div>
        <button
          style={{
            margin: "20px 0",
            width: "150px",
            height: "40px",
            borderStyle: "none",
            backgroundColor: "#4183D7",
            color: "white",
            borderRadius: "7px",
            fontSize: "16px",
          }}
          type="submit"
        >
          Rechercher
        </button>
      </form>
    </div>
  );
};

export default Search;

//`https://leboncoin-api.herokuapp.com/offer/with-count?title=${title}`
// "https://leboncoin-api.herokuapp.com/offer/with-count?title=peugeot"
// `https://leboncoin-api.herokuapp.com/offer/with-count${filters}`
