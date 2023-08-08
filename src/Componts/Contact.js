import React from "react";
import Footer from "../Footer.js";

const Contact = () => {
  return (
    <div className=" container-fluid contact-div ">
      <div className="container ">
        <div className="row ">
          <div className="contact">
            <div class="mb-3">
              <h2 className="text-center">contact</h2>
              <label class="form-label">Name </label>
              <input
                type="text"
                class="form-control"
                placeholder="enter your Name"
                style={{ width: "400px" }}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="enter your email"
                style={{ width: "400px" }}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Example textarea</label>
              <textarea
                class="form-control"
                rows="3"
                style={{ width: "400px" }}
              ></textarea>
            </div>
            <div>
              <button className="btn btn-primary"> send</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
