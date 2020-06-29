checklength1() //testing length of the name
{
    var testr= document.getElementsByTagName('fullname').value;
    var alw=[a-zA-Z\s\]{6-15}$;

    if (alw.test(testr)) { 
    	document.getElementsByTagName("nameprompt").style.color="green";
    	document.getElementsByTagName("nameprompt").innerhtml="<strong>valid</strong>";
    	return true;

    }
     else {
     	document.getElementsByTagName("nameprompt").style.color="red";
     	document.getElementsByTagName('nameprompt').innerhtml="<strong>invalid</strong>";
     	return false;
     }
	
}