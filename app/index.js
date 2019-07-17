import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "./components/Counter.jsx";

/**
 * Object tree: Storage
 */

let initialState = {
  counter: 0
};

/**
 * 2.- Creating a Reducer, it takes two parameters: Stata and Action
 */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        counter: state.counter + 1
      };
    case "DECREASE":
      return {
        counter: state.counter - 1
      };
    default:
      return state; //reducer should never return undefined
  }
};

/*
 * 1.- Creating a Store Object, it takes two parameters: Reducer and State
 */
const store = createStore(reducer);

/**
 * 3.- Subscribe example
 */

/*
    store.subscribe(()=>{
        console.log('Store is now', store.getState());
    });
*/

/**
 * 4.- Dispatch action
 */

/*
    store.dispatch({
        type: "ATTACK",
        payload: { name: "Enrique", age: 26 }
    });
*/

ReactDOM.render(
  <Provider store={store}>
    <Counter titleMainComponent="Grandpa Component: Redux + Pass component as props" />
  </Provider>,
  document.getElementById("app")
);
