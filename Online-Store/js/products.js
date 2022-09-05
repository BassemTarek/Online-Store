// array of objects to add products card dynamic into Main home
let productsData = [
    {
      id: 1,
      title: "Samsung Galaxy M12 Dual SIM",
      imgURL: "/images/M2.png",
      price: "2608 L.E",
      details: "../Html/product1.html",
    },
    {
      id: 2,
      title: " Samsung Galaxy A03s Dual SIM",
      imgURL: "/images/h2.png",
      price: "2540 L.E",
      details: "../Html/product2.html",
    },
    {
      id: 3,
      title: "Samsung Galaxy A52s Dual SIM Black",
      imgURL: "/images/h3.png",
      price: "7070 L.E",
      details: "../Html/product3.html",
    },
    {
      id: 4,
      title: "Samsung Galaxy A52s Dual SIM Mobile White",
      imgURL: "/images/h7.png",
      price: "7010 L.E",
      details: "../Html/product4.html",
    },
    {
      id: 5,
      title: "Xoami Redmi 10 Dual SIM Mobile",
      imgURL: "/images/h5.png",
      price: "3099 L.E",
      details: "../Html/product5.html",
    },
    {
      id: 6,
      title: "Xoami Redmi 10 Dual SIM Mobile Green",
      imgURL: "/images/h6.png",
      price: "3500 L.E",
      details: "../Html/product6.html",
    },
  ];
  
  localStorage.setItem("products", JSON.stringify(productsData));
  