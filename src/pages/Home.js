import React, { Fragment } from "react";
import videoHomepage from "../assets/hero.mp4";
import video4k from "../assets/homepage-4k.mp4";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import Video from "../components/video/Video";
import DivBlock from "../components/DivBlock/DivBlock";
const Home = () => {
  return (
    <div>
      {/* ss1 */}
      <div className="flex items-center justify-center mx-28 homepage-contain ">
        <div className="px-5">
          <h1 className="text-[80px] leading-[1]">
            Get to know your customers with forms worth filling out
          </h1>
          <p className="mt-4 text-xl font-normal">
            Collect all the data you need to{" "}
            <strong>understand customers</strong> with forms designed to be
            refreshingly different.
          </p>
          <Button
            className="py-3 mt-5 h-14"
            to="/signup"
            link
            child={"Get started-it's free"}
          ></Button>
        </div>
        <Video videoSrc={videoHomepage}></Video>
      </div>

      {/* ss2 */}
      <DivBlock></DivBlock>
      <div>
        <h1 className="text-[64px] font-normal mx-auto max-w-[1200px] text-center">
          Typeform helps you understand customers
        </h1>
      </div>
      <DivBlock></DivBlock>
      <div className="flex items-center justify-center mx-28 homepage-contain ">
        <Video className="h-full" videoSrc={video4k}></Video>
        <div className="px-5 ">
          <span className="font-normal text-3 ">
            FORMS, SURVEYS, AND QUIZZES
          </span>
          <h1 className="text-12 leading-[1] w-[400px] mt-3 font-normal">
            Get up to 3.5x more data about them
          </h1>
          <p className="mt-4 max-w-[500px] text-xl font-normal">
            When your forms break the norm, more people fill them out. Think
            branded designs, video content, and relevant follow-up questions.
          </p>
          <Button
            className="w-[300px] h-[50px] py-3 mt-3"
            to="/signup"
            link
            child={"Sign up"}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
