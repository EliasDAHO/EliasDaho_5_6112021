//recuperation ID produit
var idProduct = new URL(location.href).searchParams.get("_id");
const urlProduct = "http://localhost:3000/api/products/" + idProduct;

// chargement du contenu JSON depuis les données de l'API
loadProduct(urlProduct);
function loadProduct(urlProduct) {
    fetch(urlProduct)
        .then((res) => {
          return res.json();
        })
        .then((product) => {
            displayProduct(product);
        })
        .catch((error) => {
          console.log( error);
      })
};

// affichage image, titre, prix, description, couleurs
function displayProduct(oneProduct) {
  //affichage image
  document.querySelector('.item__img').innerHTML = `<img src="${oneProduct.imageUrl}" alt="${oneProduct.altTxt}">`;
  //affichage titre
  document.getElementById("title").innerHTML = oneProduct.name;
  //affichage prix
  document.getElementById("price").innerHTML = oneProduct.price;
  //affichage description
  document.getElementById("description").innerHTML = oneProduct.description;
  //affichage couleurs option
  for (i = 0; i < oneProduct.colors.length; i++) {
      document.getElementById("colors").innerHTML += `<option value="${oneProduct.colors[i]}">${oneProduct.colors[i]}</option>`;
  }}


