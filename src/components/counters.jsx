import React from "react";
import Counter from "./counter";

// class component - use this component if have more thing to do than render() method. these are stateful.
class Counters extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm-m2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncreament={this.props.onIncreament}
            onDecreament={this.props.onDecreament}
            onDelete={this.props.onDelete}
            counter={counter}
          /> // passing value and id from this component to counter component using 'value' and 'id' attribute
        ))}
      </div>
    );
  }
}

export default Counters;
