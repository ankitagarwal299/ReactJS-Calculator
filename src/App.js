import React, { useState } from "react";
import "./styles.css";
// import {btnData}  from './data'

export default function App() {
  const [inputField, setInputField] = useState("");
  const [showMinus, setShowMinus] = useState(false); //false is + sign

  function handleToggle() {
    setShowMinus(!showMinus);

    let newInput = inputField;
    if (showMinus === false) {
      newInput = "-" + inputField;
    } else {
      newInput = Math.abs(inputField);
    }

    setInputField(newInput.toString());
  }

  function handleBtnClick(value) {
    let newInputField = inputField + value;
    setInputField(newInputField);
  }

  function handleReset() {
    setInputField("");
    setShowMinus(false);
  }

  function handleResult() {
    let sum = eval(inputField);
    setInputField(sum);
  }

  const btnData = [
    [
      { className: "btn", handler: () => handleReset(), text: "C" },
      { className: "btn", handler: () => handleToggle(), text: "+/-" },
      {
        className: "btn",
        handler: () => () => handleBtnClick("%"),
        text: " %"
      },
      { className: "btn", handler: () => () => handleBtnClick("/"), text: "/" }
    ],
    [
      { className: "btn", handler: () => handleBtnClick("7"), text: "7" },
      { className: "btn", handler: () => handleBtnClick("8"), text: "8" },
      { className: "btn", handler: () => handleBtnClick("9"), text: "9" },
      { className: "btn", handler: () => handleBtnClick("*"), text: "X" }
    ],

    [
      { className: "btn", handler: () => handleBtnClick("4"), text: "4" },
      { className: "btn", handler: () => handleBtnClick("5"), text: "5" },
      {
        className: "btn",
        handler: () => handleBtnClick("6"),
        text: " 6"
      },
      { className: "btn", handler: () => handleBtnClick("-"), text: "-" }
    ],

    [
      { className: "btn", handler: () => handleBtnClick("1"), text: "1" },
      { className: "btn", handler: () => handleBtnClick("2"), text: "2" },
      { className: "btn", handler: () => handleBtnClick("3"), text: "3" },
      { className: "btn", handler: () => handleBtnClick("+"), text: "+" }
    ],
    [
      { className: "btn", handler: () => handleBtnClick("0"), text: "0" },
      { className: "btn", handler: () => handleBtnClick("."), text: "." },
      { className: "btn", handler: () => () => handleResult("="), text: "=" }
    ]
  ];

  return (
    <main>
      <div className="input-field">{inputField}</div>

      <div className="btn-container">
        {btnData.map((row, rIndex) => {
          return (
            <div key={rIndex} className="row">
              {row.map((col, cIndex) => {
                return (
                  <button
                    key={cIndex}
                    className={col.className}
                    onClick={col.handler}
                  >
                    {col.text}
                  </button>
                );
              })}
            </div>
          );
        })}

        {/* <div className="row">
          <button className="btn" onClick={() => handleReset()}>
            C
          </button>
          <button className="btn" onClick={() => handleToggle()}>
            +/-
          </button>
          <button className="btn" onClick={() => handleBtnClick("%")}>
            %
          </button>
          <button className="btn" onClick={() => handleBtnClick("/")}>
            /
          </button>
        </div>

        <div className="row">
          <button className="btn" onClick={() => handleBtnClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleBtnClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleBtnClick("9")}>
            9
          </button>
          <button className="btn" onClick={() => handleBtnClick("*")}>
            X
          </button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleBtnClick("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleBtnClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleBtnClick("6")}>
            6
          </button>
          <button className="btn" onClick={() => handleBtnClick("-")}>
            -
          </button>
        </div>

        <div className="row">
          <button className="btn" onClick={() => handleBtnClick("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleBtnClick("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleBtnClick("3")}>
            3
          </button>
          <button className="btn" onClick={() => handleBtnClick("+")}>
            +
          </button>
        </div>
        <div className="row last-row">
          <button className="btn" onClick={() => handleBtnClick("0")}>
            0
          </button>
          <button className="btn" onClick={() => handleBtnClick(".")}>
            .
          </button>
          <button className="btn" onClick={() => handleResult("=")}>
            =
          </button>
        </div> */}
      </div>
    </main>
  );
}
