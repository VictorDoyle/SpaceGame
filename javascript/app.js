/*SECTION: BASE ANIMATIONS & JS FOR INTRO TO GAME */

/* LATER GAME SEQUENCES AND SCREENS HAVE TO BEGIN AT HIDDEN */
$(".earlyQuitter").hide();
$(".partTwo").hide();
$(".partThree").hide();

/* ANIMATION TO FADE OUT WHEN PLAY BUTTON CLICKED*/

$(".playGame").on("click", function fadeOutofScreen(){
    $("div .partOne").fadeOut(1000);
    $(".partTwo").show();
    $(".astronaut img").fadeIn(1000);

    
}
)


/* ANIMATION TO FADE OUT WHEN NO DONT PLAY BUTTON CLICKED*/

$(".abortGame").on("click", function fadeOutofScreen(){
    $("div.partOne").fadeOut(500);               // FIXME: fix fadeout animation
   $(".earlyQuitter").show();
   $("div.evilHal img").fadeIn(1000);      //FIXME: Animation wont work

}
)


/* SECTION: GAME RULES/BASICS JAVASCRIPT */

/* Input + Button for character name submission */

const $submitButton =  $("button.submitButton");

/* Initialize Name Submission with Button Click - Store value and return it in Player class */
$submitButton.on("click", function logPlayerName(){
    $("#speechOptionOne").fadeOut(1000); /* fadeout old dialogue for new one */
    let $playerName = document.getElementById('astronautName').value;
    const $speechOptionTwo = $(`<p id="speechOptionTwo">Hello ${$playerName}... That's an interesting temporary name. Anyway, let's get down to survival.</p>`)
    $('.dialogueBox').append($speechOptionTwo);
    $("#speechOptionTwo").fadeIn(1000);    /* new dialogue fade in after getting user input for name */
    $('.nameBox').hide();
    /* Once player initializes game by inputing name. Start timer! */
    setTimer();
  
        /* FIXME: URGENT -- NEED TO STOP THIS EVENT LISTENER ONCE CLICKED. SINGULAR ACTION ONE TIME USE ONLY  */
}
)


/* store User Input of Button in const below. This will be reused inside Player class for giving name */




/*SECTION:  PLAYER BASICS */

class Player {
    constructor(givenName) {
      // default props
      this.hungerLevel = 0;
      this.sleepLevel = 0;
      this.boredLevel = 0;
      // assigned props
      this.name = givenName;
      
    }
    getHungry() {
      console.log("I'm feeling hungry, maybe it's time for a snack?");
    }
    getBored() {
    console.log("I am feeling an existential crisis coming soon. I need something to do...");
  }
    getSleepy() {
    console.log("Is that a purple unicorn? Urgh, I think I need a nap. I'm starting to see things...");
  }
  }

  const firstAstronaut = new Player(""); /* Have to link .value from input to become new Player (input.value)*/


/*   Icons for Sleep  */


/* TODO: AFTER MVP */
/* Maybe use fadeTo(0.5) to highlight certain user elements during tutorial? */

 /*  Icons for Food */


/*   Icons for Boredom  */




/* SECTION: User Interface Minor Elements */

/* AGE BAR */

let time = 1;

const setTimer = function setTimer() {
  
  const updateTime = function updateTime() {
    console.log("Every 60seconds, character's age is 1 day older", time);
    $("#ageTimer").text(`Age: ${time} Days`);
    time++;
    /* add clearInterval if Player dies */
   /*  if (player.hungerLevel === 0 || player.boredLevel === 0 || player.sleepLevel === 0) { //FIXME: Revisit use of || not the best here
        clearInterval(timer); */
    
  };
  const timer = setInterval(updateTime, 60 * 1000);
};
