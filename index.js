let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);

//fade
window.addEventListener("scroll", function() {
  let sections = document.querySelectorAll(".section");
  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    if (isInView(section)) {
      section.classList.add("in-view");
    }
  }
});

function isInView(element) {
  let rect = element.getBoundingClientRect();
  let windowHeight = window.innerHeight;
  return rect.top <= windowHeight && rect.bottom >= 0;
}
function isInView(element) {
  let rect = element.getBoundingClientRect();
  let windowHeight = window.innerHeight;
  return rect.top <= windowHeight && rect.bottom >= 0;
}
document.getElementById("reduce-motion-button").addEventListener("click", function() {
  document.body.classList.toggle("no-scroll-animation");
});

//petition
let count =4;

const addSignature = (name, city) => {
  let sigPara = document.createElement("p");
  sigPara.innerText = `🖊️ ${name} has placed  ${city} on hold from the Hogwarts Library.`;
  let signatures = document.querySelector(".signatures");
  signatures.appendChild(sigPara);
  count++;
  let countPara = document.getElementById("signature-count");
  countPara.innerText = `🖊️There are  ${count} Magical Resources unavailable .`;
}

const validateForm = () => {
  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;
  let name = petitionInputs["name"].value;
  let city = petitionInputs["city"].value;
  let email = petitionInputs["email"].value;
  if (name.trim().length < 2) {
    petitionInputs["name"].classList.add("error");
    containsErrors = true;
  } else {
    petitionInputs["name"].classList.remove("error");
  }
  if (city.trim().length < 2) {
    petitionInputs["city"].classList.add("error");
    containsErrors = true;
  } else {
    petitionInputs["city"].classList.remove("error");
  }
  if (email.trim().length < 2 || !email.endsWith(".com")) {
    petitionInputs["email"].classList.add("error");
    containsErrors = true;
  } else {
    petitionInputs["email"].classList.remove("error");
  }
  if (!containsErrors) {
    addSignature(name, city);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
}

document.getElementById("sign-now-button").addEventListener("click", validateForm);

let popup = document.getElementById("pop-up");
function openPopup(){
  const name = document.getElementById("name").value;

  // Customize the popup message with the name
  const message = `You're the best  ${name}!`;


  const popupMessage = document.getElementById("popup-message");
  popupMessage.textContent = message;

  popup.classList.add("open-popup");
  setTimeout(function() {
  popup.classList.remove("open-popup");
  }, 4000);  
}
function closePopup(){
  popup.classList.remove("open-popup");
}
