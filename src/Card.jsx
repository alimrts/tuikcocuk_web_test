import React from "react";

import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card" style={{ maxWidth: "20rem" }}>
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Lorem ipsum sit amet. Lorem ipsum sit amet. Lorem ipsum sit amet.
              Lorem ipsum sit amet.
            </p>
            <NavLink
              to={{ pathname: "https://tuikcocuk-webdemo.vercel.app/" }}
              target="_blank"
              className="btn btn-primary"
            >
              {props.goToName}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
