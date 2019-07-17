import React from "react";
import { connect } from "react-redux";
import { FatherContainer } from "./FatherContainer.jsx";
import { ChildComponent } from "./ChildComponent.jsx";

class Counter extends React.Component {
  constructor() {
    super();
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.props.dispatch({ type: "INCREASE" });
    // getState allos you to check the new values in Storage
    console.log("store.getState()");
  }

  decrease() {
    this.props.dispatch({ type: "DECREASE" });
    // getState allos you to check the new values in Storage
    console.log("store.getState()");
  }

  render() {
    console.log("Grandpa Component");
    return (
      <>
        <h1>{this.props.titleMainComponent}</h1>
        <section>
          <p>Counter: {this.props.counter}</p>
          <button onClick={this.decrease}>-</button>
          <button onClick={this.increase}>+</button>
        </section>

        {/* 
            We will pass a Component as props
        */}
        <hr />
        <FatherContainer
          dummyDataToPass="69"
          obj={{ name: "alv" }}
          componentPassedViaProps={<ChildComponent />}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(Counter);
