const greetings = 'Hello World!';
alert(greetings);

// number
// string
// boolean
// null
// undefined
// Object
// Symbol


const age = 42;
let isMarried = false;

const userAge = parseFloat(prompt('Enter your age'));
alert('Your age is ' + userAge);
const nextAge = userAge + 1;
alert('Next year you will be ' + nextAge);

const ageString = checkAge(userAge);
alert('You are ' + ageString);

function checkAge(age) {
    if (Number.isNaN(age)) {
        return 'input is not correct';
    }
    if (age > 100) {
        return 'old';
    }
    if (age < 18) { // < > <= >= == === != !==
        return 'child';
    } else {
        return 'adult';
    }
}

// Task for you 
// Modify function to show 'old' if you user is older than 100 
