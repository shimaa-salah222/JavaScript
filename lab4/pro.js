var numPersons = parseInt(prompt("Enter the number of persons you want to add:"));
while (isNaN(numPersons) || numPersons <= 0) {
  alert("Invalid input. Please enter a positive integer.");
  numPersons = parseInt(prompt("Enter the number of persons you want to add:"));
}

var persons = [];

for (var i = 0; i < numPersons; i++) {
  var userName = prompt("Enter name (length should be more than 3 and less than 10 characters):");
  while (userName.length <= 3 || userName.length >= 10) {
    alert("Name length should be more than 3 and less than 10 characters.");
    userName = prompt("Enter name (length should be more than 3 and less than 10 characters):");
  }

  
  
  var age = parseInt(prompt("Enter age (should be greater than 10 and less than 60):"));
  while (age <= 10 || age >= 60) {
    alert("Age should be greater than 10 and less than 60.");
    age = parseInt(prompt("Enter age (should be greater than 10 and less than 60):"));
  }
  
  persons.push({userName: userName, age: age});
}

var table = document.getElementById('user-table');
var tableBody = document.getElementById('user-tbody');

for (var i = 0; i < persons.length; i++) {
  var newRow = document.createElement('tr');
  newRow.innerHTML=`
     <td style="border: solid; background-color: rgb(164, 194, 223); font-size:17px">${persons[i].userName}</td>
     <td style="border: solid; background-color: rgb(164, 194, 223); font-size:17px">${persons[i].age}</td>
    `;
  tableBody.appendChild(newRow);
}

