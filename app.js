'use strict';

function greetUser() {
    let usersName = prompt('What is your name?');
    document.write('Welcome to my page,' + usersName);
    return usersName;
}

// let usersName = greetUser();
console.log(usersName);

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
