import React from "react";
import Button from "../Button/index"



function Card(props) {
  //const { title, description, thumbnailUrl, viewUrl, gitHubURL } = props;

  return (
  <div className="card">
    <img className= "card-img-top" src={props.thumbnailUrl} alt={props.title} ></img>
    <div className="cardBody">
    <h3>{props.title}</h3>
      <p className="card-text">{props.description}.</p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
        <Button
        onClick={props.handleBtnClick}
        data-value="Repo"
      />
      <Button
        onClick={props.handleBtnClick}
        data-value="Page"
      />
      </div>
      </div>
    </div>
  </div>
);
}
    

export default Card;

