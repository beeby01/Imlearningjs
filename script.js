let display = document.getElementById("display");
function checkResult() {
  let myInput = Number(document.getElementById("score").value);
  console.log(myInput);

  if (myInput > 0 && myInput < 40) {
    display.innerHTML = `<span>you failed</span>`;
  } else if (myInput >= 40) {
    display.innerHTML = `<span>You tried</span>`;
  }
}

//Check Out
//Try and catch statement
//loops
//**For loop */
//**while loop */

for (let i = 0; i >= 10; i++) {
  console.log(i);
}

//fizz buzz
//fizz = no divisible by 3
//buzz = no divisible by 5
//fizz buzz = no divisible by 3 and 5
//else = not applicable

// concertination
let food = "Yam";
let stew = "Peppered snail stew";
let protein = "beans";

console.log(`I love to eat ${food} garnished with ${stew} and ${protein}`);

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     lol.innerHTML += `</br>${i} * ${j} = ${i * j}`;
//   }
// }



for (let i = 1; i <= 12; i++) {
  let table = "<table>";
  for (let j = 1; j <= 12; j++) {
      table += "<tr><td>" + j + " * " + i + " = " + (j * i) + "</td></tr>";
  }
  table += "</table>";
  document.getElementById("lol").innerHTML += table;
}
