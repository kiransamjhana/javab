// Grabing all the bUttons first

const btns = document.querySelectorAll(".btn");
const audioFile = new Audio("./pranksound.wav");
let stringToDisplay = "";
let latestOperator = "";

const operators = ["+", "-", "%", "*", "/"];

//grab the display em=lement
// console.log(btn);

const displayElement = document.querySelector(".display");
// console.log(displayElement);
//lop through the buttons
// console.log(displayElement);
btns.forEach((btn) => {
  // console.log("btn:", btn.innerText)

  btn.addEventListener("click", () => {
    let clickedButton = btn.innerText;
    //block user if theyb select operator in the staring
    if (operators.includes(clickedButton) && !stringToDisplay.length) {
      return;
    }

    // displayResult(stringToDisplay);

    if (clickedButton === "AC") {
      stringToDisplay = "";
      return displayResult("");
    }

    if (clickedButton === "←") {
      stringToDisplay = stringToDisplay.slice(0, -1);
      //   console.log("inside div", stringToDisplay);
      return displayResult(stringToDisplay);
    }

    if (operators.includes(clickedButton)) {
      latestOperator = clickedButton;
      const lastCharacter = stringToDisplay.slice(-1);
      // console.log("lastCharacter", lastCharacter);

      if (operators.includes(lastCharacter)) {
        stringToDisplay = stringToDisplay.slice(0, -1);
        // console.log("hi iam here ");

        // console.log("operator is clicked");
      }
    }

    if (clickedButton === "=") {
      const lastCharacter = stringToDisplay.slice(-1);
      if (operators.includes(lastCharacter)) {
        stringToDisplay = stringToDisplay.slice(0, -1);
      }
      return displayTotal(stringToDisplay);
    }

    // if (stringToDisplay.includes("." + ".")) {
    //   stringToDisplay = stringToDisplay.slice(0, -1);
    //   displayResult(stringToDisplay);
    // }
  });
});

const displayResult = (value) => {
  displayElement.innerText = value || "0";
};

const displayTotal = (value) => {
  const prankedData = sendRandom();

  if (prankedData) {
    audioFile.play();
    displayElement.style.background = "orange";
    setTimeout(() => (displayElement.style.background = ""), 2000);
  }

  {
    let totalValue = eval(value).toString();
    stringToDisplay = totalValue;
    displayResult(totalValue);
  }
};

const sendRandom = () => {
  let randomnum = Math.round(Math.random() * 10);
  //  if (randomnum <3){
  //     return randomnum;
  //  } else{
  //     return 0;
  //  }

  //Tertiary operaion

  return randomnum < 3 ? randomnum : 0;
};
