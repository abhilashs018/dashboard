function validateRegistration(){
    if(document.registerForm.firstName.value===""){
        $("#msgId").html("Please enter First Name");
        document.registerForm.firstName.focus();
        return false;
    }
    if(document.registerForm.lastName.value===""){
        $("#msgId").html("Please enter Last Name");
        document.registerForm.lastName.focus();
        return false;
    }
    if(document.registerForm.mobile.value===""){
        $("#msgId").html("Please enter Mobile");
        document.registerForm.mobile.focus();
        return false;
    }
    if(document.registerForm.email.value===""){
        $("#msgId").html("Please enter Email");
        document.registerForm.email.focus();
        return false;
    }
    if(document.registerForm.password.value===""){
        $("#msgId").html("Please enter Password");
        document.registerForm.password.focus();
        return false;
    }
    document.registerForm.submit();
    return true;
}

function focusOn()
{
    document.registerForm.firstName.focus();
}