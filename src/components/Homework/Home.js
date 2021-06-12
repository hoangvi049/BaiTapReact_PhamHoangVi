import { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProducList_SmartPhone from "./ProducList_SmartPhone,";
import ProductList_Laptop from "./ProductList_Laptop";
import Slide from "./Slide";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slide />
        <ProducList_SmartPhone />
        <ProductList_Laptop />
        <Footer />
      </div>
    );
  }
}

export default Home;
