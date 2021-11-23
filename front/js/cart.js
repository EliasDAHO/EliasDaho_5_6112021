//collecte des produits du panier vers le local storage
const tableProductsCart = JSON.parse(localStorage.getItem("keyProduct"));
console.table(tableProductsCart)

let productTotal=0;

for (let elementCart of tableProductsCart){
//affichage panier
document.querySelector('#cart__items').innerHTML+= `<article class="cart__item" data-id="${elementCart.idProduct}">
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


 