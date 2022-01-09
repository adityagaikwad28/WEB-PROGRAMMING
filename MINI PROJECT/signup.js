function Register() {
  let name = document.querySelector("#uname").value;
  let mail = document.querySelector("#umail").value;
  let pass = document.querySelector("#upass").value;
  let rpass = document.querySelector("#repeatpass").value;

  if (name == "") {
    alert("please enter name");
  }
  if (name.length <= 2 || name.length > 20) {
    alert("2 to 20 characters allowed");
    return false;
    name("");
  }

  if (mail == "") {
    alert("Please enter valid mail id");
    return false;
  }

  if (pass == "") {
    alert("please enter valid password");
    return false;
    userpass("");
  }

  if (pass.length <= 5 || pass.length > 10) {
    alert("Length should between 5 to 10");
    return false;
  }

  if (rpass == "") {
    alert("please enter valid password");
    return false;
  }
  if (!(rpass === pass)) {
    alert("Password no match");
    return false;
  }
}
