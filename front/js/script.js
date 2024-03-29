//annonce données produits
const apiUrl = "http://localhost:3000/api/products/";
const product = [];

// API  
fetch(apiUrl)
.then((res) => res.json())
.then((product) => {
   displayProducts(product);
});

// affichage des produits
   function displayProducts(products) {
      let html = '';
      products.forEach(element => {
         html += '<a href="./product.html?_id=' + element._id + '"><article><img src="' +
            element.imageUrl + '" alt="' + element.altTxt +
            '"><h3 class="productName">' + element.name + '</h3><p class="productDescription">' +
            element.description + '.</p></article></a>';
      });
      document.getElementById("items").innerHTML = html;
   }