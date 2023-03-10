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
      inputField.value !== "NOBLE" &&
      inputField.value !== "NOB" &&
      inputField.value !== "NOBA" &&
      inputField.value !== "NOBEL" &&
      inputField.value !== "NOBL" &&
      inputField.value !== "NO" &&
      inputField.value !== "NOBLE BIRU" &&
      inputField.value !== "NOBLEBIRU" &&
      inputField.value !== "N" &&
      inputField.value !== "NOBELA" &&
      inputField.value !== "NOBLE BIRU DEGEFA" &&
      inputField.value !== "NOBLEB" &&
      inputField.value !== "NOBLE B" &&
      inputField.value !== "NOBLE BI" &&
      inputField.value !== "NOBLE BIR" &&
      inputField.value !== "NOBLE BIRRU"
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
