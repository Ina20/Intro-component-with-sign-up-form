function validateForm() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let mail = document.getElementById("mail").value;
  let pass = document.getElementById("pass").value;
  if (firstName == "") {
    document.getElementById("firstNameNV").style.display = "block";
    document.getElementById("firstName").style.border = "2px solid hsl(0, 100%, 74%)";
    document.getElementById("firstNameNV").innerHTML = "First Name cannot be empty";
  }else {
    document.getElementById("firstNameNV").style.display = "none";
    document.getElementById("firstName").style.border = "solid 1px hsl(246, 25%, 77%)";
  }
  if (lastName == "") {
    document.getElementById("lastNameNV").style.display = "block";
    document.getElementById("lastName").style.border = "2px solid hsl(0, 100%, 74%)";
    document.getElementById("lastNameNV").innerHTML = "Last Name cannot be empty";
  }else {
    document.getElementById("lastNameNV").style.display = "none";
    document.getElementById("lastName").style.border = "solid 1px hsl(246, 25%, 77%)";
  }
  if (mail == "") {
    document.getElementById("mailNV").style.display = "block";
    document.getElementById("mail").style.border = "2px solid hsl(0, 100%, 74%)";
    document.getElementById("mailNV").innerHTML = "Email cannot be empty";
  }else {
    document.getElementById("mailNV").style.display = "none";
    document.getElementById("mail").style.border = "solid 1px hsl(246, 25%, 77%)";
  }
  if (pass == "") {
    document.getElementById("passNV").style.display = "block";
    document.getElementById("pass").style.border = "2px solid hsl(0, 100%, 74%)";
    document.getElementById("passNV").innerHTML = "Password cannot be empty";
  }else {
    document.getElementById("passNV").style.display = "none";
    document.getElementById("pass").style.border = "solid 1px hsl(246, 25%, 77%)";
  }
}
