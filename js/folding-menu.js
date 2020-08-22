let topsLayer = document.querySelector('#tops-layer');
let bottomsLayer = document.querySelector('#bottoms-layer');
let extrasLayer = document.querySelector('#extras-layer');
let checkoutLayer = document.querySelector('#checkout-layer');
let checkoutText = document.querySelector('#right-text-layers p');

let positions = [topsLayer, bottomsLayer, extrasLayer, checkoutLayer];

function cycleMenu (selectedCategory) {
  //selectedCategory will be the one passed in, and is the one to go to the top.
  //TODO: FIX THIS terrible code but it works right now and i'm taking algorithms next semester so i can probably make it better then. 
  //honestly, i have no idea why this works
  let oldTop = positions[0];
  if(selectedCategory == positions[3]) {
    //simply just swap them 
    positions[3] = positions[0];
    positions[0] = selectedCategory;
  } else if(selectedCategory == positions[1]) {
    positions[0] = selectedCategory;
    positions[1] = positions[2];
    positions[2] = positions[3];
    positions[3] = oldTop;
  } else if(selectedCategory == positions[2]) {
    positions[0] = selectedCategory;
    positions[2] = positions[1];
    positions[2] = positions[3];
    positions[3] = oldTop;
  }
  positions[0] = selectedCategory;

  // todo: make these just classes
  positions[0].style.zIndex = '5';
  positions[0].style.left = '72%';
  positions[0].style.top = '40%';

  positions[1].style.zIndex = '4';
  positions[1].style.left = '73%';
  positions[1].style.top = '41%';

  positions[2].style.zIndex = '3';
  positions[2].style.left = '74%';
  positions[2].style.top = '42%';

  positions[3].style.zIndex = '2';
  positions[3].style.left = '75%';
  positions[3].style.top = '43%';

  if(positions[0] == checkoutLayer) {
    checkoutText.style.color = 'white';
  } else {
    checkoutText.style.color = 'black';
  }
}