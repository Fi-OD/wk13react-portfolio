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
          <div className="btn-group">
            <button className="btn" >
            <a href={props.viewUrl} target="_blank">Page</a></button>
          </div>
          <div>
          <img src="/images/GitHub_Logo.png"></img>
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

