var registrationForm = document.getElementById("registration-form");


setTimeout(function() {
    if (name === "" || email === "" || password === "" || jobTitle === "" || mobile === "" || gender === "" || address === "") {
        
        alert("Please enter all required fields.");
    }
}, 3000);

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(registrationForm);
    var name = formData.get("name");
    var email = formData.get("email");
    var password = formData.get("password");
    var jobTitle = formData.get("job-title");
    var mobile = formData.get("mobile");
    var gender = formData.get("gender");
    var address = formData.get("address");

    var win = window.open("", "Welcome Page", "width=300,height=200");

    win.document.title = "Welcome " + name + " (" + jobTitle + ")";

    var infoPara = document.createElement("p");
    infoPara.innerHTML = "Name: " + name + "<br>Email: " + email + "<br>Mobile: " + mobile + "<br>Gender: " + gender + "<br>Address: " + address;

    win.document.body.appendChild(infoPara);

    setTimeout(function() {
        win.close();
    }, 5000);
});