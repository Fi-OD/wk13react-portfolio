import React from "react";
import Card from "../components/Card";
import projectData from "../data/project.json";
import styles from "../components/styles/CardWrapper_module.css";

function CardWrapper() {
    const projects = projectData.projects;

    return (
          <div className="cardWrapper">
             {projectData.map(project => < Card {...project}/>)}
        </div>

    );
}

export default CardWrapper;
