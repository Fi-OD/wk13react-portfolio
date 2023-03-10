import React from "react";
import "./style.css";




function Card(props) {
  //const { title, description, thumbnailUrl, viewUrl, gitHubURL } = props;

  return (
    // <div className="col">
    <div className="card">
      <img className="card-img-top" src={props.thumbnailUrl} alt={props.title} ></img>
      <div className="cardBody">
        <h3>{props.title}</h3>
        <p className="card-text">{props.description}.</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <button className="bbtn" >
              <a href={props.viewUrl}>Page</a></button>
          </div>
          <div>
            <a href={props.gitHubURL}>
              <img className="gitHub" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" />
            </a>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
    //</div>


  );
}


export default Card;

