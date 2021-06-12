import React, { Component } from "react";
import Laptop1 from "./img/lt_rog.png";

class Product2 extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="card bg-light" style={{ width: 300 }}>
            <img
              className="card-img-top"
              src={Laptop1}
              alt="Card image"
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">ASUS ROG</h4>
              <p className="card-text">
                the Asus ROG Strix Flare is the latest addition to Asus' lineup
                of ROG branded devices
              </p>
              <a href="#" className="btn btn-primary">
                Detail
              </a>
              <a href="#" className="btn btn-danger">
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product2;
