import React from "react";

import Project from "./Project";
import { Carousel } from "react-responsive-carousel";

//TODO: Investigate if the userDetails would work if you do src={require("./pathToImage")}

function Projects(props) {
  const projectList = props.projectList;

  const projectGroups = [];
  for (let i = 0; i < projectList.length; i += 3) {
    const group = [];
    group.push(projectList[i]);
    if (i + 1 < projectList.length) {
      group.push(projectList[i + 1]);
      if (i + 2 < projectList.length) {
        group.push(projectList[i + 2]);
      }
    }
    projectGroups.push(group);
  }

  const projectSlides = projectGroups.map((group) => (
    <div className="projectSlide">
      {group.map((project) => (
        <Project
          key={project.name}
          imageScale={project.imageScale}
          name={project.name}
          keywords={project.keywords}
          Img={project.image}
          description={project.description}
          link={project.link ? project.link : null}
        />
      ))}
    </div>
  ));

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
        stopOnHover={true}
        // swipeable={true}
        // emulateTouch={true}
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div
              className="projectArrow"
              id="nextProjectArrow"
              onClick={onClickHandler}
            >
              <div
                className="scroll-up"
                style={{ transform: "rotate(180deg)" }}
              >
                <span className="left-bar" />
                <span className="right-bar" />
                <svg width="40" height="40">
                  <line className="top" x1="0" y1="0" x2="120" y2="0" />
                  <line className="left" x1="0" y1="40" x2="0" y2="-80" />
                  <line className="bottom" x1="40" y1="40" x2="-80" y2="40" />
                  <line className="right" x1="40" y1="0" x2="40" y2="1200" />
                </svg>
              </div>
            </div>
          )
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <div
              className="projectArrow"
              id="prevProjectArrow"
              onClick={onClickHandler}
            >
              <div className="scroll-up" style={{ transform: "rotate(0deg)" }}>
                <span className="left-bar" />
                <span className="right-bar" />
                <svg width="40" height="40">
                  <line className="top" x1="0" y1="0" x2="120" y2="0" />
                  <line className="left" x1="0" y1="40" x2="0" y2="-80" />
                  <line className="bottom" x1="40" y1="40" x2="-80" y2="40" />
                  <line className="right" x1="40" y1="0" x2="40" y2="1200" />
                </svg>
              </div>
            </div>
          )
        }
      >
        {projectSlides}
      </Carousel>
    </div>
  );
}

export default Projects;
