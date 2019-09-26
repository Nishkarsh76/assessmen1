function alertFunc(header, alertString) {
  var modalBody = document.getElementById('modalBody');
  var modalTitle = document.getElementById('modalTitle');
  modalTitle.innerHTML = header;
  modalBody.innerHTML = alertString;
  $("#myModal").modal();
};

$("#submitBtn").click(function() {
  debugger;

  var userid = document.getElementById('uid').value;
  var email = document.getElementById('email').value;
  var pass1 = document.getElementById('pwd1').value;
  var pass2 = document.getElementById('pwd2').value;
  var username = document.getElementById('usr').value;
  var country = document.getElementById('cou').value;
  var zi = document.getElementById('zip').value;
  var male = document.getElementById('gender1').value;
  var female = document.getElementById('gender2').value;
  var eng = document.getElementById('lang1').value;
  var other = document.getElementById('lang2').value;

  if (userid == "") {
    alertFunc("ERROR", "Userid not entered");
    return;
  }

  if (username == "") {
    alertFunc("ERROR", "Username not entered");
    return;}
    else{
      var re= /^[a-zA-Z]+$/;
      if(re.test(username)){;
      }
      else{
        alertFunc("error","wrong format of username");
        return;
      }
    
    }

  if (email == "") {
    alertFunc("ERROR", "Email not entered");
    return;
  } else {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,3})$/;
    if (re.test(email)) {
      ;
    } else {
      alertFunc("ERROR", "Wrong format of email");
      return;
    }
  }

  if (pass1 == "") {
    alertFunc("ERROR", "Password not entered");
    return;
  } else {
    if (pass2 == "") {
      alertFunc("ERROR", "Please Confirm your password");
      return;
    } else if (pass2 != pass1) {
      alertFunc("ERROR", "Passwords do not match");
      return;
    }
  }
  if (country == "") {
    alertFunc("ERROR", "country not entered");
    return;
  }
  if (zi == "") {
    alertFunc("ERROR", "zip not entered");
    return;
  }
  else{
    var re= /^[0-9]{6}+$/;
    if(re.test(zi)){;
    }
    else{
      alertFunc("error","wrong format of zip code");
      return;
    }
  
  }
  if (male && female) {
    alertFunc("ERROR", "gender not entered");
    
    return;
  }
  if (eng && other == "") {
    alertFunc("ERROR", "language not entered");
    return;
  }
  alertFunc("SUCCESS", "SUCCESSFULLLY SUBMITED DATA");

  return;
});