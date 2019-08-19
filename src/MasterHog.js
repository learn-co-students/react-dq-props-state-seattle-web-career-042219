import React, { Component } from "react";
import Master from "./assets/master-hog.png";
import BabyHog from "./BabyHog";
import offspring from "./db.js";

export default class MasterHog extends Component {
  constructor() {
    super();
    this.state = {
      eyeColor: ""
    };
  }

  changeEyeColor = e => {
    this.setState({
      eyeColor: e.target.value
    });
  };

  render() {
    console.log(offspring);
    const pigList = offspring.map(pig => {
      return (
        <BabyHog
          key={pig.id}
          name={pig.name}
          hobby={pig.hobby}
          eyeColor={this.state.eyeColor}
        />
      );
    });
    return (
      <div>
        <input
          type="radio"
          name="eyeColor"
          value="blue"
          onChange={this.changeEyeColor}
        />
        Blue
        <br />
        <input
          type="radio"
          name="eyeColor"
          value="sun"
          onChange={this.changeEyeColor}
        />
        Sun
        <br />
        <input
          type="radio"
          name="eyeColor"
          value="glowing"
          onChange={this.changeEyeColor}
        />
        Glowing
        <br />
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        <ul className="hoglist">{pigList}</ul>
      </div>
    );
  }
}
