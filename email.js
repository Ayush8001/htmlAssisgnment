function ValidateEmail()
{
	var password=document.getElementById("pass");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{

return true;
}
else{alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}


	if(password.length<6){
          alert("password should be more then 6 character");
	return false;}
	
	elseif(password==null || password=""){
		alert("password should not b null");
	}
}