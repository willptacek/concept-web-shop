// query selectors for the right-side-selectors
let topsSelector = document.querySelector('#tops-selector p');
let bottomsSelector = document.querySelector('#bottoms-selector p');
let accessoriesSelector = document.querySelector('#accessories-selector p');
let checkoutSelector = document.querySelector('#checkout-selector p');
let statsCircle = document.querySelector('#stats-circle')
let rightSelectors = document.querySelector('#right-selectors');

//sound variables
const rightSelectorClick = new Audio('sounds/right-selector-click.wav');
const addToCartSound = new Audio('sounds/click-out-picture.mp3');
const loadSound = new Audio('sounds/load-sound.wav')

const clickTops = rightSelectorClick.cloneNode();
const clickBottoms = rightSelectorClick.cloneNode();
const clickExtras = rightSelectorClick.cloneNode();
const clickCheckout = rightSelectorClick.cloneNode();

//color variables
const topColor = '#f7ba2b';
const bottomsColor = '#ba91d1';
const accessoriesColor = '#a3da58';
const checkoutColor = '#4c4b88';

// left circle querys
let homeText = document.querySelector('#home-text');
let productZone = document.querySelector('#product-zone');
//product zone querys for changing colors
let mainCategoryText = document.querySelector('#main-category-text');
let productDesc = document.querySelector('#product-desc');
let productGrid = document.querySelector('#product-grid');
let addToCart = document.querySelector('#add-to-cart-flex p');
let mainCircle = document.querySelector('#main-circle-top');
let rotateCircle = document.querySelector('#main-circle');
let rightArrow = document.querySelector('#arrow-right');
let leftArrow = document.querySelector('#arrow-left');



addToCart.style.borderRadius = '5px';

homeText.style.display = 'block';

//loads in the right selectors and the stats circle, and plays a sound for ambiance/aesthetic.

function loadInRightSide() {
  loadSound.play();
  statsCircle.style.opacity = '100';
  rightSelectors.style.opacity = '100';
}

loadInRightSide();

// console.log(homeText.style.display);

topsSelector.addEventListener("click", toTops);
bottomsSelector.addEventListener("click", toBottoms);
accessoriesSelector.addEventListener("click", toExtras);
checkoutSelector.addEventListener("click", toCheckout);

//functions to change css to respective categories

function removeBlinking() {
  topsSelector.classList.remove('blinkingTops');
  bottomsSelector.classList.remove('blinkingBottoms');
  accessoriesSelector.classList.remove('blinkingAccessories');
  checkoutSelector.classList.remove('blinkingCheckout');
}

function toTops(){
  if(homeText.style.display == 'block') {
    homeText.style.display = 'none';
    productZone.style.display = 'block';
  }
  clickTops.play();
  cycleMenu(topsLayer);
  removeBlinking();
  statsTop();
  refreshTops();

  topsSelector.classList.add('blinkingTops');
  document.querySelector('#main-category-text').innerText = 'tops';
  
  mainCategoryText.style.color = topColor;
  mainCircle.style.borderColor = topColor;
  productGrid.classList = 'top-grid';
  rotateCircle.classList = ('rotating border-tops');
  addToCart.style.backgroundColor = topColor;
}

function toBottoms(){
  if(homeText.style.display == 'block') {
    homeText.style.display = 'none';
    productZone.style.display = 'block';
  }
  clickBottoms.play();
  cycleMenu(bottomsLayer);
  removeBlinking();
  statsBottom();
  refreshBottoms();

  bottomsSelector.classList.add('blinkingBottoms');
  document.querySelector('#main-category-text').innerText = 'bottoms';

  mainCategoryText.style.color = bottomsColor;
  mainCircle.style.borderColor = bottomsColor;
  productGrid.style.color = bottomsColor;
  productGrid.classList = 'bottoms-grid';
  rotateCircle.classList = ('rotating border-bottoms');
  addToCart.style.backgroundColor = bottomsColor;
}

function toExtras(){
  if(homeText.style.display == 'block') {
    homeText.style.display = 'none';
    productZone.style.display = 'block';
  }
  clickExtras.play();
  cycleMenu(extrasLayer);
  removeBlinking();
  statsExtras();
  refreshExtras();

  accessoriesSelector.classList.add('blinkingAccessories');
  document.querySelector('#main-category-text').innerText = 'extras';

  mainCategoryText.style.color = accessoriesColor;
  mainCircle.style.borderColor = accessoriesColor;
  productGrid.style.color = accessoriesColor;
  productGrid.classList = 'accessories-grid';
  rotateCircle.classList = ('rotating border-accessories');
  addToCart.style.backgroundColor = accessoriesColor;
}

function toCheckout(){
  if(homeText.style.display == 'block') {
    homeText.style.display = 'none';
    productZone.style.display = 'block';
  }
  clickCheckout.play();
  cycleMenu(checkoutLayer);
  removeBlinking();
  statsCheckout();
  refreshCheckout();

  checkoutSelector.classList.add('blinkingCheckout');
  document.querySelector('#main-category-text').innerText = 'checkout';

  mainCategoryText.style.color = checkoutColor;
  mainCircle.style.borderColor = checkoutColor;
  rotateCircle.classList = ('rotating border-checkout');
  productGrid.classList = 'checkout-grid';
  addToCart.style.backgroundColor = checkoutColor;
}
