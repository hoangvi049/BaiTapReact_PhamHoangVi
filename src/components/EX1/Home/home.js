import React from "react";
import "./home.css";
import Header from "../header/header";
import Content from "../Content/content";
import SideBar from "../SideBar/sidebar";
import Footer from "../footer/footer";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="body">
          <Content />
          <SideBar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
