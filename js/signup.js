let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let mobile = document.getElementById("mobile");
let first = document.getElementById("first");
let last = document.getElementById("last");
let pwdrpt = document.getElementById("pwdrpt");
let emailerror = document.getElementById("emailerror");
let pwdrpterror = document.getElementById("pwdrpterror");
let phoneMessage = document.getElementById("phoneMessage");
let no=0


function validate() {
    var emailResult = false;
    var mobileResult = false;
    var firstResult = false;
    var lastResult = false;
    var pwdResult = false;
    var pwdrptResult = false;
    reset()

    if (email.value == "") {
        email.style.border = "3px solid red";
        emailResult = false;
    } else {
        let regexp1 = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/

        // success
        if (regexp1.test(email.value)) {
            emailerror.innerHTML = "valid";
            email.style.border = "3px solid green";
            emailerror.style.color = "green";
            emailResult = true; // full success
        }
        else {
            emailerror.innerHTML = "Invalid";
            emailerror.style.color = "red";
            email.style.border = "3px solid red";
            emailResult = false;
        }

    }
    if (mobile.value == "") {
        mobile.style.border = "3px solid red";
        mobileResult = false;
    } else {
        // mobile validation
        let regexp2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regexp2.test(mobile.value)) {
            phoneMessage.innerHTML = "valid";
            mobile.style.border = "3px solid green";
            phoneMessage.style.color = "green";
            mobileResult = true; // full success

        }
        else {
            phoneMessage.innerHTML = "Invalid";
            mobile.style.border = "3px solid red";
            phoneMessage.style.color = "red";
            mobileResult = false;

        }



    }
    if (first.value == "") {
        first.style.border = "3px solid red";
        firstResult = false;
    } else {
        first.style.border = "3px solid green"
        firstResult = true;
    }
    if (last.value == "") {
        last.style.border = "3px solid red";
        lastResult = false;
    } else {
        last.style.border = "3px solid green"
        lastResult = true;
    }
    if (pwd.value == "") {
        pwd.style.border = "3px solid red";
        pwdResult = false;
    } else {
        if (no==3) {
            pwd.style.border = "3px solid green";
            pwdResult = true; // full successs
    }
    else{
            pwd.style.border = "3px solid red";
            pwdResult = false;
    }
}
    if (pwdrpt.value == "") {
        pwdrpt.style.border = "3px solid red";
        pwdrptResult = false;
    } else {
        if(pwdrpt.value ==pwd.value){
        pwdrpt.style.border = "3px solid green"
        pwdrptResult = true;
    }else{
        pwdrpterror.innerHTML = "Not matching";
        pwdrpterror.style.color = "red";
        pwdrpt.style.border = "3px solid red";
        pwdrptResult = false;
    }
    }


    if (emailResult && mobileResult && firstResult && lastResult && pwdResult && pwdrptResult) {

        return true;
    } else {
        return false;
    }

}


function reset() {
    email.style.border = "";
    pwd.style.border = "";
    mobile.style.border = "";
    first.style.border = "";
    last.style.border = "";
    pwdrpt.style.border = "";
    pwdrpterror.innerHTML = "";
    pwdrpterror.style.color = "";
}

const indicator = document.querySelector(".indicator");
const input = document.querySelector(".passwordInput");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /[A-Z]/;
function trigger(){

  if(input.value != ""){
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
    if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
    if(input.value.length >= 8 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
    if(no==1){
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Your password is too week";
      text.classList.add("weak");
    }
    if(no==2){
      medium.classList.add("active");
      text.textContent = "Your password is medium";
      text.classList.add("medium");
    }else{
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if(no==3){
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add("strong");
    }else{
      strong.classList.remove("active");
      text.classList.remove("strong");
    }
    showBtn.style.display = "block";
    showBtn.onclick = function(){
      if(input.type == "password"){
        input.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#23ad5c";
      }else{
        input.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#000";
      }
    }
  }else{
    indicator.style.display = "none";
    text.style.display = "none";
    showBtn.style.display = "none";
  }
}




