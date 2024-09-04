

var newpage;
var interval = null;
var screenHeight = screen.availHeight;
var isStopped = false;

function openNewWindow(){
    newpage = window.open("window.html", "","width=200,height=200");
    newpage.document.write("<h3> flying child </h3>");
    newpage.document.close();

    newpage.moveTo(0, 0);
    newpage.focus();

    function moveChild() {
        if (isStopped) {
            return;
        }

        var screenWidth = screen.availWidth;
        var childWidth = newpage.innerWidth;
        var childHeight = newpage.innerHeight;

        const x = Math.floor(Math.random() * (screenWidth - childWidth));
        const y = Math.floor(Math.random() * (screenHeight - childHeight));

        if (y + childHeight > screenHeight) {
            // Stop moving the child window
            return;
        }

        newpage.moveTo(x, y);
        newpage.focus();

        setTimeout(moveChild, 1000);
    }

    interval = setInterval(moveChild, 1000);
}

function closeNewWindow(){
    if (newpage) {
        newpage.close();
    }
}

document.getElementById("stopButton").addEventListener("click", function() {
    focus.isStopped = true;
});

// Call the function to show the flying child window
openNewWindow();