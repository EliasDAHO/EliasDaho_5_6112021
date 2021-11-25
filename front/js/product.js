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
  
  const Name = document.getElementById("title")
  Name.textContent = oneProduct.name
  const Price = document.getElementById("price")
  Price.textContent = oneProduct.price
  const Text = document.getElementById("description")
  Text.textContent = oneProduct.description
  const colorsContainer = document.getElementById("colors") 
  
  for(let i = 0; i < oneProduct.colors.length; i++) {
        const colorsOption = oneProduct.colors[i]

        const color = document.createElement("option")
        color.setAttribute('value', colorsOption)
        color.textContent = colorsOption
        colorsContainer.appendChild(color)      
    }
}

//ajout panier
document.getElementById("addToCart").addEventListener('click', function (event) {
  event.stopPropagation();
  event.preventDefault();

const imageUrl = document.querySelector(".item__img img").getAttribute("src")
const altTxt = document.querySelector(".item__img img").getAttribute("alt");
const title = document.getElementById("title").innerHTML;
const price = document.getElementById("price").innerHTML;
const description = document.getElementById("description").innerHTML;
const quantity = document.getElementById("quantity").value;
const colorsOption = document.getElementById("colors").value;

if (quantity == 0 || colorsOption ==""){
alert("Veuillez choisir une couleur et une quantité ");
}
else{
const productToAdd = {
idProduct: idProduct,
imageProduct : imageUrl,
altTxtProduct : altTxt,
titleProduct : title,
priceProduct :price,
descriptionProduct: description,
quantityProduct : quantity,
colorsProduct: colorsOption,
};

let tableProducts= collectCart();
let checkProduct = false;
//collecte info produit sans doublon
for (let product of tableProducts) {
if (idProduct === product.idProduct && colorsOption === product.colorsProduct) {
  product.quantityProduct = parseInt(product.quantityProduct) + parseInt(quantity);
  checkProduct = true;
}
}
// ajout produit chargé dans le local storage
if (!checkProduct) {
tableProducts.push(productToAdd);
localStorage.setItem("keyProduct", JSON.stringify(tableProducts));
console.table(tableProducts);
alert("Vos articles ont bien été ajouté au panier!");}
//produit non chargé dans le local storage
else{
localStorage.setItem("keyProduct", JSON.stringify(tableProducts));
}
}
}); 
function collectCart(){
//produit du local storage vers le tableau
return (JSON.parse(localStorage.getItem("keyProduct"))||[]);
}