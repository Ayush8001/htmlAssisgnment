<html>
<head>
<title>java script</title>    
<script type="text/javascript">
  function  myfunction(){
      var x,text,special,y;
      text=/^[0-9]$/;
      special=/^[!\&\$\@\#\/\*\%\^\_\-]$/;
	  uppercase=/^[A-Z]&/;
      x=document.getElementById("Name").value;
      y=document.getElementById("password").value;
     
      if(x==""||x==null){
          alert("name cannot be empty")
          return false;
      }
   
   if(x.match(text))   {
       alert("invalid ,name cant be number")
       return false;
   }
      if(x.match(special)){
          alert("invalid,name cant contain special character")
          return false;
      }
	  if(x.match(uppercase)){
	  alert("invalid,name can't contain only uppercase letter")
	  return false;
	  }
	  
	  if(x.match(lowercase)){
	  alert("invalid,name can't contain only lowercase letter")
	  return false;
	  }
		
	  
      if(x.length<8){
          alert("name should be more then 8 character")
		  return false;
      }
     
	 
      if(y.length<6){
          alert("password should be more then 6 character")
		  return false;
      }
     
    }
   
   
    </script>
   
   
    </head>
<body>
<form name="myForm" action="/action_page.php" onsubmit="return myfunction()" method="post">

    <h2>Name:<input type="text" id="name"></h2><br>
    <h2>Password:<input type="password" id="password"></h2><br>
 <button type="button" >Submitt</button>  
   
   
    </form>    
   
   
   
   
    </body>
