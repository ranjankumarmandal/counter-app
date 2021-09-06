import React, { Component } from "react";

class Counter extends Component {
  // Note – props vs state – props include a data that we give to a component and state includes data that is local or private to that component

  // constructor() {
  //   super();
  //   this.handleIncreament = this.handleIncreament.bind(this);
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  // Event handlers in react call as method invocation which by default return 'window' object. But as 'use strict' is enabled in react by default, hence this will return 'undefined' object. So to resolve this issue, we have used here the arrow function.

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncreament(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
