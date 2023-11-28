function displayText() {
    // Get the value from the textbox
    let inputValue = document.getElementById("myTextbox").value;
    let password =  document.getElementById("password").value;
    let otp = document.getElementById("otp").value;

    // Display the value on the page
    let infoString =  displayArea = 'Username: ' + inputValue +  '<br> Password: ' + password + '<br> OneTime Password: ' + otp;
     document.getElementById("displayArea").innerHTML= infoString
    
    }