function validation(){
var n=document.forms["myform"]["name"].value;
var price=document.forms["myform"]["price"].value;
var pattern=/^[a-zA-Z]+$/;
var number=/^[0=9]+$/;


if(n==""||n==null){
alert("Name cannot be empty");
return false;
}
if(n.length<2 ||n.lenth>65){
alert("Name should be between 2 to 65 character");
  return false;
     }
if(name.match(number)){
alert("name cannnot have any number");
return false;
}
if(!price.match(number)){

alert ("Price can only have number");
return false;
}
}