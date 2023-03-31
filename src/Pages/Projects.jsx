import React from 'react';
import {Route, Routes } from 'react-router-dom';
import projectData from '../data/project.json';
import CardWrapper from '../components/CardWrapper';
import "./style.css"

//import Learn from './ProjectCard';


function Projects() {
  return (
    <div>
      <div data-new-gr-c-s-check-loaded="14.1098.0" data-gr-ext-installed="">
        <div>
          <section className="py-5 text-center container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-bold">  Project Board </h1>
                <p className="lead text-muted">Here I have included a snapshot of some of my favorite projects, projects that not only I have enjoyed but also I feel demonstrate my technical abilities as a UX designer. </p>
              </div>
            </div>
          </section>
          <div className="wrapper">
            <div>
                <Routes>
                  <Route path="CardWrapper" element={<CardWrapper />} />
                </Routes>
              
              <CardWrapper data={projectData}/>
            </div>
          </div>
        </div>
      </div>
      {/*projectData.map(project => < Card {...project}/>)*/}
    </div>
  );
}


export default Projects
