const welcomeMsgBtn = document.getElementById("welcomeMsgBt");
const helloFriendBtn = document.getElementById("helloFriendBtn");
const texContainer = document.getElementById("textContainer");
const loginSecId = document.getElementById("loginSec");
const signUpSecId = document.getElementById("signUpSec");

const welcomeBackId = document.getElementById("welcomeBack");
const helloFriendId = document.getElementById("helloFriend");

const welcomeBackElem = document.querySelectorAll(".welcomeBackElem");
const helloFriendElem = document.querySelectorAll(".helloFriendElem");

welcomeMsgBtn.addEventListener("click", () => {
  welcomeBackId.classList.toggle("hidden");
  signUpSecId.classList.toggle("hidden");
  texContainer.style.transform = "translateX(100%)";
  loginSecId.classList.toggle("hidden");
  loginSecId.style.transform = "translateX(-100%)";
  texContainer.style.borderRadius = "0 10px 10px 0";
  setTimeout(() => {
    helloFriendId.classList.toggle("hidden");
    signUpSecId.style.transform = "translateX(-100%)";
  }, 900);
});

helloFriendBtn.addEventListener("click", () => {
  helloFriendId.classList.toggle("hidden");
  loginSecId.classList.toggle("hidden");
  texContainer.style.transform = "translateX(0%)";
  signUpSecId.classList.toggle("hidden");
  signUpSecId.style.transform = "translateX(0%)";
  texContainer.style.borderRadius = "10px 0 0 10px";
  setTimeout(() => {
    welcomeBackId.classList.toggle("hidden");
    loginSecId.style.transform = "translateX(0%)";
  }, 900);
});
