import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notANumber, calculateIMC } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// Events
form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNaN = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNaN) {
    AlertError.open();
    return;
  }

  const resultIMC = calculateIMC(weight, height);
  displayResultMessage(resultIMC);
};

form.onkeydown = function () {
  AlertError.close();
};

function displayResultMessage(resultIMC) {
  const message = `Seu IMC é de ${resultIMC}`;

  Modal.message.innerText = message;
  Modal.open();
}
