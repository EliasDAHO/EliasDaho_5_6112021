//recuperation ID produit
var idProduct = new URL(location.href).searchParams.get("_id");
const urlProduct = "http://localhost:3000/api/products/" + idProduct;

// chargement du contenu JSON depuis les données de l'API
loadProduct(urlProduct);
function loadProduct(urlProduct) {
    fetch(urlProduct)
        .then((response) => response.json())
        .then((product) => {
            displayProduct(product);
        })
        .catch((error) => {
          console.log( error);
      })
};


