//recuperation ID produit
const idProduct = new URL(location.href).searchParams.get("_id");
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
          alert("Une erreur est survenue! Veuillez contacter l'administrateur du site.");
      })
};

// affichage image, titre, prix, description, couleurs
function displayProduct(oneProduct) {
  const imgContainer = document.querySelector(".item__img")
  const img = document.createElement("img")
  img.setAttribute("src", oneProduct.imageUrl)
  img.setAttribute("alt", oneProduct.altTxt)

  imgContainer.appendChild(img)

  document.getElementById("title").innerHTML = oneProduct.name;
  document.getElementById("price").innerHTML = oneProduct.price;
  document.getElementById("description").innerHTML = oneProduct.description;
  for (i = 0; i < oneProduct.colors.length; i++) {
      document.getElementById("colors").innerHTML += `<option value="${oneProduct.colors[i]}">${oneProduct.colors[i]}</option>`;
  }}

 //ajout panier

