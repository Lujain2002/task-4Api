function getProducts(){
    const product=  axios.get('https://dummyjson.com/products').then((response)=>{
        const getProduct= response.data.products.map(function(ele){
            return `
               <div>
                 <img src="${ele.thumbnail}"/>
                 <h2>${ele.title}</h2>
                 <p>${ele.description}</p>
                 <a href="show-details.html?pro-id=${ele.id}">Show more details</a>

            
               </div>

        
            `

        }).join('');
    
        document.querySelector(".row").innerHTML=getProduct;

    });

    
   
}
getProducts();