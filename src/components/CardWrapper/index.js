import React from "react";
import Card from "../Cards/index";
import projectData from "../Cards/project.json";
import "./style.css";
import { Route } from "react-router-dom";

function CardWrapper() {
    const projects = projectData.projects;

    return (
          <div ClassName="cardWrapper">
             {projectData.map(project => < Card {...project}/>)}
        </div>

    );
}

export default CardWrapper;
