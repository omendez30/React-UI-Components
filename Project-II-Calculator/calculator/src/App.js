import React from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import btnContainer from "./components/ButtonComponents/btn-container";

const App = () => {
  return (
    <div className="app">
      {/* <DisplayComponent />
          <ButtonComponent /> */}
      <CalculatorDisplay />
      <btnContainer className="button-container">
        <ActionButton className="text" text="clear" />
        <NumberButton buttonStyle="operators" text="/" />
      </btnContainer>
      <btnContainer>
        <NumberButton buttonStyle="numbers" text="7" />
        <NumberButton buttonStyle="numbers" text="8" />
        <NumberButton buttonStyle="numbers" text="9" />
        <NumberButton buttonStyle="operators" text="X" />
      </btnContainer>
      <btnContainer>
        <NumberButton buttonStyle="numbers" text="4" />
        <NumberButton buttonStyle="numbers" text="5" />
        <NumberButton buttonStyle="numbers" text="6" />
        <NumberButton buttonStyle="operators" text="-" />
      </btnContainer>
      <btnContainer>
        <NumberButton buttonStyle="numbers" text="1" />
        <NumberButton buttonStyle="numbers" text="2" />
        <NumberButton buttonStyle="numbers" text="3" />
        <NumberButton buttonStyle="operators" text="+" />
      </btnContainer>
      <btnContainer>
        <NumberButton buttonStyle="numbers" text="0" />
        <NumberButton buttonStyle="numbers" text="=" />
      </btnContainer>
    </div>
  );
};

export default App;
