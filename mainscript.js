
/* DECLARE DIV DIFFERENT PAGES */

let firstPage = document.querySelector("#introgame");

let mainPage = document.querySelector("#mainpage");

let characterOne = document.querySelector("#player1");

let characterTwo = document.querySelector("#player2");

let characterThree = document.querySelector ("#player3");

let characterFour = document.querySelector ("#player4");

let weaponOne = document.querySelector("#weapon1");

let weaponTwo = document.querySelector("#weapon2");

let weaponThree = document.querySelector ("#weapon3");

let weaponFour = document.querySelector ("#weapon4");

let instrureal = document.querySelector ("#instructionsreal");

let dylanSound = document.querySelector ("#dylan");

let peterWeapon = null;

let chickenWeapon = null;

let bulletOne = document.querySelector ("#bullet1");

let bulletTwo = document.querySelector ("#bullet2");

let bulletThree = document.querySelector ("#bullet3");

let bulletFour = document.querySelector ("#bullet4");

let restartButton = document.querySelector ("#restart-button");

let numberAze = null;
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
    restartButton.style.display = "none";
    mainPage.style.display = "";
    playButton.style.display ="none";
    characterOne.style.display = "none";
    characterTwo.style.display = "none";
    characterThree.style.display ="none";
    characterFour.style.display ="none";
    weaponOne.style.display = "none";
    weaponTwo.style.display = "none";
    instrureal.style.display ="none";
    bulletOne.style.display ="none";
    bulletTwo.style.display ="none";
    bulletThree.style.display ="none";
    bulletFour.style.display ="none";
    let instructions = document.querySelector ("#instructions");
    instructions.innerHTML = "Choose your background";

    let bgOne = document.querySelector("#bg1");
    let bgTwo = document.querySelector("#bg2");
    let bgThree = document.querySelector("#bg3");

    bgOne.addEventListener ("click", showFirstBg);
    bgTwo.addEventListener ("click", showSecondBg);
    bgThree.addEventListener ("click", showThirdBg);

    let bgdiv = document.querySelector ("#choose-bg");


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
        peterWeapon = 1;
    }

    function peterBazooka () {
        characterTwo.style.display = "";
        weaponOne.style.display = "none";
        weaponTwo.style.display = "none";
        peterWeapon = 2;
    }

    function dogGun () {
        characterThree.style.display = "";
        weaponThree.style.display = "none";
        weaponFour.style.display = "none";
        nextButton.style.display = "";
        chickenWeapon = 3;
    }

    function dogBazooka () {
        characterFour.style.display = "";
        weaponThree.style.display = "none";
        weaponFour.style.display = "none";
        nextButton.style.display = "";
        chickenWeapon = 4;
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
        setWeaponEvents();
        },random*1000);}


}
    function setWeaponEvents () {
         document.addEventListener("keydown", function(e){
            var keyCode = e.keyCode;
             if(keyCode==65 && numberAze!==2){
                 numberAze = 1;
                 setTimeout(playerOnewins, 3000);
                 function playerOnewins () {
                     instructions.style.visibility = "visible";
                     instructions.innerHTML = "Player ONE WINSSSS";
                     restartButton.style.display = "";
                 }
                 if (peterWeapon == 1) {
                     setTimeout(chickenFlies, 1000);
                     bulletOne.style.display ="";
                     bulletOne.classList.add ("bulletoneanimation");
                     function chickenFlies () {
                         characterThree.classList.add("chickenrotate");
                         characterFour.classList.add("chickenrotate");
                     }
                 }
                 else if (peterWeapon ==2) {
                     setTimeout(chickenFlies, 1000);
                     bulletTwo.style.display ="";
                     bulletTwo.classList.add ("bulletoneanimation");
                     function chickenFlies () {
                         characterThree.classList.add("chickenrotate");
                         characterFour.classList.add("chickenrotate");
                     }
                 }

             }

             else if(keyCode==76 && numberAze==null){
                 numberAze = 2;
                 setTimeout(playerTwowins, 3000);
                 function playerTwowins () {
                     instructions.style.visibility = "visible";
                     instructions.innerHTML = "Player TWO WINSSSS";
                     restartButton.style.display = "";
                 }
                 if (chickenWeapon == 3) {
                     setTimeout(chickenFlies, 1000);
                     bulletThree.style.display ="";
                     bulletThree.classList.toggle ("azerty");
                     function chickenFlies () {
                         characterOne.classList.add("peterrotate");
                         characterTwo.classList.add("peterrotate");
                     }
                 }
                 else if (chickenWeapon ==4) {
                     setTimeout(chickenFlies, 1000);
                     bulletFour.style.display ="";
                     bulletFour.classList.toggle ("azerty");
                     function chickenFlies () {
                         characterOne.classList.add("peterrotate");
                         characterTwo.classList.add("peterrotate");
                     }
                 }

                            }

                                                        }, false);
                                }

window.onkeypress = function(event) {
    if (event.keyCode == 13){
        window.location.reload();
    }
}

restartButton.addEventListener ("click", restartFunction);

function restartFunction () {
     window.location.reload();
}
