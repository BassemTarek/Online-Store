function login(){

    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    localStorage.setItem("islogged","false");

    var entry =JSON.parse(localStorage.getItem("users")); 

    for (let i=0; i<entry.length;i++)
    if (username==entry[i].Name&& password==entry[i].Password)
  {
   // loggedin.push["logged in"]
   
   localStorage.setItem('islogged',"true");
        alert("right login, You Can Show Your Card")
        window.open("../Html/main.html","_blank")

}

  
  else if (username!==entry[i].Name|| password!==entry[i].Password)
  {
    //localStorage.setItem("islogged","false");
      alert("Error,please Enter right User Name and Pasword")
        break;
    }
};