import { Component } from "react";

class DataBinding extends Component {
  //   fullName = "Phạm Hoàng Vĩ";

  //   showInfor() {
  //     return "Hello ";
  //   }

  //   showName = () => {
  //     alert("Hi " + this.fullName);
  //   };

  //   //closure (function => (return ra) function khác)
  //   showNameWithParams = (name) => {
  //     return () => {
  //       alert("hello " + name);
  //     };
  //   };

  state = {
    movieType: "comming",
    isLogIn: true,
  };
  handelChangeMovieTabs = (type) => {
    return () => {
      //   this.state.movieType = type;

      //Thay đổi state
      this.setState({
        movieType: type,
      });
      console.log(this.state.movieType);
    };
  };

  //   showLogInMess = () => {
  //     if (this.state.isLogIn) {
  //       return <div>Please log in</div>;
  //     }
  //     return <div>Welcome</div>;
  //   };

  showListMovie = () => {
    if (this.state.movieType === "showing") {
      return (
        <div>
          <h1>Danh sách phim đang chiếu</h1>
        </div>
      );
    } else if (this.state.movieType === "comming") {
      return (
        <div>
          <h1>Danh sách phim sắp chiếu</h1>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {/* <h1> Demo DataBinding</h1>
        <p> {this.fullName}</p>
        <p> {this.showInfor()}</p>
        <button className="btn" onClick={this.showName}>
          Show Name
        </button>
        <button className="btn" onClick={this.showNameWithParams("Vĩ")}>
          Show Name With Params
        </button> */}
        <button
          className="btn btn-success"
          onClick={this.handelChangeMovieTabs("showing")}
        >
          Phim đang chiếu
        </button>
        <button
          className="btn btn-primary"
          onClick={this.handelChangeMovieTabs("comming")}
        >
          Phim Sắp chiếu
        </button>
        {this.showListMovie()}
        -------------
        {/* {this.showLogInMess()} */}
        {this.state.isLogIn ? <div>Please Login</div> : <div>Welcome</div>}
      </div>
    );
  }
}

export default DataBinding;
