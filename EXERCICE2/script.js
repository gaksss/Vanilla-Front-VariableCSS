// Définir la variable permettant de récupérer l'input de type color

const pick = document.querySelector("input");
const r = document.querySelector(":root");
pick.addEventListener("input", handleChangeColor);

function handleChangeColor(event) {
  r.style.setProperty("--main-color", pick.value);
}
/* A cette variable, appliquer la méthode (addEventListener) écoutant l'événement de type change et jouant la fonction permettant d'ajouter une propriété de style (SetProperty) au document :
- le nom de la propriété est la variable CSS --main-color 
- La valeur est définie par la valeur de l'input
*/
