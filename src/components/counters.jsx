import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncreament = (counterId) => {
    const counter = this.state.counters.filter((m) => m.id === counterId); // object that's value will be incremented
    const counters = this.state.counters;
    const index = counters.indexOf(counter[0]); // no issues, counter is array, contains only one object as its value
    counters[index].value = counter[0].value;
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((m) => m.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm-m2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncreament={this.handleIncreament}
            onDelete={this.handleDelete}
            counter={counter}
          /> // passing value and id from this component to counter component using 'value' and 'id' attribute
        ))}
      </div>
    );
  }
}

export default Counters;
