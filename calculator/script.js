// Grabing all the bUttons first

const btns = document.querySelectorAll(".btn");
let stringToDisplay = "";
console.log(btns);
const operators = ["+", "-", "%", "*"];

//grab the display em=lement
// console.log(btn);

const displayElement = document.querySelector(".display");
// console.log(displayElement);
//lop through the buttons
console.log(displayElement);
btns.forEach((btn) => {
  // console.log("btn:", btn.innerText)

  btn.addEventListener("click", () => {
    let clickedButton = btn.innerText;
    stringToDisplay = stringToDisplay + clickedButton;

    displayResult(stringToDisplay);

    if (clickedButton === "AC") {
      stringToDisplay = "";
      return displayResult("");
    }

    if (clickedButton === "D") {
      stringToDisplay = stringToDisplay.slice(0, -1);
      //   console.log("inside div");
      return displayResult(stringToDisplay);
    }
    {
      stringToDisplay = stringToDisplay + clickedButton;
      displayResult(stringToDisplay);
    }
  });
});

const displayResult = (value) => {
  displayElement.innerText = value || "0";
};
