import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => (
  <Fragment>
    <Helmet><title>Quiz App - Home</title></Helmet>
    <div id = "home">
      <h1>Quiz App</h1>
      <p>All the best for the Quiz!</p>
      <div className="play-butt-container">
        <Link to="/quiz">Play</Link>
      </div>
    </div>
    
    
  </Fragment>
);

export default Home;
