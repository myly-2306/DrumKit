// clicking detection
var buttonLength = document.querySelectorAll(".drum");

for (var i = 0; i <= buttonLength.length; i++) {

    buttonLength[i].addEventListener("click", function (){
        this.style.color = "white";
        makeSound(this.innerHTML);
    });
};




// fucntion to handle clicking the button




// function HouseKeeper ( name, age, hasWorkPermit, language) {
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.language = language;
//     clean ();
// }


// var houseKeeper1 = new HouseKeeper ("Julie", 25, true, ["English,Spanish"], clean());

// function clean () {
//     alert ("cleaning in process");
// };



// keydown detection
document.addEventListener("keydown", function(event) {
    console.log("this is pressed:", event );
    makeSound(event.key);
    
});


// function that make sound
function makeSound(key) {
    var audio 
    switch (key) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
                audio.play();
            break;
        
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
            break;

        case "s":
            audio = new Audio("sounds/snare.mp3");
                audio.play();
            break;

        case "d":
            audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            break;

        case "j":
            audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            break;

        case "k":
            audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            break;

        case "l":
            audio = new Audio("sounds/tom-4.mp3");
                audio.play();
            break;
    
        default:
            console.log("No button detected")
            break;
    }
};