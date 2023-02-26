// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93,];
console.log(ages);
// 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.
console.log(ages[ages.length-1] - ages[0]);
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] – ages[0] is not allowed!

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(7)
console.log(ages[ages.length-1] - ages[0]);
// 1c. Use a loop to iterate through the array and calculate the average age.
function arraySum(ages) {
    let sum = 0;
    for( let i= 0; i < ages.length; i++) {
    sum += ages[i];
    }
    return sum;
    
    }
    console.log(arraySum(ages) / ages.length);
// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy','Tim','Sally','Buck','Bob']
console.log(names);
// 2a. Use a loop to iterate through the array and calculate the average number of letters per name.
function averageNumbersofLetters(names){
    let totalLetters = 0;
for( let i =0; i < names.length; i++) {
    totalLetters += names[i].length;
} 
return totalLetters / names.length;
}
console.log(averageNumbersofLetters(names));

// 2b. Use a loop to iterate through the array again and concatenate
//all the names together, separated by spaces.
let iterator = '';
for (let i = 0; i < names.length; i++) {
  iterator += names[i] + ' ';
}
console.log(iterator);
// 3.  How do you access the last element of any array?
 console.log(array.length-1);
// 4.  How do you access the first element of any array?
 console.log(array[0]);
// 5.  Create a new array called nameLengths. Write a loop to iterate
// over the previously created names array and add the length of each name
//  to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

let nameLengths = [];
for (let i= 0; i< names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log('Question 5:', nameLengths);

// 6.  Write a loop to iterate over the nameLengths array and
//calculate the sum of all the elements in the array.
// step 1 for loop needed
let nameSum = 0

for(let i=0; i< nameLengths.length; i++) {
// step 2 iterate over nameLengths array
// console.log('This is question 6 ',nameLengths[i]);
nameSum += nameLengths[i]; //adding nameSum and a specfic nameLengths variable
}
// step 3 console.log sum of all elements in the array.
console.log('This is question 6' ,nameSum);

// 7.  Write a function that takes two parameters, word and n,
// as arguments and returns the word concatenated to itself n number
// of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function
//      to return ‘HelloHelloHello’).
function mulitpleWords(word, n) {
    let result = '';// step 2 is to start a variable for the results to your function
//step 3 is to write a loop to print  as many times you want n to multiply words string 
for(let i=0; i< n; i++){
    result += word;
}


return result;
}
// step 4 print function to make sure it returns the information desired.
console.log(mulitpleWords('Hello', 3));
// 8.  Write a function that takes two parameters, firstName and lastName,
// and returns a full name.  The full name should be the first and the last
// name separated by a space.
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
let firstName = 'Raymond';
let lastName = 'Gomes';
console.log(fullName(firstName,lastName));// both sets of parentheses are needed unless it will run with its name in a string'Raymond' 'Gomes'

// 9.  Write a function that takes an array of numbers and returns true
// if the sum of all the numbers in the array is greater than 100.
let numbers = [12,1,6,55,9];
function isSumOver100(numbers) {
    let sum =0;
    for ( let i =0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}
console.log(isSumOver100(numbers));

// 10.  Write a function that takes an array of numbers and returns
//the average of all the elements in the array.
let totalOfNum = [10,50,100,80,60];
function averageOfNumbers(arr) {
    let sum =0;
    for ( let i =0; i < arr.length; i++) {
        sum += arr[i];}
        return  sum / arr.length;
    }

    console.log(averageOfNumbers(totalOfNum));  
// 11.  Write a function that takes two arrays of numbers and
// returns true if the average of the elements in the first array is
// greater than the average of the elements in the second array.
//writing 2 let variables is step 1
//starting function and applying variables is step 2
// 11.  Write a function that takes two arrays of numbers and
// returns true if the average of the elements in the first array is
// greater than the average of the elements in the second array.
//writing 2 let variables is step 1
//starting function and applying variables is step 2
let a = [22,4,6,8];
let b = [33,6,9,12];
//find the average of the arrays 
function willItBeTrue(a,b) {
     {
        let sum1 =0;
        for ( let i =0; i < a.length; i++) {
            sum1 += a[i];
        }
            let avg1  =  sum1 / a.length;
        
            let sum2 =0;
            for ( let i =0; i < b.length; i++) {
                sum2 += b[i];}
               
            
            let avg2 = sum2 / b.length;
            
    if  (avg1 > avg2) { 
    return true;
    } else {

    return false;
    }
}
}
console.log(willItBeTrue(a, b));
// below is how I got average in earlier assignment used it to get the average for these variables
//function averageOfNumbers(arr) {
    // let sum =0;
    // for ( let i =0; i < arr.length; i++) {
        // sum += arr[i];}
        // return  sum / arr.length;
    // }

// 12.  Write a function called willBuyDrink that takes a
// boolean isHotOutside, and a number moneyInPocket, and
// returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// need 2 variables and a function to start
let isHotOutside = true
let moneyInPocket = 11.50
function willBuyDrink(isHotOutside, moneyInPocket){
// need a if statement to have the arguements run and get a statement of true or false.
    if (isHotOutside && moneyInPocket > 10.50) {
return true ;
} else {
    return false;
}
}


console.log(willBuyDrink(isHotOutside, moneyInPocket));
// 13.  Create a function of your own that solves a problem.
// In comments, write what the function does and why you created it.
//step 1 create a function and the variables you want to use
//step 2 create an if statement
//step 3 come up with a return for the if statement in this case and also an else incase you function does not have enoughPizza
//step 4 print the function 
function feedDanceClass(enoughPizza,dancers ) {
    if (enoughPizza  > dancers  *2) {
        return 'You have enough food for all the kids. ';
    } else {
        return 'You need to order more food. Now!!!!!!!'
    }
}
console.log(feedDanceClass(4,5));