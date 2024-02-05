 function getProductDetails(){

   const urlProduct= new URLSearchParams(window.location.search);
   
   
   const id= urlProduct.get('pro-id');
  
   const product= axios.get(`https://dummyjson.com/products/${id}`).then((response)=>{
     const {title,description,price,brand,thumbnail}=response.data;
     document.querySelector(".title").textContent=title;
     document.querySelector(".description").textContent=description;
     document.querySelector(".price").textContent=`the price is : ${price}$` ;
     document.querySelector(".model").textContent=`the brand is : ${brand}`;
     document.querySelector("img").src=thumbnail;
     
    
  
      
    });
  
    



}
getProductDetails();

