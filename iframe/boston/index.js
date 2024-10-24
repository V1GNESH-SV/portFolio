
import { boston } from "./boston.js";

let data = boston.data;
let topearners = [];

for (let i = 0; i < data.length; i++) {
  if (data[i][11] < 20000000) {
    topearners.push({ name: data[i][8], salary: data[i][11] });
  }
}

topearners.sort(function (a, b) {
  return b.salary - a.salary;
});

topearners = topearners.slice(0, 5);

let Earners = "<h1><u>Top salary:</u></h1>";
for (let i = 0; i < topearners.length; i++) {
  Earners += `<h2>Top salary ${i + 1}: ${topearners[i].name} - Salary: ${
    topearners[i].salary
  }</h2>`;
}
document.getElementById("app").innerHTML = Earners;
console.log(topearners);




// // Sample data: array of arrays [name, salary]
// let data = [
//   ["Alice", 15000000],
//   ["Bob", 18000000],
//   ["Charlie", 25000000],
//   ["David", 17000000],
//   ["Eve", 22000000],
//   ["Frank", 19000000],
//   ["Grace", 12000000],
//   // Assume more data entries...
// ];

// // Find top five earners
// function findTopEarners(data) {
//   // Step 1: Filter the data
//   let topearners = data.map(entry => ({ name: entry[0], salary: entry[1] }));

//   // Step 2: Sort by salary in descending order
//   topearners.sort((a, b) => b.salary - a.salary);

//   // Step 3: Get the top 5 earners
//   topearners = topearners.slice(0, 5);

//   return topearners;
// }

// // Call the function and store results
// let topEarners = findTopEarners(data);

// // Generate HTML output
// let Earners = "<h1><u>Top Salary Earners:</u></h1>";
// topEarners.forEach((earner, index) => {
//   Earners += `<h2>Top ${index + 1}: ${earner.name} - Salary: $${earner.salary.toLocaleString()}</h2>`;
// });

// // Insert the result into the HTML element with ID 'app'
// document.getElementById("app").innerHTML = Earners;

// // Log the top earners to the console
// console.log(topEarners);
