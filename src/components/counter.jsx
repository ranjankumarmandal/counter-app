import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };

  // constructor() {
  //   super();
  //   this.handleIncreament = this.handleIncreament.bind(this);
  // }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncreament(product)}
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

  // Event handlers in react call as method invocation which by default return 'window' object. But as 'use strict' is enabled in react by default, hence this will return 'undefined' object. So to resolve this issue, we have used here the arrow function.
  handleIncreament = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
