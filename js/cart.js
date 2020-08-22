let cart = [];
let selectorCartText = document.querySelector('#selector-cart-text');
let layersCartText = document.querySelector('#right-text-layers .cart-num');

console.log(layersCartText);

console.log(selectorCartText);

function addProduct() {
  if(cart.includes(productImage.src)) {
    //todo make alert message customized
    alert('item already in cart; limit 1 per customer');
  } else {
    cart.push(productImage.src);
    checkoutDescriptions.push(productDesc.innerHTML);
    addToCartSound.play();
  }
  console.log(cart);
  updateCartText();
}

function checkOut() {
  alert('???????????');
}

function updateCartText() {
  selectorCartText.innerText = 'in cart: ' + cart.length + ' items';
  layersCartText.innerText = cart.length;
}