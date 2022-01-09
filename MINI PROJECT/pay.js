function validate() {
  var uname = document.reg_form.uname;
  if (uname.value.length <= 0) {
    alert("Name is required");
    return false;
  }
  var cardno = document.reg_form.cardno;
  if (cardno.value.length < 19 || cardno.value.length < 19) {
    alert("Please enter correct Card-number");
    return false;
  }
  var expmonth = document.reg_form.expmonth;
  if (expmonth.value === "select_month") {
    alert("Please select exp month");
    return false;
  }
  var expyear = document.reg_form.expyear;
  if (expyear.value < "2022") {
    alert("Exp date should be gteater than today");
    return false;
  }
  var cvv = document.reg_form.cvv;
  if (cvv.value.length < 3 || cvv.value.length > 3) {
    alert("Please enter correct CVV");
    return false;
  }
  var amount = document.reg_form.amount;
  if (amount.value == "select_amount") {
    alert("Please select amount");
    // fname.focus();
    return false;
  }
}
