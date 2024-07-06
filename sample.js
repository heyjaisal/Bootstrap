function validate(){
    var email=document.getElementById("inputEmail4");
    var password=document.getElementById("inputPassword4");
    var name=document.getElementById("inputname");
    var Destination=document.getElementById("inputdestination");
    var city=document.getElementById("inputCity");
   
    if(email.value==""){
        alert("you must have enter email");
        document.form1.email.focus();
        return false;
    }
    if(password.value==""){
        alert("Enter your password");
        document.form1.password.focus();
        return false;
    }
    if(name.value==""){
        alert("fill your name");
        document.form1.name.focus();
        return false;
    }
    if(Destination.value==""){
        alert("your going destination choose");
        document.form1.Destination.focus();
        return false;
    }
    if(city.value==""){
        alert("you must enter your city");
        document.form1.city.focus();
        return false;
    }
    
    return true;
}