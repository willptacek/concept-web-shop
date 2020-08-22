let line1 = document.querySelector('#line1');
let line2 = document.querySelector('#line2');
let line3 = document.querySelector('#line3');
let line4 = document.querySelector('#line4');
let line5 = document.querySelector('#line5');
let pointerCircle = document.querySelector('.pointer-circle');
let outsideCircle = document.querySelector('.outside-circle');

// **VALUES FOR EVERY STATE**
//keeping these just in case... took me like 2 hours
// 1::: HOME STATE
// #line1 {
//   top: -69%;
//   left: 5%;
//   transform: rotate(15deg);
// }

// #line2 {
//   top: -70%;
//   left: 45%;
//   transform: rotate(-15deg);
// }

// #line3 {
//   width: 80px;
//   top: -90%;
//   left: 27.5%;
//   transform: rotate(90deg);
// }

// #line4 {
//   transform: rotate(60deg);
//   top: -48%;
//   left: 40%;
// }

// #line5 {
//   transform: rotate(-60deg);
//   top: -48%;
//   left: 10%;
// }

// .outside-circle {
//   height: 181px;
//   width:  181px;
//   background-color: var(--bg-dark-color);
//   border-radius: 50%;
//   border: 3px solid var(--accessories-color);
// } didnt get pointer circle for this but can figure it out

//TOPS VALUES
// .pointer-circle {
//   z-index: 10;
//   position: relative;
//   top: -30%;
//   left: 30%;
//   height: 28px;
//   width: 28px;
//   background-color: var(--accessories-color);
//   border-radius: 50%;
//   border: 6px solid #486d5b;
// }

// #line1 {
//   top: -57%;
//   left: -4.4%;
//   transform: rotate(50deg);
// }

// #line2 {
//   width: 110px;
//   top: -62%;
//   left: 38%;
//   transform: rotate(-30deg);
// }

// #line3 {
//   width: 120px;
//   top: -80%;
//   left: 10.5%;
//   transform: rotate(100deg);
// }

// #line4 {
//   transform: rotate(25deg);
//   top: -36%;
//   left: 29%;
// }

// #line5 {
//   width: 40px;
//   transform: rotate(-55deg);
//   top: -37%;
//   left: 17%;
// }

//BOTTOMS POS
// #line1 {
//   width: 40px;
//   top: -72.5%;
//   left: 5%;
//   transform: rotate(15deg);
// }

// #line2 {
//   width: 110px;
//   top: -74.5%;
//   left: 33%;
//   transform: rotate(-5deg);
// }

// #line3 {
//   width: 90px;
//   top: -91%;
//   left: 13%;
//   transform: rotate(120deg);
// }

// #line4 {
//   width: 115px;
//   transform: rotate(45deg);
//   top: -48%;
//   left: 22%;
// }

// #line5 {
//   width: 90px;
//   transform: rotate(-83deg);
//   top: -51%;
//   left: 0%;
// }

// .pointer-circle {
//   z-index: 10;
//   position: relative;
//   top: -60%;
//   left: 20%;
//   height: 28px;
//   width: 28px;
//   background-color: var(--accessories-color);
//   border-radius: 50%;
//   border: 6px solid #486d5b;
// }

//EXTRAS POSITIONS
//#line1 {
//   width: 110px;
//   top: -59%;
//   left: 0%;
//   transform: rotate(33deg);
// }

// #line2 {
//   width: 85px;
//   top: -59%;
//   left: 56%;
//   transform: rotate(-50deg);
// }

// #line3 {
//   width: 120px;
//   top: -80%;
//   left: 22.5%;
//   transform: rotate(80deg);
// }

// #line4 {
//   width: 30px;
//   transform: rotate(50deg);
//   top: -32%;
//   left: 64%;
// }

// #line5 {
//   width: 90px;
//   transform: rotate(-25deg);
//   top: -37%;
//   left: 20%;
// }

//.pointer-circle {
//   z-index: 10;
//   position: relative;
//   top: -30%;
//   left: 55%;
//   height: 28px;
//   width: 28px;
//   background-color: var(--accessories-color);
//   border-radius: 50%;
//   border: 6px solid #486d5b;
// }


//CHECKOUT POSITIONS
// #line1 {
//   width: 110px;
//   top: -72.5%;
//   left: 5%;
//   transform: rotate(5deg);
// }

// #line2 {
//   width: 30px;
//   top: -74%;
//   left: 79%;
//   transform: rotate(-18deg);
// }

// #line3 {
//   width: 85px;
//   top: -93%;
//   left: 38%;
//   transform: rotate(60deg);
// }

// #line4 {
//   width: 80px;
//   transform: rotate(85deg);
//   top: -48.3%;
//   left: 53%;
// }

// #line5 {
//   width: 110px;
//   transform: rotate(-45deg);
//   top: -49%;
//   left: 13%;
// }

// .pointer-circle {
//   z-index: 10;
//   position: relative;
//   top: -60%;
//   left: 65%;
//   height: 28px;
//   width: 28px;
//   background-color: var(--accessories-color);
//   border-radius: 50%;
//   border: 6px solid #486d5b;
// }

function statsTop() {
  outsideCircle.style.borderColor = topColor;
  pointerCircle.style.top = '-30%';
  pointerCircle.style.left = '30%';

  line1.style.top = '-57%';
  line1.style.left = '-4.4%';
  line1.style.transform = "rotate(50deg)";
  line1.style.width = '90.5px';

  line2.style.top = '-78%';
  line2.style.left = '10.5%';
  line2.style.transform = "rotate(-80deg)";
  line2.style.width = '120px';

  line3.style.top = '-62%';
  line3.style.left = '38%';
  line3.style.transform = "rotate(-30deg)";
  line3.style.width = '110px';

  line4.style.top = '-36%';
  line4.style.left = '29%';
  line4.style.transform = "rotate(25deg)";
  line4.style.width = '90.5px';

  line5.style.top = '-37%';
  line5.style.left = '17%';
  line5.style.transform = "rotate(-55deg)";
  line5.style.width = '40px';
}

function statsBottom() {
  outsideCircle.style.borderColor = bottomsColor;
  pointerCircle.style.top = '-60%';
  pointerCircle.style.left = '20%';

  line1.style.top = '-72.5%';
  line1.style.left = '5%';
  line1.style.transform = "rotate(15deg)";
  line1.style.width = '40px';

  line3.style.top = '-74.5%';
  line3.style.left = '33%';
  line3.style.transform = "rotate(-5deg)";
  line3.style.width = '110px';

  line2.style.top = '-90%';
  line2.style.left = '12%';
  line2.style.transform = "rotate(-60deg)";
  line2.style.width = '90px';

  line4.style.top = '-48%';
  line4.style.left = '22%';
  line4.style.transform = "rotate(45deg)";
  line4.style.width = '115px';

  line5.style.top = '-51%';
  line5.style.left = '0%';
  line5.style.transform = "rotate(-83deg)";
  line5.style.width = '90px';
}

function statsExtras() {
  outsideCircle.style.borderColor = accessoriesColor;
  pointerCircle.style.top = '-30%';
  pointerCircle.style.left = '55%';

  line1.style.top = '-59.5%';
  line1.style.left = '0%';
  line1.style.transform = "rotate(33deg)";
  line1.style.width = '110px';

  line3.style.top = '-59%';
  line3.style.left = '56%';
  line3.style.transform = "rotate(-50deg)";
  line3.style.width = '85px';

  line2.style.top = '-78%';
  line2.style.left = '22.5%';
  line2.style.transform = "rotate(-100deg)";
  line2.style.width = '120px';

  line4.style.top = '-32%';
  line4.style.left = '64%';
  line4.style.transform = "rotate(50deg)";
  line4.style.width = '30px';

  line5.style.top = '-37%';
  line5.style.left = '20%';
  line5.style.transform = "rotate(-25deg)";
  line5.style.width = '90px';
}

function statsCheckout() {
  outsideCircle.style.borderColor = checkoutColor;

  pointerCircle.style.top = '-60%';
  pointerCircle.style.left = '65%';

  line1.style.top = '-72.5%';
  line1.style.left = '5%';
  line1.style.transform = "rotate(5deg)";
  line1.style.width = '110px';

  line3.style.top = '-76%';
  line3.style.left = '79%';
  line3.style.transform = "rotate(-18deg)";
  line3.style.width = '30px';

  line2.style.top = '-91%';
  line2.style.left = '38%';
  line2.style.transform = "rotate(-120deg)";
  line2.style.width = '85px';

  line4.style.top = '-48.3%';
  line4.style.left = '53%';
  line4.style.transform = "rotate(85deg)";
  line4.style.width = '80px';

  line5.style.top = '-49%';
  line5.style.left = '13%';
  line5.style.transform = "rotate(-45deg)";
  line5.style.width = '110px';
}