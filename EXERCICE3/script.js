const inputs = document.querySelectorAll("input");

const root = document.querySelector(":root");

inputs.forEach((input) => {
  input.addEventListener("input", handlePropertyChange);
});

function handlePropertyChange(event) {
  // console.log(event.target.name);
  const unite = event.target.dataset.sizing;
  if (event.target.name === "color") {
    root.style.setProperty("--color", event.target.value);
  } else if (event.target.name === "spacing") {
    root.style.setProperty("--spacing", event.target.value + unite);
  } else {
    root.style.setProperty("--blur", event.target.value + unite);
  }
}


