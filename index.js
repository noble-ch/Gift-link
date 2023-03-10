const inputField = document.getElementById("inputField");
const clickDiv = document.getElementById("img");
const displayText = document.getElementById("displayText");
var message = document.getElementById("message");
function theGift() {
  var box = document.querySelector("#img");
  box.style.backgroundImage = "url('middle.gif')";
  message.textContent = " With ALL Do respect";
  var htwo = document.querySelector("h2");
  htwo.style.fontSize = "32px";
  htwo.style.margin = "0";
  htwo.style.borderRadius = " 20px";
}

clickDiv.addEventListener("click", () => {
  if (inputField.value !== "") {
    if (
      inputField.value !== "noble" &&
      inputField.value !== "nob" &&
      inputField.value !== "noba" &&
      inputField.value !== "nobel" &&
      inputField.value !== "nobl" &&
      inputField.value !== "no" &&
      inputField.value !== "noble biru" &&
      inputField.value !== "noblebiru" &&
      inputField.value !== "n" &&
      inputField.value !== "nobela" &&
      inputField.value !== "noblea" &&
      inputField.value !== "nobleb" &&
      inputField.value !== "noble b" &&
      inputField.value !== "noble a"
    ) {
      displayText.textContent = "Fuck you " + inputField.value;
      theGift();
      message.style.background = "rgb(253, 219, 163)";
      message.style.fontFamily = "got";
      message.style.color = "rgb(130, 95, 48)";
    } else {
      message.textContent = " wrong input 🖕";
      message.style.color = "white";
      message.style.fontFamily = "inherit";
      message.style.background = "red";
    }
  } else {
    message.textContent = " please enter your name";
    message.style.color = "white";
    message.style.fontFamily = "inherit";
    message.style.background = "red";
  }
});
