function loginEventHandler()
{
    var userNameElement=document.getElementById("txtuserName");
    var passwordElement=document.getElementById("txtuserPassword");
    var errorMessageElement=document.getElementById("errorMessage");
    errorMessageElement.innerHTML="";
    errorMessageElement.style.color="red";
    var userName=userNameElement.value;
    var passWord=passwordElement.value;
    if(userName=="")
    {
        errorMessageElement.innerHTML+="Username can not be empty.";
        userNameElement.style.border="3px solid red";
    }
    else
    {
        userNameElement.style.border="1px solid black";
    }
    if(passWord=="")
    {
        errorMessageElement.innerHTML+="</br> Password can not be empty."
        passwordElement.style.border="3px solid red";
    }
    var pat=/[A-Z]/g;
    var res=pat.test(passWord);
    if(res==false)
    {
        errorMessageElement.innerHTML+="</br> Password should contain an uppercase letter atleast.";
    }
    pat=/[0-9]/g;
    res=pat.test(passWord);
    if(res==false)
    {
        errorMessageElement.innerHTML+="</br> Password should contain a digit atleast.";
    }
    pat=/[^a-zA-Z0-9]/g;
    res=pat.test(passWord);
    if(res==false)
    {
        errorMessageElement.innerHTML+="</br> Password should contain a special character atleast.";
    }
}