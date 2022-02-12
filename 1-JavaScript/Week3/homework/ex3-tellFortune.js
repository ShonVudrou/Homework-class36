'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-3-be-your-own-fortune-teller

Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments (in the order listed): 
     * the array with the options for the number of children, 
     * the array with the options for the partner's name, 
     * the array with the options for the geographic location and 
     * the array with the options for the job title.
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY principle is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/

// This function should take an array as its parameter and return
// a randomly selected element as its return value.
function selectRandomly(array) {
  const randomElement = array[Math.floor(Math.random() * array.length)];

  return randomElement;
}

function tellFortune(arrKids, arrPartners, arrLocations, arrJobs) {
  const kid = selectRandomly(arrKids);
  const partnerName = selectRandomly(arrPartners);
  const location = selectRandomly(arrLocations);
  const job = selectRandomly(arrJobs);

  return `You will be a ${job} in ${location}, married to ${partnerName} with ${kid} kids.`;
}

function main() {
  const numKids = ['10', '3', '7', '5', '2'];

  const partnerNames = ['Svetlana', 'Garry', 'Victoria', 'Paula', 'Andrew'];

  const locations = ['Toronto', 'Moscow', 'Brisbane', 'San-Diego', 'Madrid'];

  const jobTitles = [
    'programmer',
    'surfer',
    'baseball player',
    'musician',
    'actor',
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
