"use strict";

function randomlySelectFromArray(array){
    return array[Math.floor(array.length * Math.random())];
}

function setRandomSelections(){
    destination = randomlySelectFromArray(destinations);
    restaurant = randomlySelectFromArray(restaurants);
    modeOfTransportation = randomlySelectFromArray(modesOfTransportation);
    formOfEntertainment = randomlySelectFromArray(formsOfEntertainment);
}

function displayFinalMessage(){
    console.log(`You'll be spending the day in ${destination}
    Under normal circumstances you might eat at a restaurant or two. Using your delivery service of choice, you'll be ordering from ${restaurant}
    You'll be getting around using ${modeOfTransportation}
    For entertainment, you will be ${formOfEntertainment}
    
    Thank you for choosing my little script to help you plan your trip. Enjoy!`)
}

function runProgram(){
    let destinations = ["the Covid-19 wasteland AKA outside (don't forget your mask).", 'the backyard.',
    'the room downstairs you still call the workout room even though no one has worked out in it since some time in February.',
    "Grand Cayman -- in your head, that is; because you're not actually going to the Cayman Islands during this Covid mess, silly."];
    let destination;
    let restaurants = ['Panera.', 'Chipotle.', 'Taco Bell.', 'Pizza Hut.', "Momma, whose home cookin's better than any restaurant."];
    let restaurant;
    let modesOfTransportation = ['army crawls, and only army crawls.', 'hand-walking, mostly.',
    'those two legs of yours.', 'a skateboard.'];
    let modeOfTransportation;
    let formsOfEntertainment = ['reading a book or two of your choice.', 'binge watching Avatar: The Last Airbender.', 'surfing... the web.',
    'pacing aimlessly while calling all the people you should have checked up on during quarantine.'];
    let formOfEntertainment;
    
    setRandomSelections();


    
    displayFinalMessage();
}

runProgram();