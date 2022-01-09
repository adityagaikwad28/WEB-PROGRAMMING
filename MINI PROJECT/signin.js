function validateForm() {
  let username = document.querySelector("#user").value;
  let userpass = document.querySelector("#pass").value;
  if (username == "") {
    document.querySelector("#text1").innerHTML = "please enter valid username";
    return false;
  }
  if (username.length <= 2 || username.length > 20) {
    document.querySelector("#text1").innerHTML =
      "only 2 to 20 characters allowed";
    return false;
  }
  if (!isNaN(username)) {
    document.querySelector("#text1").innerHTML = "only characters allowed";
    return false;
  }

  if (userpass == "") {
    document.querySelector("#text2").innerHTML = "please enter valid password";
    return false;
  }
  if (userpass.length <= 5 || userpass.length > 10) {
    document.querySelector("#text2").innerHTML =
      "only 5 to 10 characters allowed";
    return false;
  }
}
