'use strict';

function greetUser() {
    let usersName = prompt('What is your name?');
    document.write('Welcome to my page,' + usersName);
    return usersName;
}

// let usersName = greetUser();
// console.log(usersName);

function VideoGamesFan() {
    let x = prompt('Do you like Video Games?')
    let message;

    if (x == 'yes') {
        message = 'Welcome Fellow Gamer!';
    } else if (x == 'no') {
        message = 'Time to Change That.';
    } else {
        message = 'Welcome to Ultimate Gamestop!';
    }
    document.write(message);
}

// VideoGamesFan();

let usersGuess;

while (usersGuess !== 'Ps5') {
    usersGuess = prompt('What is my fav Console? (Hint: Starts with a P)');
}

function PS5Consoles() {
    let usersNum = prompt('How many PS5Consoles would you rate my page? 1-5');
    for (let i = 0; i < usersNum && i < 5; i++) {
        document.write('<img src="ps5.jpg" alt="Ps5" class="Ps5"/>');
    }
}

PS5Consoles();
