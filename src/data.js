export const btnData = [
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
    { className: "btn", handler: () => () => handleBtnClick("9"), text: "9" },
    { className: "btn", handler: () => () => handleBtnClick("*"), text: "X" }
  ],

  [
    { className: "btn", handler: () => handleBtnClick("4"), text: "4" },
    { className: "btn", handler: () => handleBtnClick("5"), text: "5" },
    {
      className: "btn",
      handler: () => () => handleBtnClick("6"),
      text: " 6"
    },
    { className: "btn", handler: () => () => handleBtnClick("-"), text: "-" }
  ],

  [
    { className: "btn", handler: () => handleBtnClick("1"), text: "1" },
    { className: "btn", handler: () => handleBtnClick("2"), text: "2" },
    { className: "btn", handler: () => () => handleBtnClick("3"), text: "3" },
    { className: "btn", handler: () => () => handleBtnClick("+"), text: "+" }
  ],
  [
    { className: "btn", handler: () => handleBtnClick("0"), text: "0" },
    { className: "btn", handler: () => handleBtnClick("."), text: "." },
    { className: "btn", handler: () => () => handleResult("="), text: "=" }
  ]
];
