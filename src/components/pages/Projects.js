import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from './ProjectCard';


function Projects(props) {
  return (
    <div>
      <body data-new-gr-c-s-check-loaded="14.1098.0" data-gr-ext-installed="">


        <div>
          <section class="py-5 text-center container">
            <div class="row">
              <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Album example</h1>
                <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
              </div>
            </div>
          </section>
          <div class="album py-5 bg-light">
            <div class="container">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <Routes>
                  <Route path="projectcard" element={<ProjectCard />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}


export default Projects