document.addEventListener("DOMContentLoaded", function() {
    const cookies = document.cookie.split(';');
    let cookieData = {};
    for (const cookie of cookies) {
      const [key, value] = cookie.split('=');
      if (key.trim() === 'user-data') {
        cookieData = JSON.parse(value);
        break;
      }
    }
    
    if (cookieData) {
      const userData = cookieData;
      document.getElementById("name").innerText = userData.name;
      document.getElementById("email").innerText = userData.email;
      document.getElementById("address").innerText = userData.address;
      document.getElementById("gender").innerText = userData.gender;
    }
  });
  