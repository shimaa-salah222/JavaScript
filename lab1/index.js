//question 1-----------------------------------


// var sum = 0;
// var n = 0;

// while (true) {
//     var value = prompt("Enter a value (or 0 to stop):");
    
//     if (!value) {
//         break;
//     }
    
//     if (!isNaN(Number(value)) && isFinite(value)) {
//         value = Number(value);
        
//         if (value === 0) {
//             break;
//         }
        
//         if (sum + value > 100) {
//             alert("Sum exceeds 100. Please enter a valid value.");
//             continue;
//         }
        
//         sum += value;
//         n++;
//     } else {
//         alert("Invalid input. Please enter a numeric value.");
//     }
// }

// if (n > 0) {
//     document.writeln("The sum of values is = " +sum); 
// } 
 
    



// questoin 2--------------------

// var message=prompt("enter your message: ")

// for(var i=1; i<=6 ;i++){
   
//     document.writeln("<h"+i+">" + message +i + "</h"+i+">");
   
// }

//question 3----------------------

function getName() {
    var x = 0;  
    var maxX=3;
    while (x < maxX) {
        var firstName = prompt("Enter your first name: ");
        if (isNaN(firstName) && firstName !== "") {
            return firstName;
        } else {
            alert("Invalid input. Please enter a valid name.");
            x++;
        }
    }
    alert("You have exceeded the maximum number of attempts. Please try again later.");
}

function getLastName() {
    var x = 0;
    var maxX=3;
    while (x < maxX) {
        var lastName = prompt("Enter your last name: ");
        if (isNaN(lastName) && lastName !== "") {
            return lastName;
        } else {
            alert("Invalid input. Please enter a valid name.");
            x++;
        }
    }
    alert("You have exceeded the maximum number of attempts. Please try again later.");
}

function getPhoneNumber() {
    var x = 0;
    var maxX=3;
    while (x < maxX){
        var phoneNumber = prompt("Enter your mobile number: ");
        if (!isNaN(phoneNumber) && phoneNumber.toString().length === 11) {
            return phoneNumber;
        } else {
            alert("Invalid input. Please enter a valid 11-digit phone number.");
            x++;
        }
    }
    alert("You have exceeded the maximum number of attempts. Please try again later.");
}

function getColor() {
    var color = prompt("Choose a color (red, green, blue): ");
    switch (color.toLowerCase()) {
        case "red":
            return "red";
        case "green":
            return "green";
        case "blue":
            return "blue";
        default:
            alert("Invalid color. Please choose a valid color (red, green, blue).");
            return getColor();
            
    }
}

function main() {
    var firstName = getName();
    var lastName = getLastName();
    var phoneNumber = getPhoneNumber();
    var color = getColor();
    
   var message = document.createElement("p");
   message.style.color = color;
   message.innerHTML = "Welcome, " + firstName + " " + lastName +"<br>"+ " your phone number is:"+ " (" + phoneNumber + ")!";
   document.body.appendChild(message);
}

main();
