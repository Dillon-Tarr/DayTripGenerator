"use strict";

function runProgram(){
    let destinations = ["the Covid-19 wasteland AKA outside (don't forget your mask)", 'the backyard',
    'the room downstairs you still call the workout room even though no one has worked out in it since some time in February',
    "Grand Cayman -- in your head, that is; because you're not actually going to the Cayman Islands during this Covid mess, silly"];
    let destination;
    let sourcesOfFood = ['Panera', 'Chipotle', 'Taco Bell', 'Pizza Hut', "Momma, whose home cookin's better than any restaurant"];
    let sourceOfFood;
    let modesOfTransportation = ['army crawls, and only army crawls', 'hand-walking, mostly (remember to wash those nasty things later)',
    'those two legs of yours', 'a skateboard'];
    let modeOfTransportation;
    let formsOfEntertainment = ['reading a book or two of your choice', 'binge watching Avatar: The Last Airbender', 'surfing... the web',
    'calling all the people you should have checked up on during quarantine'];
    let formOfEntertainment;
    let userInput = '';

    function randomlySelectFromArray(array){
        return array[Math.floor(array.length * Math.random())];
    }
    
    function setRandomSelections(){
        destination = randomlySelectFromArray(destinations);
        sourceOfFood = randomlySelectFromArray(sourcesOfFood);
        modeOfTransportation = randomlySelectFromArray(modesOfTransportation);
        formOfEntertainment = randomlySelectFromArray(formsOfEntertainment);
    }
    
    function reroll(){
        if (userInput.includes('1')){
            destination = randomlySelectFromArray(destinations);
        }
        if (userInput.includes('2')){
            sourceOfFood = randomlySelectFromArray(sourcesOfFood);
        }
        if (userInput.includes('3')){
            modeOfTransportation = randomlySelectFromArray(modesOfTransportation);
        }
        if (userInput.includes('4')){
            formOfEntertainment = randomlySelectFromArray(formsOfEntertainment);
        }
    }
    
    function confirm(){
        userInput = prompt(`Following are your current selections:
(1) Destination -- ${destination}
(2) Source of food -- ${sourceOfFood}
(3) Mode of transportation -- ${modeOfTransportation}
(4) Form of entertainment -- ${formOfEntertainment}

When you are ready to CONFIRM and finalize these selections,
continue without entering anything below.

If you would like any of the selections to be randomly selected again, enter below the numbers for what you would like changed.
e.g. If you would like to change Source of food, Mode of transporation, and Form of entertainment, enter: 234`)
    }
    
    function interactWithUser(){
        userInput = prompt(`Random selections have been made for the contents of your day trip.
The current selections are as follows:
(1) Destination -- ${destination}
(2) Source of food -- ${sourceOfFood}
(3) Mode of transportation -- ${modeOfTransportation}
(4) Form of entertainment -- ${formOfEntertainment}

If you would like any of the selections to be randomly selected again, enter below the numbers for what you would like changed.
e.g. If you would like to change Destination and Form of entertainment, enter: 14

If you are content with the current selections, enter nothing and continue.`);
        
        while (true){
            reroll();
            confirm();
            if (userInput == '' || userInput.toLowerCase().includes('nothing')){
                break;
            }
        }
    }
    
    function displayFinalMessage(){
        console.log(`Day Trip Confirmation Details:

You will be spending the day in ${destination}.
Under normal circumstances you might eat at a restaurant or two on a day trip, but given the current circumstances...
Utilizing pickup or your preferred method of delivery, you'll be ordering from ${sourceOfFood}.
You'll be getting around using ${modeOfTransportation}.
For entertainment, you will be ${formOfEntertainment}.

Thank you for choosing my little script to help you plan your trip. Enjoy!` +
"\n\n\n\n\nDisclaimer: Day Trip Planning Services is neither required nor expected to supply clients with means of travel, dining, or entertainment.")
    }
    
    setRandomSelections();
    interactWithUser();
    displayFinalMessage();
}

runProgram();