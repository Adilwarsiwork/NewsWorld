import React from "react";
import { useState } from "react";
import { ImSearch } from "react-icons/im";

const Head = () => {
  const [search, setSearch] = useState();
  const searchFunction = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  return (
    <>
      <section className="head">
        <div className="container head-box">
          <div className="logo">
            {/* <img src='../images/logo.png' alt='' />  flexSB paddingTB*/}
            <h1>NEWS WORLD</h1>
          </div>
          <div className="search-box">
            {/* <img src="../images/headerb.png" alt="" /> *  ad*/}
            <input
              id="search-field"
              type="text"
              placeholder="Search here for latest news ....."
              name="search-input"
              value={search}
              onChange={searchFunction}
            />
            <ImSearch id="search-icon"></ImSearch>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
