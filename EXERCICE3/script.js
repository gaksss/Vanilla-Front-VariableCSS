
const inputs = document.querySelectorAll("input");

const root = document.documentElement;


function handlePropertyChange(event) {
  
  const name = event.target.name; // spacing, blur, color
  const value = event.target.value;
  const suffix = event.target.dataset.sizing || ""; 

  // Détermine la propriété CSS à mettre à jour
  if (name === "color") {
    root.style.setProperty(`--color`, value);
  } else {
    root.style.setProperty("--"+ name, value + suffix);
  }
}

// Ajoute l'événement à chaque input
inputs.forEach((input) => {
  input.addEventListener("change", handlePropertyChange);
});