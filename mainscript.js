/* DECLARE DIV DIFFERENT PAGES */

let firstPage = document.querySelector("#introgame");
let characterPage = document.querySelector("#characterscene");
let weaponPage = document.querySelector("#weaponscene");
let backgroundPage = document.querySelector("#backgroundscene");
let instructionsPage = document.querySelector("#instructionscene");
let gamePage = document.querySelector("#gamescene");

/* HIDE ALL THE PAGES DIV */

firstPage.style.display = "";
characterPage.style.display = "none";
weaponPage.style.display = "none";
backgroundPage.style.display = "none";
instructionsPage.style.display = "none";
gamePage.style.display = "none";

let headerIntro = document.querySelector ("#headerintro");
headerIntro.style.display = "none";

window.onload = firstFunction;
function firstFunction () {
    console.log("Showfirstdiv");
    headerIntro.style.display = "";
    headerIntro.classList.add("introheaderfade");

}
let startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", showCharacterScene);

function showCharacterScene () {
    firstPage.style.display = "none";
    characterPage.style.display = "";
}
