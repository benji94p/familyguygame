/* DECLARE DIV DIFFERENT PAGES */

let firstPage = document.querySelector("#introgame");
let mainPage = document.querySelector("#mainpage");

let characterOne = document.querySelector("#player1");
let characterTwo = document.querySelector("#player2");
let characterThree = document.querySelector ("#player3");
let characterFour = document.querySelector ("#player4");
let weaponOne = document.querySelector("#weapon1");
let weaponTwo = document.querySelector("#weapon2");
let instrureal = document.querySelector ("#instructionsreal");
let dylanSound = document.querySelector ("#dylan");
/* HIDE ALL THE PAGES DIV */

firstPage.style.display = "";
mainPage.style.display = "none";

let nextButton = document.querySelector ("#next_button");
nextButton.style.display = "none";

let startButton = document.querySelector("#start-btn");
let playButton = document.querySelector ("#play-button");

startButton.addEventListener("click", showMainPage);

function showMainPage () {
    firstPage.style.display = "none";
    mainPage.style.display = "";
    playButton.style.display ="none";
    characterOne.style.display = "none";
    characterTwo.style.display = "none";
    characterThree.style.display ="none";
    characterFour.style.display ="none";
    weaponOne.style.display = "none";
    weaponTwo.style.display = "none";
    instrureal.style.display ="none";
    let instructions = document.querySelector ("#instructions");
    instructions.innerHTML = "Choose your background";

    let bgOne = document.querySelector("#bg1");
    let bgTwo = document.querySelector("#bg2");
    let bgThree = document.querySelector("#bg3");

    bgOne.addEventListener ("click", showFirstBg);
    bgTwo.addEventListener ("click", showSecondBg);
    bgThree.addEventListener ("click", showThirdBg);

    let bgdiv = document.querySelector ("#choose-bg");
    let weaponThree = document.querySelector ("#weapon3");
    let weaponFour = document.querySelector ("#weapon4");

    weaponThree.style.display = "none";
    weaponFour.style.display = "none";

    function showFirstBg () {
        bgdiv.style.display = "none";
        document.getElementById("mainpage").classList.add( "mainpage1");
        instructions.innerHTML = "Choose your weapon";
        weaponOne.style.display = "";
        weaponTwo.style.display = "";
        weaponThree.style.display = "";
        weaponFour.style.display = "";



    }
    function showSecondBg () {
        document.getElementById("mainpage").classList.add( "mainpage2");
        bgdiv.style.display = "none";
        instructions.innerHTML = "Choose your weapon";
        weaponOne.style.display = "";
        weaponTwo.style.display = "";
        weaponThree.style.display = "";
        weaponFour.style.display = "";
    }
    function showThirdBg () {
        document.getElementById("mainpage").classList.add( "mainpage3");
        bgdiv.style.display = "none";
        instructions.innerHTML = "Choose your weapon";
        weaponOne.style.display = "";
        weaponTwo.style.display = "";
        weaponThree.style.display = "";
        weaponFour.style.display = "";
    }

    weaponOne.addEventListener ("click", peterGun);
    weaponTwo.addEventListener ("click", peterBazooka);
    weaponThree.addEventListener ("click", dogGun);
    weaponFour.addEventListener ("click", dogBazooka);

    let pcontainer = document.querySelector (".p_container");

    function peterGun () {
        characterOne.style.display = "";

        weaponOne.style.display = "none";
        weaponTwo.style.display = "none";
    }

    function peterBazooka () {
        characterTwo.style.display = "";
        weaponOne.style.display = "none";
        weaponTwo.style.display = "none";
    }

    function dogGun () {
        characterThree.style.display = "";
        weaponThree.style.display = "none";
        weaponFour.style.display = "none";
        nextButton.style.display = "";
    }

    function dogBazooka () {
        characterFour.style.display = "";
        weaponThree.style.display = "none";
        weaponFour.style.display = "none";
        nextButton.style.display = "";
    }

    nextButton.addEventListener("click", instructionsShow);

    function instructionsShow () {
        instructions.innerHTML = "Instructions";
        nextButton.style.display = "none";
        pcontainer.style.display = "none";
        instrureal.style.display ="";
        playButton.style.display ="";
    }
    playButton.addEventListener ("click", gameStarts);

    function gameStarts () {
        playButton.style.display ="none";
        instructions.style.visibility = "hidden";
        instrureal.style.visibility = "hidden";
        dylanSound.play();
        var sound       = dylanSound;
        var duration    = sound.duration;
        var random      = Math.floor(Math.random() * duration) + 1
        window.setTimeout(function(){
        dylanSound.pause();
        },random*1000);}



}

