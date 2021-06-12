import { Component } from "react";
import RedCar from "./imgCar/red-car.jpg";
import BlackCar from "./imgCar/black-car.jpg";
import SilverCar from "./imgCar/silver-car.jpg";
import SteelCar from "./imgCar/steel-car.jpg";

class EXDataBingding extends Component {
  state = {
    imgSr: RedCar,
  };

  changeImg = (img) => {
    return () => {
      this.setState({
        imgSr: img,
      });
    };
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <img src={this.state.imgSr} alt="RedCar" />
          </div>
          <div className="col-5"></div>
          <h5>Change color</h5>
          <button className="btn btn-danger" onClick={this.changeImg(RedCar)}>
            Red
          </button>
          <button className="btn btn-dark" onClick={this.changeImg(BlackCar)}>
            Black
          </button>
          <button className="btn" onClick={this.changeImg(SilverCar)}>
            Silver
          </button>
          <button className="btn btn-light" onClick={this.changeImg(SteelCar)}>
            Steel
          </button>
        </div>
      </div>
    );
  }
}

export default EXDataBingding;
