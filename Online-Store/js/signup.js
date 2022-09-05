 //validation
 function validateform(){
    let form=document.getElementById("form");
    let usernval=document.getElementById("username").value;
    let emailval=document.getElementById("email").value
    let passval=document.getElementById("password").value;
    let phoneval=document.getElementById("phone").value;


    //General validation
    if (usernval=="" && emailval =="" && passval=="" &&phoneval=="")
    alert ("please fill in all required feilds!")


  //username validation
   else if(usernval=="")
    {alert("please fill in Name");
    document.getElementById("unerror").innerText="name must be filled"}
    
    //checking length condition
    else if(usernval.length<8 ||usernval.length>20)
    {
      alert("Name can't be less than 8 or more than 20 characters!")
    }
   // {document.getElementById("unerror").innerText="please enter sutable number of characters"}



    //email validation
    else if( emailval=="")
    {
      alert("Email is required")
    }
  else if (!emailval.includes(`@`)) {
   alert("Enter right Email like('name@gmail.com'")
  }



  //password validation
   else if (passval.length<8 ||passval=="")
   {
     alert("Please enter password (at least 8 characters)")
    }
  // {document.getElementById("pserror").innerText="please enter at least 8 characters"}


   //phone number validation
  else if(phoneval=="" ||phoneval.length!==11)
  {
    alert("Please enter right Phone Number(at least 11 number)")
  }

  else{
    savedata();
  }
  };


 // set users as array stored in local storage

function savedata(){
    let usernval=document.getElementById("username").value;
    let emailval=document.getElementById("email").value
    let passval=document.getElementById("password").value;
    let phoneval=document.getElementById("phone").value;

//set array in local storage

    let user_records= new Array();

    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

   if (user_records.some((v) => {return v.emailval==emailval}))

    {
      alert("duplicate data");
    }
    else {
    user_records.push(
      {
      "Name":usernval,
      "Email":emailval,
      "Password":passval,
      "Phone":phoneval
    }
    );

    localStorage.setItem("users",JSON.stringify(user_records));
    console.log(user_records[0].Name);
  }
};


/* validation other code:
function checkUserName() {
  const userNameLength = username.value.length;
  //checking length condition
  if (userNameLength < 8 || userNameLength > 20) {
    // alert("MIN lenght is 4 and Max length is 20")
    userSpan.innerText = "Username must be between 8 - 20 characters ";
    return false;
  }
  //checking numbers and characters
  const numbers = "0123456789";
  let hasNumbers = false;

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers.charAt(i);
    console.log(num);
    if (username.value.includes(num)) {
      hasNumbers = true;
      break;
    }
  }

  if (!hasNumbers) {
    userSpan.innerText = "Username must include numbers and characters as well";
    return false;
  }

  userSpan.innerText = "";
  return true;
}

username.addEventListener("blur", checkUserName);

// checking Email
function checkEmail() {
  if (!Email.value.includes(`@`)) {
    alert("Email is required");
    emailSpan.innerText = "Email is not in the right form";
    return false;
  } else {
    emailSpan.innerText = "";

    return true;
  }
}
Email.addEventListener("blur", (e) => checkEmail(e.target.value));

// checking phone number
let regex = /^\d{11}$/;
phone.addEventListener("blur", function () {
  if (phone.value == "") {
    phoneSpan.innerText = "Please enter your phone number";
  } else if (phone.value.match(regex)) {
    phoneSpan2.innerText = "valid";
  } else {
    phoneSpan.innerText =
      "OOPS, unvaild form.Your phone number should be 11 digits";
  }
});*/