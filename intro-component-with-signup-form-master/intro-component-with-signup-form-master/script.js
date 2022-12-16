function validate() {
    let esign = document.getElementById("email");
    let ealert = document.getElementById("eme");
    let email = document.getElementById("email").value;
    let regex = /^([a-zA-Z0-9\.]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if (regex.test(email)) {
      console.log("valid");
      esign.style.background = "none";
      esign.style.border = "2px solid lightgrey";
      ealert.style.display = "none";
      return true;
    } else {
      console.log("invalid");
      esign.style.background = "url(images/icon-error.svg)";
      esign.style.backgroundRepeat = "no-repeat";
      esign.style.backgroundPositionX = "right";
      esign.style.backgroundPositionY = "center";
      esign.style.border = "2px solid red";
      ealert.style.display = "block";
      return false;
    }
  }
  function validname() {
    let name = document.getElementById("name").value;
    let nsign = document.getElementById("name");
    let nalert = document.getElementById("fname");
  
    if (name === " ") {
      console.log("invalid");
      nsign.style.background = "url(images/icon-error.svg)";
      nsign.style.backgroundRepeat = "no-repeat";
      nsign.style.backgroundPositionX = "right";
      nsign.style.backgroundPositionY = "center";
      nsign.style.border = "2px solid red";
      nalert.style.display = "block";
      return false;
    } else {
      console.log("valid");
      nsign.style.background = "none";
      nsign.style.border = "2px solid lightgrey";
      nalert.style.display = "none";
      return true;
    }
  }
  function validlname() {
    let name = document.querySelector("#lname").value;
    let lsign = document.querySelector("#lname");
    let lalert = document.getElementById("lname-er");
    if (name === " ") {
      console.log("invalid");
      lsign.style.background = "url(images/icon-error.svg)";
      lsign.style.backgroundRepeat = "no-repeat";
      lsign.style.backgroundPositionX = "right";
      lsign.style.backgroundPositionY = "center";
      lsign.style.border = "2px solid red";
      lalert.style.display = "block";
      return false;
    } else {
      console.log("valid");
      lsign.style.background = "none";
      lsign.style.border = "2px solid lightgrey";
      lalert.style.display = "none";
      return true;
    }
  }
  
  function validpass() {
    let name = document.querySelector("#password").value;
    let psign = document.querySelector("#password");
    let palert = document.querySelector("#pass-er");
    if (name === " ") {
      console.log("invalid");
      psign.style.background = "url(images/icon-error.svg)";
      psign.style.backgroundRepeat = "no-repeat";
      psign.style.backgroundPositionX = "right";
      psign.style.backgroundPositionY = "center";
      psign.style.border = "2px solid red";
      palert.style.display = "block";
      return false;
    } else {
      console.log("valid");
      psign.style.background = "none";
      psign.style.border = "2px solid lightgrey";
      palert.style.display = "none";
      return true;
    }
  }