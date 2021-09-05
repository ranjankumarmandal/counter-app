import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value, // passing value from counters component to this component
  };

  // constructor() {
  //   super();
  //   this.handleIncreament = this.handleIncreament.bind(this);
  // }

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
  handleIncreament = () => {
    //console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncreament()}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
      </div>
    );
  }
}

export default Counter;
