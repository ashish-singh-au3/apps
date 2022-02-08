import React from "react";
import requests from "../../Request";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Row from "../Row/Row";

import "./Homescreen.css";

function Homescreen() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default Homescreen;
