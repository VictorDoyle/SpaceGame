console.log("Insanity Check?")

/* LATER GAME SEQUENCES AND SCREENS HAVE TO BEGIN AT HIDDEN */
$(".earlyQuitter").hide();
$(".partTwo").hide();
$(".partThree").hide();

/* ANIMATION TO FADE OUT WHEN PLAY BUTTON CLICKED*/

$(".playGame").on("click", function fadeOutofScreen(){
    $("div .partOne").fadeOut(1000);
    $("div .partTwo").fadeIn(1000);
    
}
)


/* ANIMATION TO FADE OUT WHEN NO DONT PLAY BUTTON CLICKED*/

$(".abortGame").on("click", function fadeOutofScreen(){
    $("div .partOne").fadeOut(500);               // FIXME: fix fadeout animation
   $(".earlyQuitter").show();
   $(".evilHal").fadeIn(1000);      //FIXME: Animation wont work

}
)


/* GAME RULES/BASICS JAVASCRIPT */

