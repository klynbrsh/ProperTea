function checkForm()
{
	var firstn = document.getElementById('firstn').value;
	var lastn = document.getElementById('lastn').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var confirm_password = document.getElementById('conpass').value;
    var terms_ok = document.getElementById('Terms').checked;
    var black = document.getElementById('Black').checked;
    var white = document.getElementById('White').checked;
    var oolong = document.getElementById('Oolong').checked;
    var green = document.getElementById('Green').checked;
    var dark = document.getElementById('Dark').checked;
    var unsure = document.getElementById('Unsure').checked;
    

	var form_ok = true;
	
	var fname_ok = true;

    var lname_ok = true;

    var pass_ok = false; 
	
    var email_ok = true;

	if (email == "")
	{
        email_ok = false;
	}
	else
	{
		var atpos = email.indexOf('@');
		var dotpos = email.indexOf('.');
		
		if (atpos < 1)
		{
            email_ok = false;
            alert ("Please provide a valid email address.");
		}
		else
		{
			if (email.length-dotpos < 1)
			{
                email_ok = false;
                alert ("Please provide a valid email address.")
			}
			else
			{
				if (dotpos-atpos < 2)
				{
                    email_ok = false;
                    alert ("Please provide a valid email address.")
				}
			}
		}
    }
    
        if (password == "")
            {
                alert("Please provide a password.");
                pass_ok = false;
            }
        else {
            if (confirm_password == "")
            {
                alert("Please confirm your password.");
                pass_ok = false;
            }
            else{
    
                if(String(password) != String(confirm_password)) 
                {
                    alert ("Passwords Don't Match");
                    pass_ok = false;
                } else {
                    pass_ok = true;
                }
            }
            
        }

    if(black == true) 
    {
        tea_ok = true;
    }
    else if (green == true)
    {
        tea_ok = true;
    }
    else if (white == true)
    {
        tea_ok = true;
    }
    else if (oolong == true)
    {
        tea_ok = true;
    }
    else if (dark == true)
    {
        tea_ok = true;
    }else if (unsure == true)
    {
        tea_ok = true;
    }
    else {
        tea_ok = false
    }        

    form_ok = (lname_ok && email_ok && pass_ok && fname_ok && terms_ok && tea_ok);
    if (!form_ok)
	{
		
        if(!tea_ok)
		{
			alert("Please choose a favorite tea.");
        }
         else
		{
            if (!terms_ok)
            {
                alert("Please agree to our terms and services.");
            }
        }
    }

    return form_ok;
    if (confo.style.display === "none") {
        confo.style.display = "block";
      } else {
        confo.style.display = "none";
      }
}


    
   
