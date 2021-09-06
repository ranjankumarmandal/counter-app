import React, { Component } from "react";

// class component - use this component if have more thing to do than render() method. these are stateful.
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
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncreament(this.props.counter.id)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecreament(this.props.counter.id)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
