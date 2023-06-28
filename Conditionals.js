let finishTime = 16; // student's input time
let today = "Wednesday";

// feature 0
/* 
 As a diligent student, I want to reward myself if I finish my homework, and based on the time of day:
I want a latte if it's before 10 am
I want a hot chocolate it's between 10 am and 4 pm
I want ice cream between 4 pm - 10 pm.
If it's after 10 pm, I don't want anything other than sleep!
*/
if (finishTime < 10) {
  console.log("I want a latte!");
} else if (finishTime >= 10 && finishTime < 16) {
  console.log("I want hot chocolate");
} else if (finishTime >= 16 && finishTime <= 22) {
  console.log("I want Ice Cream!");
} else if (finishTime > 22) {
  console.log("I just want to sleep!");
}

// feature 1
/*Building off the MVP, if I'm up for ice cream, I want strawberry
 - but only if it's Wednesday. Otherwise, I want vanilla.*/

if (finishTime < 10) {
  console.log("I want a latte!");
} else if (finishTime >= 10 && finishTime < 16) {
  console.log("I want hot chocolate!");
} else if (finishTime >= 16 && finishTime <= 22) {
  if (today === "Wednesday") {
    console.log("I want strawberry Ice Cream!");
  } else {
    console.log("I want Vanilla Ice Cream!");
  }
} else if (finishTime > 22) {
  console.log("I just want to sleep!");
}

// feature 2 (hard)
/*Building off Feature 1, I want to adjust the current conditions and 
add a new option so that if the time is between 3 pm - 6 pm, I want to 
have it pick either ice cream or hot chocolate depending on if the time is even or odd. */

if (finishTime < 10) {
  console.log("I want a latte!");
} else if (finishTime >= 10 && finishTime < 16) {
  console.log("I want hot chocolate");
} else if (finishTime >= 15 && finishTime <= 18) {
  if (finishTime % 2 === 0) {
    // if the time is even
    console.log("I want Ice Cream!");
  } else {
    console.log("I want hot chocolate!");
  }
} else if (finishTime >= 16 && finishTime <= 22) {
  console.log("I want Ice Cream!");
} else if (finishTime > 22) {
  console.log("I just want to sleep!");
}

// feature 3 (super hard)
/*Building off Feature 2, I want my options for the 3 pm - 6 pm slot 
to be a random selection: if the time is even, I want my selections to be ice cream, 
cookies, or candy. If the time is odd, I want my selections to be hot chocolate, tea, or cake. */

if (finishTime < 10) {
  console.log("I want a latte!");
} else if (finishTime >= 10 && finishTime < 16) {
  console.log("I want hot chocolate");
} else if (finishTime >= 15 && finishTime <= 18) {
  let evenChoice = ["Ice Cream", "Cookies", "Candy"];
  let oddChoice = ["Hot chocolate", "tea", "Cake"];
  if (finishTime % 2 === 0) {
    // if the time is even
    console.log(
      "I want " + evenChoice[Math.floor(Math.random() * evenChoice.length)]
    ); // randomly assign number 0 - evenChoice.length - 1
  } else {
    console.log(
      "I want " + oddChoice[Math.floor(Math.random() * oddChoice.length)]
    ); // randomly assign number 0 - oddChoice.length - 1
  }
} else if (finishTime >= 16 && finishTime <= 22) {
  console.log("I want Ice Cream!");
} else if (finishTime > 22) {
  console.log("I just want to sleep!");
}
