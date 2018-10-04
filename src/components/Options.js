import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <button onClick={props.handleDeleteOptions} className="button button--link">
      Remove All
    </button>
    {props.option.length === 0 && <p>Please add an option to get started!</p>}
    {props.option.map(opt => (
      <Option
        key={opt}
        optionText={opt}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
