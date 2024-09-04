

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const userData = {};
      for (const key of formData.keys()) {
        userData[key] = formData.get(key);
      }
      const cookieData = {};
      for (const key in userData) {
        cookieData[key] = userData[key];
      }
      const date = new Date();
      date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000)); 
      document.cookie = `user-data=${JSON.stringify(cookieData)}; expires=${date.toUTCString()}; path=/`;
      window.location.href = "display.html";
    });
  
    const clearCookiesButton = document.getElementById("clearCookies");

    clearCookiesButton.addEventListener("click", function() {
      // Delete cookies
      function deleteCookies() {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.length > 0) {
            var [key, value] = cookie.split('=');
            document.cookie = `${key}=; expires=Thu, Jan 01 1970 00:00:00 GMT; path=/`;
          }
        }
      }
    
      deleteCookies();
    });
  });
    

