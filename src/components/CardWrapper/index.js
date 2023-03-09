import React from "react";
import Card from "../Cards/index";
import projectData from "../Cards/project.json";
import "./style.css";

function CardWrapper() {
    const projects = projectData.projects;

    return (
          <div className="cardWrapper">
             {projectData.map(project => < Card {...project}/>)}
        </div>

    );
}

export default CardWrapper;
