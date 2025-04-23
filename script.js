import {itens, findItem} from "./produtos.js"

const productsContent = document.getElementById("products-content")
const cartItensContent = document.getElementById("cart-items")
const cartTotalValue = document.getElementById("cart-total-value")

let myCart         = document.getElementById('my-cart'); 
let myCartBtn      = document.getElementById('my-cart-btn');
let hideMyCartBtn  = document.getElementById('hide-my-cart-btn');

// abre o carrinho
myCartBtn.addEventListener("click", () => {
  myCart.classList.add('my-cart-show');
  myCart.classList.remove('my-cart-hide');
  document.body.style.overflowY = "hidden";
});

//fecha o carrinho
hideMyCartBtn.addEventListener("click", () => {
  myCart.classList.add('my-cart-hide');
  myCart.classList.remove('my-cart-show');
  document.body.style.overflowY = "auto";
});

//carregamento inicial da pagina
window.onload = ()=>{
  createProducts()
  updateCartItens()

  document.querySelectorAll('button[itemId]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      addToCart(e.target.getAttribute('itemId'))
    });
  });
}

//finaliza compra
document.getElementById("buy-btn").addEventListener("click", (e) => {
  e.preventDefault()
  
  if(cartTotalValue.innerHTML != "0.00")
    alert("Compra finalizada com sucesso")
  else
    alert("A compra não pode ser finalizada")

    setCartStorage([])
    updateCartItens()
})

//adiciona os itens ao carrinho
function addToCart(id){
  let cartStorage = getCartStorage();
  
  let productOnCart = cartStorage.find(aux => aux.id == id);
  if (productOnCart) {
    productOnCart.quantity = productOnCart.quantity+1;
  }else {
    productOnCart = { id: id, quantity: 1 }
    cartStorage.push(productOnCart)
  }
  setCartStorage(cartStorage)
  updateCartItens()
}

//remove os itens do carrinho
function removeFromCart(id){
  let cartStorage = getCartStorage();

  let productOnCart = cartStorage.find(aux => aux.id == id);
  if (productOnCart && productOnCart.quantity > 1) {
    productOnCart.quantity = productOnCart.quantity-1;
  } else if (productOnCart && productOnCart.quantity == 1){
    cartStorage = cartStorage.filter(aux => aux.id != id)
  }
  setCartStorage(cartStorage)
  updateCartItens()
}

//atualiza o carrinho
function updateCartItens(){
  cartItensContent.innerHTML = ""
  let totalvalue = 0
  for(let aux of getCartStorage()){
    cartItensContent.appendChild(createCartItem(aux))
    totalvalue = totalvalue + (findItem(aux.id).price * aux.quantity)
  }
  cartTotalValue.innerHTML = totalvalue.toFixed(2)

  document.querySelectorAll('a[itemId]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      removeFromCart(e.target.getAttribute('itemId'))
    });
  });

}

//insere todos os produtos na pagina 
function createProducts(){
  for(let aux of itens){
    productsContent.appendChild(createCardItem(aux))
  }
}

//cria o html dos itens do carrinho
function createCartItem(productOnCart){
  let product = findItem(productOnCart.id)
  return document.createRange().createContextualFragment(`
    <span class="cart-item"">
      <div class="separator">
        <div class="item-quantity">${productOnCart.quantity}x</div>
        <div class="item-description">${product.name}</div>
      </div>
      <div class="item-price">${(product.price * productOnCart.quantity).toFixed(2)}<a href="#" itemId="${product.id}" class="remove-item-btn">X</a></div>
    </span>
  `)
}

//cria o html dos itens da loja 
function createCardItem(product){
  return document.createRange().createContextualFragment( `
    <div class="card card-${randomInt(1,3)}">
      <div>
        <img src="${product.imagePath}" alt="cat" width="250px">
        <div class="card-informations">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <br>
          <div class="price">
            <p>R$ <span>${product.price}</span></p>
            <br>
            <button itemId="${product.id}">+</button>
          </div>
        </div>
      </div>
    </div>
  `);
}

//gera numero aleatorio entre parametros
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//coleta dados do localStorage
function getCartStorage(){
  return JSON.parse(localStorage.getItem('voidCart')) ? JSON.parse(localStorage.getItem('voidCart')) : []
}

//salva dados no localStorage
function setCartStorage(cartItems){
  localStorage.setItem("voidCart", JSON.stringify(cartItems))
}