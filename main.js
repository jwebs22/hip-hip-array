/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  // Challenge 1 Code

  let counter1 = 0;

  while (counter1 < students.length)
  {
    console.log(students[counter1]);
    counter1++;
  }





  console.log("\n");
  console.log("Challenge 2");
// Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  
  //Challenge 2 Code
 
  let counter2 = 0;
  grades.reverse()

  while (counter2 < grades.length)
  {
    console.log(grades[counter2]);
    counter2++;
  }


  


  console.log("\n");
  console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  
  // Challenge 3 Code

  let counter3 = 0;

  while (counter3 < positiveNumbers.length)
  {
    if (positiveNumbers[counter3] % 2 === 0)
         {
          console.log(positiveNumbers[counter3]);
         }
    counter3++;
  }





  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code

  let counter4 = 0;

  while (counter4 < mixedSignNumbers.length)
  {
    if (mixedSignNumbers[counter4] % 2 === 0)
      {
       console.log(mixedSignNumbers[counter4]);
      }
    counter4++;  
    }    





  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  
  // Challenge 5 Code

  symmetricalCapitals.shift();
  symmetricalCapitals.shift();
  symmetricalCapitals.pop();

  let counter5 = 0;

  while (counter5 < symmetricalCapitals.length)
  {
    console.log(symmetricalCapitals[counter5]);
    counter5++;
  }
  




  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  
  // Challenge 6 Code

  fibonacciNumbers.unshift("0");
  fibonacciNumbers.push("21", "34");

  let counter6 = 0;

  while (counter6 < fibonacciNumbers.length)
  {
    console.log(fibonacciNumbers [counter6]);
    counter6++;
  }


  


  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  
  // Challenge 7 Code

  const myArray = [1, 2, 3, 4, 5];
  counter7 = 0

  while (counter7 < myArray.length)
  {
    console.log(myArray[counter7]);
    counter7++;
  }





  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  const emptyArray = [];
  
  // Challenge 8 Code

  emptyArray.unshift("1", "2", "3");
  emptyArray.push("4", "5");

  let counter8 = 0;

  while (counter8 < emptyArray.length)
  {
    console.log(emptyArray[counter8]);
    counter8++;
  }
 




  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  
  // Challenge 9 Code

  let counter9 = 0;

  while (counter9 < 3)
  {
    counter9++;
  }
  
  while (counter9 <= 10)
    {
    console.log(students[counter9]);
    counter9++;
    }
  
  



  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  
  // Challenge 10 Code

  let newListOfStudents = [];
  let counter10 = 0;
  let newCounter = 0;

  while (counter10 < 3)
  {
    counter10++;
  }

  while (counter10 <= 10)
  {
    newListOfStudents.push(students[counter10]);
    counter10++;
  }

  while (newCounter < newListOfStudents.length)
  {
    console.log(newListOfStudents[newCounter]);
    newCounter++;
  }





  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  
  // Challenge 11 Code

  let mySlice11 = students.slice(3,11)
  let counter11 = 0;
  console.log("Sliced and Copied Array: ");

  while (counter11 < mySlice11.length)
  {
    console.log(mySlice11[counter11]);
    counter11++;
  }

  console.log("Original Array: ");
  let i11 = 0;

  while (i11 < students.length)
  {
    console.log(students[i11]);
    i11++;
  }
  




  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  
  // Challenge 12 Code

  let mySplice12 = dinosaurs.splice(4,3);
  let counter12 = 0;

  console.log(`Items spliced out are: ${mySplice12}.`);

  console.log("Original Array has been changed to: ");
  while (counter12 < dinosaurs.length)
  {
    console.log(dinosaurs[counter12]);
    counter12++;
  }


  


  console.log("\n");
  console.log("Challenge 13");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  
  // Challenge 13 Code

  console.log(dinosaurs.join("*"));





  console.log("\n");
  console.log("Challenge 14");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  
  // Challenge 14 Code

  let counter14 = 0

  while (counter14 < dinosaurs.length)
  {
    console.log(dinosaurs.reverse()[counter14]);
    counter14++;
  }

  


  console.log("\n");
  console.log("Challenge 15");
  // Challenge 15
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  
  // Challenge 15 Code

  const arrayA = [1, 2, 3, 4, 5];
  const arrayB = [6, 7, 8, 9, 10];
  let combinedArray = arrayA.concat(arrayB)
  let counter15 = 0;

  while (counter15 < combinedArray.length)
  {
    console.log(combinedArray[counter15]);
    counter15++;
  }
  console.log(arrayA);
  console.log(arrayB);



  
