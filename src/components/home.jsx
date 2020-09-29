import React, { Component } from "react";
import "../assets/scss/pages.scss";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home cont">
        <section className=" landing">
          <img
            className="--typography"
            src={require("../assets/img/Typography.png")}
            alt=""
          />
          <br />
          <img
            className="--year"
            src={require("../assets/img/2k20.png")}
            alt=""
          />
          <br />

          <span className="--hosted">Hosted On</span>
          <br />
          <img
            className="--codechefTypo"
            src={require("../assets/img/Codechef.png")}
            alt=""
          />

          <img
            className="--DateTypo"
            src={require("../assets/img/Date.png")}
            alt=""
          />
        </section>
        <section className=" about">About</section>
      </div>
    );
  }
}

export default Home;
