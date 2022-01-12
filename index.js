document.querySelectorAll("button").forEach((element) => {
  
    element.addEventListener("click", clickHandler);
});

var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; ++i)
  buttons[i].addEventListener("click",clickHandler);

var sounds = {
  w: "sounds/crash.mp3",
  a: "sounds/kick-bass.mp3",
  s: "sounds/snare.mp3",
  d: "sounds/tom-1.mp3",
  j: "sounds/tom-2.mp3",
  k: "sounds/tom-3.mp3",
  l: "sounds/tom-4.mp3"
};

function clickHandler(Event){
  if (sounds.hasOwnProperty(this.innerText))
    (new Audio(sounds[this.innerText])).play();
}






// function clickHandler() {
//    var buttonInnerHTML = this.InnerHTML;
//     switch (buttonInnerHTML) {
//    case "w":
//     var crash = new Audio("sounds/crash.mp3");
//     crash.play();         
//       break;

//    case "a":
//     var kick = new Audio("sounds/kick.mp3");
//     kick.play();         
//       break;

//    case "s":
//      var snare = new Audio("sounds/snare.mp3");
//      snare.play();         
//        break;              
    
//    case "d":
//      var tom1 = new Audio("sounds/tom-1.mp3");
//      tom1.play();         
//        break;
    
//    case "j":
//     var tom2 = new Audio("sounds/tom-2.mp3");
//     tom2.play();
//       break;

//    case "k":
//     var tom3 = new Audio("sounds/tom-3.mp3");
//     tom3.play();         
//       break; 
   
//    case "a":
//      var tom4 = new Audio("sounds/tom-4.mp3");
//      tom4.play();         
//        break;    

//     default: console.log(buttonInnerHTML)
//    }  
// }





// calculator nedenfor

// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }