/*SECTION: BASE ANIMATIONS & JS FOR INTRO TO GAME */

/* LATER GAME SEQUENCES AND SCREENS HAVE TO BEGIN AT HIDDEN */
$(".earlyQuitter").hide();
$(".partTwo").hide();
$(".partThree").hide();

/* ANIMATION TO FADE OUT WHEN PLAY BUTTON CLICKED*/

$(".playGame").on("click", function fadeOutofScreen(){
    $("div .partOne").fadeOut(1000);
    $(".partTwo").show();       /* FIXME: Make smoother animation FadeIn for Part Two */
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
    sleepTimer();
    foodTimer();
    boredTimer();
  
        /* FIXME: URGENT -- NEED TO STOP THIS EVENT LISTENER ONCE CLICKED. SINGULAR ACTION ONE TIME USE ONLY  */
        /* TODO: AFTER MVP --- Need to refactor this terrible looking code */
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



  /* SECTION: User Interface Major Elements */
  /* TODO: AFTER MVP */
/* Maybe use fadeTo(0.5) to highlight certain user elements during tutorial? */
/* FIXME: AFTER MVP -- Refactor Timer into 1 single timer, with sub functions/if else statements that allow for logging Sleep/Food/Bored in ONE timer*/

/*             TIMERS                */
/*   Timer for Sleep  */
 let sleepCount = 1;

const sleepTimer = function sleepTimer() {
  
  const updateSleepTime = function updateSleepTime() {
    console.log("Every 50 seconds, character's sleep level increases by 1", sleepCount);
    $("#sleepTimer").text(`Sleep Level: ${sleepCount}.`);
    sleepCount++;
    if(sleepCount >= 10){
        clearInterval(timer);
        console.log("Your Astronaut died of exhaustion. Who knew life was so exhausting?")
      }
   
  };
  const timer = setInterval(updateSleepTime, 50 * 1000);  
}; 


 /*  Timer for Food */
 let foodCount = 1;

const foodTimer = function foodTimer() {
  
  const updateFoodTime = function updateFoodTime() {
    console.log("Every 50 seconds, character's hunger level increases by 1", foodCount);
    $("#foodTimer").text(`Hunger Level: ${foodCount}.`);
    foodCount++;
    if(foodCount >= 10){
        clearInterval(timer);
        console.log("Your Astronaut died of hunger. Those snacks could have really helped. Not anymore.")
      }
        
   
  };
  const timer = setInterval(updateFoodTime, 50 * 1000);  
}; 

/*   Timer for Boredom  */
let boredCount = 1;

const boredTimer = function boredTimer() {
  
  const updateBoredTime = function updateBoredTime() {
    console.log("Every 30 seconds, character's boredom level increases by 1", boredCount);
    $("#boredTimer").text(`Boredom Level: ${boredCount}.`);
    boredCount++;
    if(boredCount >= 10){
        clearInterval(timer);
        console.log("Your Astronaut died of an existential crisis. Memories of Nietzsche could not help you now.")
      }
       
   
  };
  const timer = setInterval(updateBoredTime, 30 * 1000);  
}; 


/*             BUTTON CLICK EVENT LISTENERS FOR USER ELEMENT ICONS                */

/*   Event Click for Sleep  */
$(".sleepBox").on("click", function playerSleep(){     
    $(".astronaut img").fadeOut(1000);
    /* astronaut new image sleeping .fadeIn(1000) */
    sleepCount--;
}
)

/*   Event Click for Boredom  */
$(".boredomBox").on("click", function playerFun(){     
    $(".astronaut img").fadeOut(1000);
    /* astronaut new image doing exercise etc .fadeIn(1000) */
    boredCount--;
    
}
)


/*   Event Click for Food  */

$(".foodBox").on("click", function playerEat(){     
    $(".astronaut img").fadeOut(1000);
    /* astronaut new image doing exercise etc .fadeIn(1000) */
    foodCount--;
    
}
)



/* SECTION: User Interface Minor Elements */

/* AGE BAR */

let time = 1;

const setTimer = function setTimer() {
  
  const updateTime = function updateTime() {
    console.log("Every 60seconds, character's age is 1 day older", time);
    $("#ageTimer").text(`Age: ${time} Days`);
    time++;
    if(boredCount >= 10 , foodCount >= 10 ,sleepCount >= 10 ){  /* FIXME: */
        clearInterval(timer);
      }
    /* add clearInterval if Player dies */
   /*  if (player.hungerLevel === 0 || player.boredLevel === 0 || player.sleepLevel === 0) { //FIXME: Revisit use of || not the best here
        clearInterval(timer); */
    
  };
  const timer = setInterval(updateTime, 60 * 1000); /* Every 1 minute, 1 day goes by */
};


