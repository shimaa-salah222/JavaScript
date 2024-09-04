//string-----------------------
//Question1-----------------------------------

// function isPalindrome(str) {
//   var originalStr = str;
//   var caseSensitive = confirm("Do you want to consider case sensitivity?");

//   if (caseSensitive) {
//     return str === str.split("").reverse().join("");
//   } else {
//     return originalStr.toLowerCase() === (originalStr.toLowerCase()).split("").reverse().join("");
//   }
// }

// var input = prompt("Enter a string: ");

// if (isPalindrome(input)) {
//   alert("The entered string is a palindrome!");
// } else {
//   alert("The entered string is not a palindrome.");
// }





//Q2-------------------------
// var input = prompt("Enter a string to count the number of 'e' characters:");
// var count = 0;

// for (var i = 0; i < input.length; i++) {
//   if (input[i].toLowerCase() === 'e') {
//     count++;
//   }
// }

// document.writeln("The number of 'e' characters in the string is: " + count);

//Q3-------------------------


function getName() {
  var x = 0;  
  var maxX=3;
  while (x < maxX) {
      var Ename = prompt("Enter your name : ");
      if (isNaN(Ename) && Ename !== "") {
          return Ename;
      } else {
          alert("Invalid input. Please enter a valid name.");
          x++;
      }
  }
  alert("You have exceeded the maximum number of attempts. Please try again later.");
}


function getmobile() {
  var x = 0;  
  var maxX=3;
  while (x < maxX) {
    var mobile = prompt("Enter your Mobile Number:");
    if (/^(0\d{2}|012|011|010)\d*$/.test(mobile)) {
      return mobile;
    }else {
          alert("Invalid input. Please enter a valid mobile.");
          x++;
      }
  }
  alert("You have exceeded the maximum number of trys. Please try again later.");
}
function getPhoneNumber() {
  var x = 0;
  var maxX=3;
  while (x < maxX){
      var phone = prompt("Enter your phone number: ");
      if (!isNaN(phone) && phone.toString().length === 8) {
          return phone;
      } else {
          alert("Invalid input. Please enter a valid 8-digit phone number.");
          x++;
      }
  }
  alert("You have exceeded the maximum number of trys. Please try again later.");
}
function getemail() {
  var x = 0;  
  var maxX=3;
  while (x < maxX) {
    var email = prompt("Enter your email address:");
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email)) {
      return email;
    }else {
          alert("Invalid input. Please enter a valid email.");
          x++;
      }
  }
  alert("You have exceeded the maximum number of trys. Please try again later.");
}

function validateInput() {
  var Ename = getName();
  var mobile = getmobile();
  var phone = getPhoneNumber();
  var email = getemail();

  var outputElement = document.getElementById("output");
  outputElement.innerHTML = "Welcome: " + Ename + "<br>";
  outputElement.innerHTML += "Your mobile number is: " + mobile + "<br>";
  outputElement.innerHTML += "Your phone number is: " + phone + "<br>";
  outputElement.innerHTML += "Your Email is: " + email;
}

validateInput();



//---------------------------------------------

//maths object--------

// var redius=prompt("what is the value of your circles redius: ");
// var area=(redius*redius*Math.PI);
// alert("total area of the circle is = "+area);


// var val=prompt("enter another value to calculate its square root: ");
// alert("square root of "+ val+" is = "+Math.sqrt(val));



//array object--------------------------
//Q 1--------------------


// var arr=[];
// for(i=0; i<3;i++){
//     arr.push(prompt("enter 3 elements: "));
// }
// document.writeln("sum of the three values " + arr.join("+")+" = "+ eval(arr.join("+"))+"<br>");
// document.writeln("multiplication of the three values " + arr.join("*")+" = "+ eval(arr.join("*"))+"<br>");
// document.writeln("division of the three values " + arr.join("/")+" = "+ eval(arr.join("/"))+"<br>");


//Q 2--------------------

var arr=[];

for(var i=0;i<5;i++){
  arr.push(prompt("enter 5 elements to sort: "));
  

}
document.writeln("you've entered the values of "+arr +"<br>");

arr.sort(function(a,b){
    return b - a;
});
document.writeln("your values after being sorted descinding "+ arr +"<br>");

arr.sort(function(a,b){
    return a - b;
});

document.writeln("your values after being sorted ascinding "+ arr +"<br>");