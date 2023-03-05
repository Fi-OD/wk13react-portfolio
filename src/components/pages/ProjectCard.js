import React from "react";


 
function ProjectCard(props) {
  const { title, description, thumbnailUrl, viewUrl, gitHubURL } = props;

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={thumbnailUrl} className="bd-placeholder-img card-img-top" width="100%" height="300" role="img" aria-label="Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href={viewUrl} className="btn btn-sm btn-outline-secondary">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;



/*  <div class="col">
    <div class="card shadow-sm">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
      <div class="card-body">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}*/