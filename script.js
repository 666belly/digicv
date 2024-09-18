document.addEventListener("DOMContentLoaded", function () {
  const textToType = "Hi, I'm Isabel, welcome to my portfolio! :) ";
  const typewriterElement = document.getElementById("typewriter");
  let index = 0;

  function typeLetter() {
    typewriterElement.innerHTML = textToType.substring(0, index + 1);
    index++;

    if (index < textToType.length) {
      setTimeout(typeLetter, 100); 
    }
  }

  setTimeout(typeLetter, 500); 
});
