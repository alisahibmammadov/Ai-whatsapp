const writeInput = document.getElementById("write-input");
const sendBtn = document.getElementById("user-text-btn");
const messages = document.querySelector(".messages");

const botMsgBox = document.createElement("nav");
botMsgBox.classList.add("bot-msg");
messages.appendChild(botMsgBox);

const userMsgBox = document.createElement("nav");
userMsgBox.classList.add("user-msg");
messages.appendChild(userMsgBox);

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userP = document.createElement("p");
  userP.classList.add("user-message");

  userMsgBox.appendChild(userP);
  userP.innerText = writeInput.value;
  const spaceDiv = document.createElement('div')
  spaceDiv.style.height = '1rem'
  botMsgBox.appendChild(spaceDiv)

  if (writeInput.value === "hello") {
    setTimeout(() => {
      const botP = document.createElement("p");
      botP.classList.add("bot-message");
      botMsgBox.appendChild(botP);
      const spaceNav = document.createElement('nav')
      spaceNav.style.height = '1rem'
      userMsgBox.appendChild(spaceNav)
      botP.innerText = "Hello";

    }, 1000);
  }
  if (writeInput.value === "how are you") {
    setTimeout(() => {
      const botP = document.createElement("p");
      botP.classList.add("bot-message");
      botMsgBox.appendChild(botP);
      const spaceNav = document.createElement('nav')
      spaceNav.style.height = '1rem'
      userMsgBox.appendChild(spaceNav)
      botP.innerText = "I am fine, and you?";

    }, 1000);
  }
  if (writeInput.value === "fine") {
    setTimeout(() => {
      const botP = document.createElement("p");
      botP.classList.add("bot-message");
      botMsgBox.appendChild(botP);
      const spaceNav = document.createElement('nav')
      spaceNav.style.height = '1rem'
      userMsgBox.appendChild(spaceNav)
      botP.innerText = "I am pleased you are well";
    }, 1000);
  }
  if (writeInput.value === "who are you") {
    setTimeout(() => {
      const botP = document.createElement("p");
      botP.classList.add("bot-message");
      botMsgBox.appendChild(botP);
      const spaceNav = document.createElement('nav')
      spaceNav.style.height = '1rem'
      userMsgBox.appendChild(spaceNav)
      botP.innerText = "I am artificial intelligence";
    }, 1000);
  }
  if (writeInput.value === "where are you from") {
    setTimeout(() => {
      const botP = document.createElement("p");
      botP.classList.add("bot-message");
      botMsgBox.appendChild(botP);
      const spaceNav = document.createElement('nav')
      spaceNav.style.height = '1rem'
      userMsgBox.appendChild(spaceNav)
      botP.innerText = "Azerbaijan";
    }, 1000);
  }
  if (writeInput.value === "goodbye") {
    setTimeout(() => {
      const botP = document.createElement("p");
      botP.classList.add("bot-message");
      botMsgBox.appendChild(botP);
      const spaceNav = document.createElement('nav')
      spaceNav.style.height = '1rem'
      userMsgBox.appendChild(spaceNav)
      botP.innerText = "Goodbye, Take care";
    }, 1000);
  }

  writeInput.value = "";
});
