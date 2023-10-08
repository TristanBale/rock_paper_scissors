// rock paper scissors game
// 1. get computer to choose a random choice of the 3, rock, paper or scissors and store it into a varible called comChoice
    // determine how to get a random selection of given inputs, in this case, rock paper or scissors. 
    // 1a. make a list/array of our 3 choices, then use random number to generate between 0 to 2, and then use the random number to assign it to the list element
    // 1b. need to figure out how to make a RNG of 0 to 2. math.random() gives a random decimeal between 0 and 1.
// 2. do not reveal comChoice until we have made our own selection
// 3. create a function to input our choice, and store it into a variable myChoice
    // 3a. make sure our input is not case sensitive, we can address this by toLowercase() all our inputs so it matches those in our fixed choices
// 4. once myChoice is not empty, reveal comChoice
// 5. evaluate the results, if it is a draw, repeat steps 1 to 4
// 6. if not a draw, reveal winner and loser 

// 1a.
const choices = ["rock", "paper", "scissors"];

// 1b. 
//ceil min roundns up the min number to the nearest integer
//floor max rounds down the max numbe rto the nearest integer
// (max - min + 1) is the range, the +1 is to make the range inclusive of max
// math.random() * (max - min + 1) is to create a random number within the range (eg 50 to 70 has a range of 20, but now our random number is between 0 and 20, not 50 and 70, hence we do the next step)
// we add min to make sure that this random number falls within the range defined by min and max (ie to make it 50 and 70)
// floor rounds down the value to the nearest integer. we have to use floor instead of round or ceiling so that our result doesnt go above our max value. 
    // imagine our 50 to 70. our range to be inclusive will be 70-50+1 = 21. with random, it could be a case where it is 0.99*21 = 20.79, which once added to min of 50, gives you 70.79. hence our floor works to keep it within min-max) 
    // now imagine without the +1, the max possible will be 0.99 * 20 + 50 = 69.8 which does not include 70
    // we cannot omit the +1 in range and use ceil in the return as this will always round up, which means, it can possible omit our min value. eg 50.01 becomes 51
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1
let comChoice = 'iniVal';

function getComputerChoice() {
    let randomInteger = getRandomIntInclusive(0, 2);
    comChoice = choices[randomInteger];
    return comChoice;
}

getComputerChoice();

console.log(choices);
console.log(comChoice);
console.log(getComputerChoice());