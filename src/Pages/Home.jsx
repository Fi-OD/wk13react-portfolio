import React from "react";
import "./style.css";

function Home() {
  return (
    <div>
        <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">FIN -<br></br>NOO -<br></br>LAH</h1>
        <p className="lead">An experienced museum professional with a passion for leveraging digital technology to revolutionize the museum experience</p>
        <div className="cvDiv">
              <button className="cvBtn">
          CV
        </button>
        </div>
      </div>
    </div>
  </div>
   </div>
  );
}

export default Home;
