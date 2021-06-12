import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div
        className="footer"
        style={{
          backgroundColor: "green",
          textAlign: "center",
          padding: "15px 0",
          color: "white",
        }}
      >
        Copyright by Mr.Nguyen
      </div>
    );
  }
}

export default Footer;
