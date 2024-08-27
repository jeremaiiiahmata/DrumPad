var button = document.querySelectorAll("button");

for(var i=0; i < button.length; i++){ // traverse through all the button elements 


    button[i].addEventListener("click", function(){ // adds and event listener to each buttons

        var key = this.innerHTML; // place the key (or the inner HTML of the buttons) in a variable

        playSound(key); // play sound. passing the key as parameter to know which button is pressed.
        playAnimation(key);

    })

}

document.addEventListener("keydown", function(event){ // adds an event listener to each keys

    playSound(event.key);
    playAnimation(event.key);
})


function playSound(key){

    switch(key){

        case "w" :
            var kick = new Audio("./assets/sounds/808-Drum-Kit/8O8_R.wav");
            kick.play();

            break;

        case "a" :
            var hi = new Audio("./assets/sounds/808-Drum-Kit/808_2.wav");
            hi.play();

            break;

        case "s" :
            var hat = new Audio("./assets/sounds/808-Drum-Kit/808_7.wav");
            hat.play();

            break;

        case "d" :
            var tone = new Audio("./assets/sounds/808-Drum-Kit/808_5.wav");
            tone.play();

            break;

        case "f" :
            var crash = new Audio("./assets/sounds/808-Drum-Kit/808_3.wav");
            crash.play();

            break;

        case "u" :
            var clap = new Audio("./assets/sounds/808-Drum-Kit/808_6.wav");
            clap.play();

            break;

        case "i" :
            var snare = new Audio("./assets/sounds/808-Drum-Kit/808_S.wav");
            snare.play();

            break;

        case "h" :
            var kick = new Audio("./assets/sounds/808-Drum-Kit/808_K.wav");
            kick.play();

            break;  

        case "j" :
            var bass = new Audio("./assets/sounds/808-Drum-Kit/808_L.wav");
            bass.play();

            break;  


        case "k" :
            var kick2 = new Audio("./assets/sounds/808-Drum-Kit/808_J.wav");
            kick2.play();
    
            break;  


     default:   


    }

}


function playAnimation(key){

    var button = document.querySelector("." + key);

    button.classList.add("pressed");


    setTimeout(function(){

        button.classList.remove("pressed");

    }, 100);

}

