import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import React, { Component } from "react";

// class component - use this component if have more thing to do than render() method. these are stateful.
class App extends Component {
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

  handleDecreament = (counterId) => {
    const counter = this.state.counters.filter((m) => m.id === counterId); // object that's value will be incremented
    const counters = this.state.counters;
    const index = counters.indexOf(counter[0]); // no issues, counter is array, contains only one object as its value
    counters[index].value = counter[0].value;
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((m) => m.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncreament={this.handleIncreament}
            onDecreament={this.handleDecreament}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
