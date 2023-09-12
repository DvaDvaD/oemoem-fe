document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    const box = document.querySelector(".box");
    box.style.backgroundColor = "black";
  });

  const resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener("click", () => {
    const box = document.querySelector(".box");
    box.style.backgroundColor = "blueviolet";
  });

  const submitButton = document.querySelector("#submit-button");
  submitButton.addEventListener("click", () => {
    const input = document.querySelector("input");
    const hasilSubmit = document.querySelector("#hasil-submit");
    hasilSubmit.innerHTML = input.value;
  });

  const accordion = document.querySelector(".accordion");
  accordion.addEventListener("click", () => {
    const content = document.querySelector(".content");

    if (content.style.display === "block") {
      content.style.display = "none";
      return;
    }
    content.style.display = "block";
  });
});
