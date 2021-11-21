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
        const couchColor = oneProduct.colors[i]

        const color = document.createElement("option")
        color.setAttribute('value', couchColor)
        color.innerText = couchColor
        colorsContainer.appendChild(color)      
    }
}

//ajout panier
