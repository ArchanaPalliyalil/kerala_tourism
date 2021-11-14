

function validate() {



    let email = document.getElementById("email");
    let pwd = document.getElementById("pwd");
    let emailerror = document.getElementById("emailerror");
    let pwderror = document.getElementById("pwderror");


    reset()

    let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/


    if (email.value == "" && pwd.value == "") {
        email.style.border = "3px solid red";
        pwd.style.border = "3px solid red";
        emailerror.innerHTML = "Email cannot be blank";
        emailerror.style.color = "red";
        pwderror.innerHTML = "Password cannot be blank";
        pwderror.style.color = "red";
        return false;
    }
    else if (email.value != "" && pwd.value == "" ) {
        if(regexp.test(email.value)){
        emailerror.innerHTML = "valid";
        email.style.border = "3px solid green";
        emailerror.style.color = "green";
        pwderror.innerHTML = "Password cannot be blank";
        pwderror.style.color = "red";
        pwd.style.border = "3px solid red";
        return false
        }
        else{
            emailerror.innerHTML = "Invalid"; 
            emailerror.style.color = "red";
            return false;
        }
    }
        if(email.value == "" && pwd.value != ""){
            emailerror.innerHTML = "Email cannot be blank";
            emailerror.style.color = "red";
            email.style.border = "3px solid red";
            return false;
        }
  
        if(pwd.value!= "" && email.value !=""  && regexp.test(email.value)){
                
        return true;
        }else{

            emailerror.innerHTML = "Invalid"; 
            emailerror.style.color = "red";
            return false;
        }
       


   

    
    // if (email.value == "") {
    //     email.style.border = "3px solid red";
    //     return false;
    // }
    // if (pwd.value == "") {
    //     pwd.style.border = "3px solid red";
    //     return false;
    // }







}

function reset() {
    emailerror.innerHTML = "";
    emailerror.style.color = "";
    email.style.border = "";
    pwd.style.border = "";
    pwderror.innerHTML = "";
    pwderror.style.color = "";
}
