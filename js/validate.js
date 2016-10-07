function checkEmail(e) {
	// body...
	var element=e.target;
	if(!/[@]/.test(element.value)){
		alert("Invalid Email! @ missing");
		element.value="";
		return false;
	}
	if (!/[^@_a-zA-Z0-9]/.test(element.value)) {
		alert("Invalid Email!");
		element.value="";
		return false;
	}
	if(!/[.]/.test(element.value)){
		alert(". Missing");
		element.value="";
		return false;
	}
}
function checkAddress(e) {
	var element=e.target;
	if(element.value.length<50){
		alert("Address Too Short");
		element.value="";
		return false;
	}
	return true;
}

function checkName(e) {
	// body...
	var element=e.target;
	if(/[^a-zA-Z ]/.test(element.value)){
		alert("Name Is Invalid! Only Characters from a-z or A-Z are allowed");
		return false;
	}
	return true;
}

function checkRollNo(e) {
	// body...
	var element=e.target;
	if(/[^a-zA-Z0-9]/.test(element.value)){
		alert("Roll No Is Invalid! use a-z/A-z & 0-9");
		return false;
	}
	if(!/[a-zA-Z]/.test(element.value)){			//it check u have used character or not
		alert("Roll No Is Invalid! No Characters Used");
		return false;	
	}
	if(!/[0-9]/.test(element.value)){			//it check u have used character or not
		alert("Roll No Is Invalid! No Number Used");
		element.value=""
		return false;	
	}

	if (element.value.length>8 || element.value.length<6) {
		alert("Roll No Is Invalid! Too Long");
		return false;	
	}
	return true;
}

var rollno=document.getElementById('rollno');
var sname=document.getElementById('sname');
var address=document.getElementById('address');
var email=document.getElementById('email');


rollno.addEventListener('blur',checkRollNo,false);
sname.addEventListener('blur',checkName,false);
address.addEventListener('blur',checkAddress,false);
email.addEventListener('blur',checkEmail,false);

