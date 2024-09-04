var startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", function() {
  var win = window.open("", "Typing Message", "width=300,height=200");

  win.document.title = "Typing Message";

  var message = "Hello, this is a typing message!";
  var idx = 0;
  var intervalId = setInterval(function() {
    if (idx < message.length) {
      win.document.body.innerHTML += message.charAt(idx);
      idx++;
    } else {
      clearInterval(intervalId);
      setTimeout(function() {
        win.close();
      }, 5000);
    }
  }, 1000); 
});