import React, { useState } from "react";
//https://raw.githubusercontent.com/Yug34/SeeVee/main/Yug_CV.pdf

import allbotImg from "../images/discord.png";
import covidImg from "../images/coronavirus.png";
import seamlessImg from "../images/volume.png";
import portfolioGenImg from "../images/portfolioGen.png";

import Project from "./Project";
import { Carousel } from "react-responsive-carousel";

function Projects() {
  const [auto, setAuto] = useState(true);

  const stopAutoPlay = () => {
    setAuto(false);
  };

  const startAutoPlay = () => {
    setAuto(true);
  };

  const allBotDesc = [
    "Discord bot written in Node.js",
    "Stream music from YouTube",
    "Currency system with Mongoose",
    "..and a shop too!",
    "Snarky.",
    "Kanye quotes in case you need them",
    "Aren't you sold already?",
  ];

  const covidDesc = [
    "Made a DNN off ResNet50v2 to classify X-rays of human lungs into normal, pneumonia and covid cases.",
    "~94.5% accuracy on the validation set",
    "... and ~96.6 on the test set!",
    "Oh and only 0.78% false negatives.",
    "And hey, this project also won our team the IBM innovation camp 2021.",
  ];

  const seamlessDesc = ["Soon ^-^"];

  const portolioGenDesc = [
    "Takes user data as input",
    "Stores data as a JSON object",
    "Produces a website as output from the JSON",
    "Output website is a react app, hostable on gh pages",
    "...it's basically this site.",
  ];

  return (
    <div className="tiltContainer">
      <Carousel
        showArrows={true}
        showThumbs={false}
        statusFormatter={() => {}}
        axis="vertical"
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        stopOnHover={auto}
        // swipeable={true}
        // emulateTouch={true}
      >
        <div className="projectSlide">
          <Project
            name="AllBOT"
            keywords={["All", "BOT"]}
            Img={allbotImg}
            description={allBotDesc}
            link="https://github.com/Yug34/allBOT"
          />
          <Project
            name="CoviDetect"
            keywords={["COV", "Detect"]}
            Img={covidImg}
            description={covidDesc}
            link="https://github.com/Yug34/cov-detect"
          />
          <Project
            name="Seamless"
            keywords={["Music", "Player"]}
            Img={seamlessImg}
            description={seamlessDesc}
            link="https://github.com/Yug34/allBOT"
          />
        </div>
        <div className="projectSlide">
          <Project
            name="Portfoliogen"
            Img={portfolioGenImg}
            description={portolioGenDesc}
            link="https://github.com/Yug34/allBOT"
          />
          <Project
            name="AllBOT"
            Img={allbotImg}
            description={allBotDesc}
            link="https://github.com/Yug34/allBOT"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Projects;
