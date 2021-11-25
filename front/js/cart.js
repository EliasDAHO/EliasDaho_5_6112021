//collecte des produits du panier vers le local storage
const tableProductsCart = JSON.parse(localStorage.getItem("keyProduct"));
console.table(tableProductsCart)
let productTotal=0;
for (let elementCart of tableProductsCart){

//affichage panier
document.querySelector('#cart__items').innerHTML+= 
`<article class="cart__item" data-id="${elementCart.idProduct}">
<div class="cart__item__img">
  <img src="${elementCart.imageProduct}" alt="${elementCart.altTxtProduct}">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__titlePrice">
    <h2>${elementCart.titleProduct}</h2>
    <p>${elementCart.colorsProduct} </p>
    <p>${elementCart.priceProduct} €</p>
 </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Qté : </p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${elementCart.quantityProduct}">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
    </div>
  </div>
</div>
</article>`;
productTotal+= parseInt(elementCart.quantityProduct);
}
//modification quantité
let quantityContainer = [...document.getElementsByClassName('itemQuantity')]
quantityContainer.forEach((item, index) => {
  item.addEventListener('click', () => {
    tableProductsCart[index].quantityProduct = quantityContainer[index].value
    localStorage.setItem('keyProduct', JSON.stringify(tableProductsCart))
    alert("Vous avez bien ajouter/supprimer quantité de votre article")
    window.location.reload()
  })
   }) 

//affichage du nombre total de produit
document.querySelector('#totalQuantity').innerHTML = productTotal;
// affichage du prix total du panier
const displayTotalPrice = () => {
   if (tableProductsCart) {
    const tableProductsCart = JSON.parse(localStorage.getItem("keyProduct"));
    const totalPrice = tableProductsCart.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue.quantityProduct * currentValue.priceProduct),
        0
      );
      document.querySelector("#totalPrice").innerHTML = totalPrice;
    }
};
displayTotalPrice();

// suppression produit du panier et rechargement API
let deleteProduct = [...document.getElementsByClassName('deleteItem')]

deleteProduct.forEach((element, index) => {
element.addEventListener('click', () => {
let deleteProductOfCart = deleteProduct[index].closest('.cart__item')
    deleteProductOfCart.remove()
    tableProductsCart.splice(index, 1)
    alert("Votre article est bien supprimé.")
localStorage.setItem('keyProduct', JSON.stringify(tableProductsCart))
 window.location.reload()
 })
})


 // --- RegEX Formulaire 
 let form = document.querySelector(".cart__order__form");
 // Prénom
form.firstName.addEventListener("input", function () {
 checkFirstName(this);
});                
const checkFirstName = function (inputFirstName) {
 let nameRegExp = new RegExp("^[a-zA-Z-\s].{2,25}$");
 let testFirstName = nameRegExp.test(inputFirstName.value);
 if (testFirstName) {
   inputFirstName.nextElementSibling.innerHTML = "";
   return true;
 } else {
   inputFirstName.nextElementSibling.innerHTML = "Votre prénom doit comporter les lettres de 'a' à 'z' minimum 2 caractères et un maximum de 25 caractères!!!";
   return false;
 }
};
 //Nom
form.lastName.addEventListener("input", function () {
 checkLastName(this);
});
 const checkLastName = function (inputLastName) {
 let nameRegExp = new RegExp("^[a-zA-Z-\s].{2,25}$");
 let testLastName = nameRegExp.test(inputLastName.value);
 if (testLastName) {
   inputLastName.nextElementSibling.innerHTML = "";
   return true;
 } else {
   inputLastName.nextElementSibling.innerHTML = "Votre nom doit comporter les lettres de 'a' à 'z' minimum 2 caractères et un maximum de 25 caractères!!!";
   return false;
 }
};
//Adresse
form.address.addEventListener("input", function () {
 checkAddress(this);
});
const checkAddress = function (inputAdress) {
 let addressRegExp = new RegExp("^[0-9]{1,4}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+$");
 let testAdress = addressRegExp.test(inputAdress.value);
 if (testAdress) {
   inputAdress.nextElementSibling.innerHTML = "";
   return true;
 } else {
   inputAdress.nextElementSibling.innerHTML = "Saisissez votre adresse correctement";
   return false;
 }
};
//Ville
form.city.addEventListener("input", function () {
 checkCity(this);
});
const checkCity = function (inputCity) {
 let cityRegExp = new RegExp("^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$");
 let testCity = cityRegExp.test(inputCity.value);
 if (testCity) {
   inputCity.nextElementSibling.innerHTML = "";
   return true;
 } else {
   inputCity.nextElementSibling.innerHTML = "Saisissez votre ville";
   return false;
 }
};
//email
form.email.addEventListener("input", function () {
 checkEmail(this);
});
 const checkEmail = function (inputEmail) {
 let emailRegExp = new RegExp(
   "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$");
 let testEmail = emailRegExp.test(inputEmail.value);

 if (testEmail) {
   inputEmail.nextElementSibling.innerHTML = "";
   return true;
 } else {
   inputEmail.nextElementSibling.innerHTML =
     "Saisissez votre adresse Email correctement xxxxxxxx@xxxxx.xx";
   return false;
 }
};




