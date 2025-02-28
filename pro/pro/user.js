var count= 2;
function validate()
{ var un = document.login.username.value;
	var pw = document.login.password.value;
	var valid = false;
var usernameArray = ["savi","8513001304","6297079117", "dunce","Shalder","Sourabhalder"




];
var passwordArray = ["savi99","12345","12345", "54321","dunce123","Shalder"




];
	for (var i = 0; i < usernameArray.length; i++)
 { if ((un == usernameArray[i]) && (pw == passwordArray[i]))
	{ valid = true;
		break; }  } if (valid)
	{ alert("Login was successful");
		window.location = "profile.html";
		return false; }
	var again = " tries";
	if (count ==1)
	{again = " try"}
	if (count >= 1)
	{alert("Wrong password or username")
count--; } else {
		alert("Incorrect user you blocked");
		document.login.username.value = "You Blocked";
		document.login.password.value = "Fool can't see this";
		document.login.username.disabled = true;
		document.login.password.disabled = true;
		return false; } }