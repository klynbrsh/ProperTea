function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
// If (validateForm()==false) {
//     document.getElementById("submit").disabled = true;
// }
//   else (validateForm()==true) {
//     document.getElementById("Button").disabled = false;
//   }