  /*let Cardarr=[];
            localStorage.setItem("Cart", JSON.stringify(Cardarr));*/
           
  //Show my cart         
            function buildcartdata(){

              var entry =JSON.parse(localStorage.getItem("cartproducts"));
              console.log(entry);
                let table=document.getElementById("cart");
                cell="";

                for (let i=0;i<entry.length;i++)
                {
                  cell += "<tr>";
                  cell += "<td>" + entry[i].id+ "</td>";//displaysname
                  cell += "<td>" + entry[i].title+ "</td>";//displaysclub
                  cell += "<td>" + entry[i].price+ "</td>";//displayscategory
                  cell += "<td>" + "<select></select>"+ "</td>";
                  cell += "<td>" + "<button>Delete</button>"+ "</td></tr>"
                  document.getElementById("mytable").innerHTML=cell
                  

              
               }};
             

  //   Back to main
  function back(){
    window.open("main.html","self");
  }     
  
  //check out
   function checkout(){
     window.open("Checkout.html","self")
  }
  /*let checkk=document.getElementById("check");
  checkk.addEventListener("click", function(){
    window.open("Checkout.html","self")
  });*/
  //final
  function checkedout(){
    alert("Thank you, your procces completly confirmed");
    window.open("main.html","_blank");
  };
 /* document.getElementById("log").addEventListener("submit",function(){
    alert("Thank you, your procces completly confirmed")
  });*/