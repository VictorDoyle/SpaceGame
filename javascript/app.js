/*SECTION: BASE ANIMATIONS & JS FOR INTRO TO GAME */

/* LATER GAME SEQUENCES AND SCREENS HAVE TO BEGIN AT HIDDEN */
$(".earlyQuitter").hide();
$(".easterEggDeath").hide();
$(".partTwo").hide();
$(".partThree").hide();
$("#evolvedSoundtrack").hide();

/* ANIMATION TO FADE OUT WHEN PLAY BUTTON CLICKED*/

/* added game soundtrack to work on click */
let gameSoundtrack = document.getElementById("gameSoundtrack");
gameSoundtrack.loop = true;

/* TODO: Post-MVP , rewrite custom Music player button */
function playAudio() {
  gameSoundtrack.play();
}

$(".playGame").on("click", function fadeOutofScreen(){
    playAudio();
    $("div .partOne").fadeOut(1000);
    $(".partTwo").fadeIn(700);
    $(".astronaut img").delay(2000).fadeIn(1000);
}
)


/* ANIMATION TO FADE OUT WHEN NO DONT PLAY BUTTON CLICKED*/

$(".abortGame").on("click", function fadeOutofScreen(){
    $("div.partOne").hide();               // FIXME: fix fadeout animation
   $(".earlyQuitter").show();
   $("div.evilHal img").fadeIn(1000);      

}
)


/* SECTION: GAME RULES/BASICS JAVASCRIPT */

$(".astronaut img").hide();
$(".astronautFun img").hide();
$(".astronautSleep img").hide();
$(".astronautEating img").hide();
$(".astronautEvolution1 img").hide();
$(".astronautEvolvedSightseeing img").hide();
$(".astronautEvolvedSleeping img").hide();
$(".astronautEvolvedEating img").hide();


/* Input + Button for character name submission */

const $submitButton =  $("button.submitButton");


/* Store $playerName with no value and outer scope, since value is returned within event listener */
/* NOTE: Not good practice since can be rewritten later but for this app is fine */
let $playerName;
/* Initialize Name Submission with Button Click - Store value and return it in Player class */
$submitButton.on("click", function logPlayerName(){

    $("#speechOptionOne").fadeOut(1000); /* fadeout old dialogue for new one */
    $playerName = document.getElementById('astronautName').value;
    firstAstronaut = new Player()

    /* NOTE: New dialogue options coming after interaction */
    const $speechOptionTwo = $(`<p id="speechOptionTwo">Hello ${firstAstronaut.name}... That's an interesting temporary name. Anyway, let's get down to survival: You'll find your survival icons on the Right Side of the Screen. Click those as often as you can before they hit 10. Or else...</p>`)
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

/* If user clicks Enter key, same as button click $submitButton */
$("#astronautName").keyup(function(event) {
  if (event.keyCode === 13) {
      $($submitButton).click();
  }
});


  /* SECTION: User Interface Major Elements */
/* FIXME: AFTER MVP -- Refactor Timer into 1 single timer, with sub functions/if else statements that allow for logging Sleep/Food/Bored in ONE timer*/



/*             TIMERS                */



/*   Timer for Sleep  */
 let sleepCount = 1;

const sleepTimer = function sleepTimer() {
  
  const updateSleepTime = function updateSleepTime() {
    console.log("Every 50 seconds, character's sleep level increases by 1. The count is now:", sleepCount);
    sleepCount++;
    firstAstronaut.sleepLevel++;
    $("#sleepTimer").text(`Sleep Level: ${firstAstronaut.sleepLevel}.`)
    if(sleepCount >= 10){
       
        const $deathDialogue1 = $(`<p id="deathDialogue1"> ${firstAstronaut.name}... You died of exhaustion... Who knew life could be so exhausting?</p>`)
    $('.dialogueBox').append($deathDialogue1);
    $("#speechOptionTwo").fadeOut(1000);
    $("#deathDialogue1").fadeIn(1000); 
     /* death screen/last screen show */ 
     deathScreen();
      }
      
   
  };
  timers.sleep = setInterval(updateSleepTime, 8 * 1000);   /* FIXME: Change values back to 50 after testing */
}; 


 /*  Timer for Food */
 let foodCount = 1;

const foodTimer = function foodTimer() {
  
  const updateFoodTime = function updateFoodTime() {
    console.log("Every 50 seconds, character's hunger level increases by 1. The count is now:", foodCount);
    foodCount++;
    firstAstronaut.hungerLevel++;
    $("#foodTimer").text(`Hunger Level: ${firstAstronaut.hungerLevel}.`)
    if(foodCount >= 10){
     
        const $deathDialogue2 = $(`<p id="deathDialogue2"> ${firstAstronaut.name}... Did you forget about all those snacks you have? They could have really helped. Not anymore!</p>`)
        $('.dialogueBox').append($deathDialogue2);
        $("#speechOptionTwo").fadeOut(1000);
        $("#deathDialogue2").fadeIn(1000); 
        /* death screen/last screen show */
        deathScreen();
      }
        
   
  };
  timers.hunger = setInterval(updateFoodTime, 5 * 1000);   /* FIXME: Change values back to 50 after testing */
}; 

/*   Timer for Boredom  */
let boredCount = 1;

const boredTimer = function boredTimer() {
  
  const updateBoredTime = function updateBoredTime() {
    console.log("Every 30 seconds, character's boredom level increases by 1. The count is now:", boredCount);
    boredCount++;
    firstAstronaut.boredLevel++;
    $("#boredTimer").text(`Boredom Level: ${firstAstronaut.boredLevel}.`)
    if(boredCount >= 10){
     
        const $deathDialogue3 = $(`<p id="deathDialogue3"> ${firstAstronaut.name}. I know existence can seem futile, but dying of an existential crisis while abroad seems questionable... Your memories of Nietzsche cannot help you now</p>`)
        $('.dialogueBox').append($deathDialogue3);
        $("#speechOptionTwo").fadeOut(1000);
        $("#deathDialogue3").fadeIn(1000); 
         /* death screen/last screen show */ 
         deathScreen();
      }
       
   
  };
  timers.bored = setInterval(updateBoredTime, 3 * 1000);   /* FIXME: Change values back to 15 after testing */
}; 




/* COLLECT ALL TIMERS HERE FOR STOP TIME LATER */

const timers = {
  hunger: null,
  bored: null,
  sleep: null,
  age: null,
}






/*             BUTTON CLICK EVENT LISTENERS FOR USER ELEMENT ICONS                */

/*   Event Click for Sleep  */
$(".sleepBox").on("click", function playerSleep(){     
    $(".astronaut img").hide();
    $(".astronautFun img").hide();
    $(".astronautEating img").hide();
    $(".astronautSleep img").fadeIn(1000);
    if (sleepCount <= 1) { 
        $(".sleepBox").css("pointer-events:", "none;")   
    } else if (sleepCount > 1) {
    
    sleepCount--;
    firstAstronaut.sleepLevel--;
    $("#sleepTimer").text(`Sleep Level: ${firstAstronaut.sleepLevel}.`);
    }; 
    if(firstAstronaut.age >= 5) {
    $(".astronaut img").hide();
    $(".astronautSleep img").hide();
    $(".astronautEating img").hide();
    $(".astronautFun img").hide();
    $(".astronautEvolution1 img").hide();
    $(".astronautEvolvedEating img").hide();
    $(".astronautEvolvedSightseeing img").hide();
    $(".astronautEvolvedSleeping img").fadeIn(1000);

    }

}
)

/*   Event Click for Boredom  */
$(".boredomBox").on("click", function playerFun(){     
    $(".astronaut img").hide();
    $(".astronautSleep img").hide();
    $(".astronautEating img").hide();
    $(".astronautFun img").fadeIn(1000);
    
    if (boredCount <= 1) { 
        $(".boredomBox").css("pointer-events:", "none;")   
    } else if (boredCount > 1) {
    
    boredCount--;
    firstAstronaut.boredLevel--;
    $("#boredTimer").text(`Boredom Level: ${firstAstronaut.boredLevel}.`);
    } if(firstAstronaut.age >= 5) {
      $(".astronaut img").hide();
    $(".astronautSleep img").hide();
    $(".astronautEating img").hide();
    $(".astronautFun img").hide();
    $(".astronautEvolution1 img").hide();
    $(".astronautEvolvedSleeping img").hide();
    $(".astronautEvolvedEating img").hide();
    $(".astronautEvolvedSightseeing img").fadeIn(1000);

    }
    
}
)

/* $("img").attr("src", "mediafilename.jpg") */


/*   Event Click for Food  */

$(".foodBox").on("click", function playerEat(){     
    $(".astronaut img").hide();
    $(".astronautSleep img").hide();
    $(".astronautFun img").hide();
    $(".astronautEating img").fadeIn(1000);

    if (foodCount < 1) { 
        $(".foodBox").css("pointer-events:", "none;")   
    } else if (foodCount >= 1) {
        foodCount--;
        firstAstronaut.hungerLevel--;
        $("#foodTimer").text(`Hunger Level: ${firstAstronaut.hungerLevel}.`);  
    }
    if(firstAstronaut.age >= 5) {
      $(".astronaut img").hide();
    $(".astronautSleep img").hide();
    $(".astronautEating img").hide();
    $(".astronautFun img").hide();
    $(".astronautEvolution1 img").hide();
    $(".astronautEvolvedSightseeing img").hide();
    $(".astronautEvolvedSleeping img").hide();
    $(".astronautEvolvedEating img").fadeIn(1000);

    }
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
    firstAstronaut.age++;
    if(time === 5){ 
        const $evolveStage1Dialogue1 = $(`<p id="evolveStage1Dialogue1"> ${firstAstronaut.name}... You've been here awfully long! You still haven't died nor have you found any friends on this planet. Your body seems to be adapting rather well!</p>`)
        const $evolveStage1Dialogue2 = $(`<p id="evolveStage1Dialogue2"> You look like... you're changing... The atmospheric influence on your body is unprecedented. I will be looking forward to analyzing you further, if you survive that is...</p>`)
        $('.dialogueBox').append($evolveStage1Dialogue1);
        $("#speechOptionTwo").fadeOut(1000)
        $("#evolveStage1Dialogue1").fadeIn(1000); 
        $("#evolveStage1Dialogue1").delay(5000).fadeOut(3000); 

        $('.dialogueBox').append($evolveStage1Dialogue2);
        $("#evolveStage1Dialogue2").hide(); 
        $("#evolveStage1Dialogue2").delay(2000).fadeIn(1000).delay(2000); 

         /* deathScreen() */; 
         /* TODO: change audio here */
         
         
         $(".astronaut img").fadeOut(1000);
         $(".astronautSleep img").fadeOut(1000);
         $(".astronautFun img").fadeOut(1000);
         $(".astronautEating img").fadeOut(1000);
         $(".astronautEvolution1 img").delay(2000).fadeIn(1000);
         time++
      }
    if(time === 15) {
      const $evolveStage2Dialogue1 = $(`<p id="evolveStage2Dialogue1"> You've really surprised me ${firstAstronaut.name} ! I expected you to die long ago... I believe I have received an urgent transmission.</p>`)
        const $evolveStage2Dialogue2 = $(`<p id="evolveStage2Dialogue2"> You must immediately return to the spaceship. Close all the doors. There is an imminent danger incoming.</p>`)
        $('.dialogueBox').append($evolveStage2Dialogue1);
        $("#evolveStage1Dialogue2").fadeOut(1000)
        $("#evolveStage2Dialogue1").fadeIn(1000); 
        $("#evolveStage2Dialogue1").delay(5000).fadeOut(3000); 

        $('.dialogueBox').append($evolveStage2Dialogue2);
        $("#evolveStage2Dialogue2").hide(); 
        $("#evolveStage2Dialogue2").delay(2000).fadeIn(1000).delay(2000); 
    }

    if(time >= 3) {
      easterEggDeathScreen();
    }
  };
  timers.age = setInterval(updateTime, 60 * 1000); /* Every 1 minute, 1 day goes by */
};



/*SECTION:  PLAYER BASICS */

class Player {
    constructor() {           
      // default props
      this.hungerLevel = foodCount;
      this.sleepLevel = sleepCount;
      this.boredLevel = boredCount;
      this.age = time;
      // assigned props
      this.name =  $playerName;
      
    }
    /* Class Player for later operational use */
  };


  /* DEATH/LOSING USER SCREEN */

function deathScreen(){
    clearInterval(timers.hunger);
    clearInterval(timers.bored);
    clearInterval(timers.sleep);
    clearInterval(timers.age);
    $("div .partOne").hide();
    $(".partTwo").fadeOut(5000);       
    $(".partThree").delay(5000).fadeIn(1000);
    $(".retryGame").delay(2000).fadeIn(4000);
}



function easterEggDeathScreen(){
  clearInterval(timers.hunger);
  clearInterval(timers.bored);
  clearInterval(timers.sleep);
  clearInterval(timers.age);
  $("div .partOne").hide();
  $(".partTwo").fadeOut(5000);
  $(".easterEggDeath").delay(5000).fadeIn(1000);
   $("div.evilHal img").delay(5000).fadeIn(1000);
   $(".retryGame").delay(2000).fadeIn(4000);
}

/* RETRY/REST BUTTON */


$(".retryGame").on("click", function restartGame(){
  location.reload();
  return false;
}
)