import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">Copyright@renukadevi</div>
            <div className="col-lg-6 col-sm-12">
              <div className="facebook">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="twitter"> </div>
              <div className="likedin"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
