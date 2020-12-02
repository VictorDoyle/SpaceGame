

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


/* GAME RULES/BASICS JAVASCRIPT */

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
  
        /* FIXME: URGENT -- NEED TO STOP THIS EVENT LISTENER ONCE CLICKED. SINGULAR ACTION ONE TIME USE ONLY  */
}
)


/* store User Input of Button in const below. This will be reused inside Player class for giving name */




/* PLAYER BASICS */

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