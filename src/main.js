import data from "./data/harrypotter/data.js";

const allCharacters = data.characters.slice(0, 21);
const content = document.querySelector("#showCharacters");

function showAllCharacters() {
  allCharacters.forEach(
    (element, i) =>
    //content.innerHTML+=element.name
    //Template string
    (content.insertAdjacentHTML("beforeend", `<section class="card">
    <ul><img class="wand"src="Img/harry_potter_2-.png" alt="Imagen generica para personajes">
    <br>
    <h3>${element.name}</h3>
    <button data-id=${i} class="btn buttonShow"> Ver +
  </button></ul>
  </section>`))
    //interpolacion de variables
  );
}
showAllCharacters();

const btnVer = document.querySelectorAll(".buttonShow")
const information = document.querySelector("#informationCharacters")
btnVer.forEach((button) => {
  button.addEventListener("click", (event) => {
    const i = event.target.dataset.id
    information.innerHTML += `<div>
  Nombre: ${allCharacters[i].name ? allCharacters[i].name : "Sin información"} \n
  Fecha de Nacimiento: ${allCharacters[i].birth ? allCharacters[i].birth : "Sin información"}
  \n Casa de Hogwarts: ${allCharacters[i].house ? allCharacters[i].house : "Sin información"}
  \n Tipo de Mago: ${allCharacters[i].species ? allCharacters[i].species : "Sin información"}
  </div>`
  })
})


