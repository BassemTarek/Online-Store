function call() {


    let getProducts = localStorage.getItem("products");
    let productData = JSON.parse(getProducts);

    console.log(productData);
    
    let cardArray = localStorage.getItem("Cart"); 
    //let cardtData = JSON.parse(cardArray);
    let cardtData=[];
    console.log(cardtData);


    let checkislogged=localStorage.getItem("islogged");
    console.log(checkislogged)

    
    
    let btnid=document.getElementsByClassName("add")[0].id;

    console.log(btnid);
    
    for (let i=0;i<productData.length;i++)
    {
    if (btnid==productData[i].id)
    {  
        cardtData.push(productData[i]);
        localStorage.setItem("cartproducts", JSON.stringify(cardtData));
        console.log(cardtData);
    }

    if(checkislogged=="false")
       {
           alert("please log in to show your cart")
        
        window.open("../Html/login.html","_blank")
    
         }
         
        else if(checkislogged=="true") {
            window.open("../Html/Card.html","_blank")
        }
    }
};