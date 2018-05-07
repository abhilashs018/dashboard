function validateLogin()
{
    if(document.loginForm.loginId.value==="")
    {
        $("#msgId").html("Please enter Email");
        document.loginForm.loginId.focus();
        return false;
    }
    if(document.loginForm.password.value==="")
    {
        $("#msgId").html("Please enter Password");
        document.loginForm.password.focus();
        return false;
    }
    var x = new String(document.loginForm.loginId.value);
    var i=x.indexOf("'");
    if(i>=0)
    {
        $("#msgId").html("This type of login id not allowed");
        document.loginForm.loginId.focus();
        return false;
    }
    x = new String(document.loginForm.password.value);
    i=x.indexOf("'");
    if(i>=0)
    {
        $("#msgId").html("This type of Password not allowed");
        document.loginForm.password.focus();
        return false;
    }
    document.loginForm.submit();
    return true;
}

function focusOn()
{
    document.loginForm.loginId.focus();
}
