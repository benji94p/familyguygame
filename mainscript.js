/* DECLARE DIV DIFFERENT PAGES */

let firstPage = document.querySelector("#introgame");
let mainPage = document.querySelector("#mainpage");

let characterOne = document.querySelector("#player1");
let characterTwo = document.querySelector("#player2");
let weaponOne = document.querySelector("#weapon1");
let weaponTwo = document.querySelector("#weapon2");


/* HIDE ALL THE PAGES DIV */

firstPage.style.display = "";
mainPage.style.display = "none";

let startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", showMainPage);

function showMainPage () {
    firstPage.style.display = "none";
    mainPage.style.display = "";
    characterOne.style.display = "none";
    characterTwo.style.display = "none";
    weaponOne.style.display = "none";
    weaponTwo.style.display = "none";
    let instructions = document.querySelector ("#instructions");
    instructions.innerHTML = "Choose your background";

    let bgOne = document.querySelector("#bg1");
    let bgTwo = document.querySelector("#bg2");
    let bgThree = document.querySelector("#bg3");

    bgOne.addEventListener ("click", showFirstBg);
    bgTwo.addEventListener ("click", showSecondBg);
    bgThree.addEventListener ("click", showThirdBg);

    let bgdiv = document.querySelector ("#choose-bg");

    function showFirstBg () {
        bgdiv.style.display = "none";
        document.getElementById("mainpage").classList.add( "mainpage1");
        instructions.innerHTML = "Player One, choose your character !";
        characterOne.style.display = "";
        characterTwo.style.display = "";


    }
    function showSecondBg () {
        document.getElementById("mainpage").classList.add( "mainpage2");
        bgdiv.style.display = "none";
        instructions.innerHTML = "Player One, choose your character !";
        characterOne.style.display = "";
        characterTwo.style.display = "";
    }
    function showThirdBg () {
        document.getElementById("mainpage").classList.add( "mainpage3");
        bgdiv.style.display = "none";
        instructions.innerHTML = "Player One, choose your character !";
        characterOne.style.display = "";
        characterTwo.style.display = "";
    }

}

