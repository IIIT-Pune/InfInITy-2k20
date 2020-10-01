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
        <section className="landing">
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
        <section className="about">
          <h2 id="abt_h2">About</h2>
          <div className="content">
            <p>
              InfInITy is IIIT Pune's annual flagship coding contest hosted
              every year on Codechef. A 3 hour coding contest that's guaranteed
              to get your head itching and your heart wanting more. InfInITy
              started in 2017 and was limited only to IIIT Pune.
            </p>
            <p>
              The contest follows ACM style scoring and consists of problems
              designed for particpants ranging from beginners to experts. Anyone
              having a knack for coding is encouraged to participate.
            </p>
            <br />
            <h3>Team</h3>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
