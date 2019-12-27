function nameValidation()
{
var firstvalue=document.getElementById("id1").value;
var namePattern="^[a-zA-Z]+$";
if(!firstvalue.match(namePattern))
	document.getElementById("errorName").innerHTML="Name should be in alphabets";
else
	document.getElementById("errorName").innerHTML="";
}
function nameValidation1()
{
var lastvalue=document.getElementById("id2").value;
var namePattern="^[A-Za-z]+$";
if(!lastvalue.match(namePattern))
 document.getElementById("errorName1").innerHTML="Name should be in alphabets";
else
 document.getElementById("errorName1").innerHTML="";
}
function radioValidate()
{
var elements=document.getElementsByName("Gender");
var count=0;
for(var i=0;i<elements.length;i++)
{
if(elements[i].checked){
count++;}
}
if(count==0)
{
document.getElementById("errorGender").innerHTML="Please select the gender!!";
return false;
}
else
{
document.getElementById("errorGender").innerHTML="";
return true;
}
}
function dropdownValidate()
{
var elements=document.getElementsByClassName("Places Visited");
var count=0;
for(var i=0;i<elements.length;i++)
{
if(elements[i].selected){
count++;}
}
if(count==0)
{
document.getElementById("errorcheck").innerHTML="Please select the places visited!!";
return false;
}
else
{
document.getElementById("errorcheck").innerHTML="";
return true;
}
}
function submitForm()
{
var a=nameValidation();
var b=nameValidation1();
var x=dropdownValidate();
var y =radioValidate();
if(a&&b&&x&&y)
return true;
else
return false;
}