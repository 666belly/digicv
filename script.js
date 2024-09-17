document.addEventListener("DOMContentLoaded", function () {
  const textToType = "Hi, I'm Isabel, welcome to my online portfolio!";
  const typewriterElement = document.getElementById("typewriter");
  let index = 0;

  function typeLetter() {
    // Build the string up to the current index
    typewriterElement.innerHTML = textToType.substring(0, index + 1);
    index++;

    if (index < textToType.length) {
      setTimeout(typeLetter, 100); // Typing speed
    }
  }

  setTimeout(typeLetter, 500); // Start delay
});

document.querySelectorAll(".sidebar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
