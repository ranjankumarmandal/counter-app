import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncreament}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  handleIncreament() {
    console.log("Increament button clicked !!");
  }
}

export default Counter;
