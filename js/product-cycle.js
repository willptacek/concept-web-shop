let productImage = document.querySelector('#product-grid img');
let topsCollection = ['img/products/tops/purple-shirt.gif', 'img/products/tops/green-shirt.gif'];
let topsDescriptions = [`<h1 class="ferrite-light">shirt.01</h1>
<ul id="description-list" class="ferrite-light">
  <li>-baggy</li>
  <li>-cool</li>
  <li>-nice</li>
</ul>`, `<h1 class="ferrite-light">shirt.02</h1>
<ul id="description-list" class="ferrite-light">
  <li>-not skinny</li>
  <li>-yeah!</li>
  <li>-cute</li>
</ul>`];
let bottomsCollection = ['img/products/bottoms/pants.gif'];
let bottomsDescriptions = [`<h1 class="ferrite-light">pants.01</h1>
<ul id="description-list" class="ferrite-light">
  <li>-big boy pants</li>
  <li>-cute af</li>
  <li>-not real</li>
</ul>`];
let extrasCollection = ['img/products/extras/socks.gif', 'img/products/extras/shoes.gif'];
let extrasDescriptions = [`<h1 class="ferrite-light">socks.01</h1>
<ul id="description-list" class="ferrite-light">
  <li>-normal white socks</li>
  <li>-still cute</li>
</ul>`, `<h1 class="ferrite-light">shoes.01</h1>
<ul id="description-list" class="ferrite-light">
  <li>-chunky</li>
  <li>-not like the filas</li>
</ul>`];
let checkoutDescriptions = [];
let checkoutCollection = [];

let topsPos = 0;
let extrasPos = 0;
let checkoutPos = 0;

//all refresh functions handle displaying each categories products when the category is selected
//each function handles the specific coloring, positions, and event listeners needed for each different category

function refreshTops() {
  addToCart.addEventListener('click', addProduct);
  addToCart.innerText = 'add to cart';
  productImage.src = topsCollection[topsPos];
  productDesc.innerHTML = topsDescriptions[topsPos];
  productDesc.style.borderColor = topColor;

  colorArrows(topColor);

  removeAllEventListeners();
  leftArrow.addEventListener('click', prevItemTops);
  rightArrow.addEventListener('click', nextItemTops);

  //todo make this adaptable to more than 2 products as right now this solution only works when there are only 2 products

  determineArrows(topsPos, topsCollection);
}

function refreshBottoms() {
  removeAllEventListeners();
  addToCart.addEventListener('click', addProduct);
  addToCart.innerText = 'add to cart';
  productImage.src = bottomsCollection[0];
  productDesc.innerHTML = bottomsDescriptions[0];
  productDesc.style.borderColor = bottomsColor;
  hideLeftArrow();
  hideRightArrow();
}

function refreshExtras() {
  addToCart.addEventListener('click', addProduct);
  addToCart.innerText = 'add to cart';
  productImage.src = extrasCollection[extrasPos];
  productDesc.innerHTML = extrasDescriptions[extrasPos];
  productDesc.style.borderColor = accessoriesColor;

  colorArrows(accessoriesColor);

  removeAllEventListeners();
  leftArrow.addEventListener('click', prevItemExtras);
  rightArrow.addEventListener('click', nextItemExtras);

  determineArrows(extrasPos, extrasCollection);
}

function refreshCheckout() {
  //checkout collection is equivalent to the cart.  view your cart @ checkout.
  addToCart.innerText = 'checkout';
  addToCart.removeEventListener('click', addProduct);  
  checkoutCollection = cart;
  removeAllEventListeners();
  addToCart.addEventListener('click', checkOut);
  
  leftArrow.addEventListener('click', prevItemCheckout);
  rightArrow.addEventListener('click', nextItemCheckout);

  colorArrows(checkoutColor);
  productDesc.style.borderColor = checkoutColor;

  determineArrows(checkoutPos, checkoutCollection);

  if(cart.length == 0){
    console.log('pog');
    productImage.src = null;
    productDesc.innerHTML = `<h1 class="ferrite-light">n/a</h1>
    <ul id="description-list" class="ferrite-light">
      <li>-click</li>
      <li>-the stuff</li>
      <li>-on the right</li>
    </ul>`;
    hideRightArrow();
    hideLeftArrow();
  } else {
    productImage.src = checkoutCollection[checkoutPos];
    productDesc.innerHTML = checkoutDescriptions[checkoutPos];
  }
}

//allows user to scroll through products by incrementing; handled with separate functions through the categories so users keep their positions in the array when they select a diff category.

function nextItemTops() {
  topsPos += 1;
  determineArrows(topsPos, topsCollection);
  productImage.src = topsCollection[topsPos];
  productDesc.innerHTML = topsDescriptions[topsPos];
}

function prevItemTops() {
  topsPos -= 1;
  determineArrows(topsPos, topsCollection);
  productImage.src = topsCollection[topsPos];
  productDesc.innerHTML = topsDescriptions[topsPos];
}

function nextItemExtras() {
  extrasPos += 1;
  determineArrows(extrasPos, extrasCollection);
  productImage.src = extrasCollection[extrasPos];
  productDesc.innerHTML = extrasDescriptions[extrasPos];
}

function prevItemExtras() {
  extrasPos -= 1;
  determineArrows(extrasPos, extrasCollection);
  productImage.src = extrasCollection[extrasPos];
  productDesc.innerHTML = extrasDescriptions[extrasPos];
}

function nextItemCheckout() {
  checkoutPos += 1;
  determineArrows(checkoutPos, checkoutCollection);
  productImage.src = checkoutCollection[checkoutPos];
  productDesc.innerHTML = checkoutDescriptions[checkoutPos];
}

function prevItemCheckout() {
  checkoutPos -= 1;
  determineArrows(checkoutPos, checkoutCollection);
  productImage.src = checkoutCollection[checkoutPos];
  productDesc.innerHTML = checkoutDescriptions[checkoutPos];
}

//styles for the arrows.

function showLeftArrow() {
  leftArrow.style.opacity = '100';
}

function showRightArrow() {
  rightArrow.style.opacity = '100';
}

function hideLeftArrow() {
  leftArrow.style.opacity = '0';
}

function hideRightArrow() {
  rightArrow.style.opacity = '0';
}

function colorArrows(color) {
  leftArrow.style.backgroundColor = color;
  rightArrow.style.backgroundColor = color;
}

//determines which arrows to hide on the extras/tops categories, depending on the position and length of array

function determineArrows(pos, items) {
  if(items.length == 1) {//only 1 item to show, so no need to scroll between items
    hideLeftArrow();
    hideRightArrow();
  } else if(pos != 0 && pos != items.length - 1) {
    showLeftArrow();
    showRightArrow();
  } else if(pos == 0) {
    showRightArrow();
    hideLeftArrow();
  } else if(pos == items.length-1) {
    showLeftArrow();
    hideRightArrow();  
  }
}

function removeAllEventListeners() {
  leftArrow.removeEventListener('click', prevItemTops);
  rightArrow.removeEventListener('click', nextItemTops)
  leftArrow.removeEventListener('click', prevItemExtras);
  rightArrow.removeEventListener('click', nextItemExtras);
  leftArrow.removeEventListener('click', prevItemCheckout);
  rightArrow.removeEventListener('click', nextItemCheckout);
  addToCart.removeEventListener('click', checkOut);
}