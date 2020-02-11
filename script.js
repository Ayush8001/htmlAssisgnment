function myfunction()
{
var fname=document.getElementById('First').value;
var lname=document.getElementById('Last').value;
var number=/[0-9]/;
var lower=/[a-z]/;
var upper=/[A-Z]/;
var email=document.getElementById('email1').value;
var atPosition=email.indexOf('@');
var dotPosition=email.lastIndexOf('.');
var areacode=document.getElementById('area').value;
var phone=document.getElementById('mobile').value;

if((fname=='')||(fname==null))

{
alert('firstname cant be null');
return false;
}
else if(fname.match(number))
{
alert('name cant be number');
return false;
}
else if((lname=='')||(lname==null))
{
alert('last name cant be null');
return false;
}
else if(lname.match(number))
{
alert('Last name cant be number');
return false;
}

else if((email=='')||(email==null))
{
alert('email cant be empty');
return false;
}
else if(email.lenght>3)
{
alert('Email lenght should be grater than 3');
return false;
}
else if(atPosition<1)
{
alert('@ position is invalid');
return false;
}
else if(dotPosition>email.length-3)
{
alert('. must be properly placed');
return false;
}
else if((dotPosition-atPosition)<3)
{
   alert('maintain proper gap between dot and atrate');
return false;
}
else if(email.search('com')==-1)
{
alert('com not matched');
return false;
}
else if((areacode=="")||(areacode==null))
{
alert('area code cant be empty');
return false;
}
else if(areacode.match(lower))
{
alert('area should not contain alphabet');
return false;
}
else if(areacode.match(upper))
{
alert('area should not contain alphabet');
return false;
}

  /*  else if(areacode.lenght>3)
{
alert('Area code should be graeter than 3');
retun false;
}*/
else if((phone=="")||(phone==null))
{
alert('Mobile No. cant be empty');
return false;
}
else if(phone.match(lower))
{
alert('Mobile No. should not contain alphabet');
return false;
}
else if(phone.match(upper))
{
alert('area should not contain alphabet');
return false;
}

}
