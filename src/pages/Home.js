import React, { Fragment } from "react";
import videoHomepage from "../assets/video-homepage.mp4";
const Home = () => {
  return (
    <div className="homepage-container">
      <div className="flex justify-around items-center">
        <video autoPlay muted loop>
          <source src={videoHomepage} type="video/mp4" />
          <div className="">text</div>
        </video>
      </div>
    </div>
  );
};

export default Home;
