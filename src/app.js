import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "./styles/styles.scss";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class NewSyntax {
  name = "Sean";
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
