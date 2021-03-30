/* checking if the first & and last name is only letters */
function First_And_Last_Name_Validation(inputtxt)
{
 var letters = /^[A-Za-z]+$/;
 /*checking if only alphabet */
 if(!(/^[a-zA-Z]+$/.test(inputtxt)))
   {
        return false;
   }
   /* checking if there is a space */
 else if(!(/^\S{3,}$/.test(inputtxt)))
   {
        return false;
   }
   else
   {
       return true;
   }
}
/*********************************************/
 /*  if (input.length < 5) {
    errMsgHolder.innerHTML =
        'Please enter a name with at least 5 letters';
    return false;

/* when the user press on the button "Sign Up" */
$("#SignUp").click(function()
{
    /* getting the data from the user */
    let form = document.getElementById('sign');
    let first_name = form.elements['firstname'];
    let firstName = first_name.value;

    let last_name = form.elements['lastname'];
    let lastName = last_name.value;

    let user_name = form.elements['username'];
    let userName = user_name.value;

    let email = form.elements['email'];
    let emailAddress = email.value;
    
    /* checking if the data is valid */
    
    if (!(First_And_Last_Name_Validation(firstName)))
    {
        window.alert("Invalid First Name");
    }
  
  else  if (!(First_And_Last_Name_Validation(lastName)))
    {
        window.alert("Invalid Last Name");
    }
    else{
    window.location.href="login.html";}
});


$("#cancel").click(function()
{
    window.location.href="login.html";
});



/* checking the email format */
function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(input.value.trim()) ?
        success(input) :
        error(input, 'Invalid email format');
}
/*********************************************/

