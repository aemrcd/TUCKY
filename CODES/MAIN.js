// HEADER SCROLLING ANIMATION
window.onscroll = function() {
      Scrollmobile();
  if (window.innerWidth > 390) {
      Scrollhide();
     
  }
};

function Scrollhide() {
  var scrollani = document.getElementById("DIV");

  if (document.documentElement.scrollTop > 20) {
      scrollani.style.top = "-120px";
      
      
  } else {
      scrollani.style.top = "0";
      
  }
}
// MOBILE COLOR HIDE
function Scrollmobile() {
  var media = document.body;

  if (window.innerWidth <= 390)

  if (document.documentElement.scrollTop > 155) {
    media.style.backgroundColor = "#BBE1FA";
  
  } else {
    media.style.backgroundColor = "#3282B8";

  }
}


// MOBILE TRIGGER BURGER MENU MAINPAGE
function burger() {
  var onbtn = document.getElementById("BURGER_MENU");
  var show =document.getElementById ("SQUAREWHENCLICK");
  var offbtn =document.getElementById("BURGER_CLOSE"); 
  var shopbtn =document.getElementById("SHOPBUTTON");

  if (onbtn.style.display === "none") {
    onbtn.style.display = "block";
    offbtn.style.display="none";
    show.style.display= "none";
    shopbtn.style.zIndex= "3";
  
  } else {
    offbtn.style.display="block";
    onbtn.style.display = "none";
    show.style.display ="block";
    shopbtn.style.zIndex= "1";
  }
}

// MOBILE TRIGGER BURGER MENU KEYBOARDSHOP
function burger1() {
  var onbtn = document.getElementById("BURGER_MENU_keyboard");
  var show =document.getElementById ("SQUAREWHENCLICK_keyboard");
  var offbtn =document.getElementById("BURGER_CLOSE_keyboard"); 
  var index = document.getElementById("DIV_keyboard")


  if (onbtn.style.display === "none") {
    onbtn.style.display = "block";
    offbtn.style.display="none";
    show.style.display= "none";
    index.style.zIndex="auto";
    
  
  } else {
    offbtn.style.display="block";
    onbtn.style.display = "none";
    show.style.display ="block";
    index.style.zIndex="5";
    
    
  }
}


//MAINPAGE HOVER SELECTOR
// FIRST IMAGE HOVER SELECTOR 1
var scaleUP = document.getElementById("scaleUP");
var scaleUP2 = document.getElementById("scaleUP2");
var scaleUP3 = document.getElementById("scaleUP3");

function bigimg1() {
  scaleUP.style.transform = "scale(1.1)";
  scaleUP.style.filter = "blur(0px)";
  scaleUP.style.transition = "all 0.5s ease";
  scaleUP.style.backgroundColor = "#ECECEC";
}

function normalIMG1() {
  scaleUP.style.transform = "scale(1)";
  scaleUP.style.filter = "blur(2px)";
  scaleUP.style.backgroundColor = "#ECECEC";
}

// FIRST IMAGE HOVER SELECTOR 2
function bigimg2() {
  scaleUP2.style.transform = "scale(1.1)";
  scaleUP2.style.filter = "blur(0px)";
  scaleUP2.style.transition = "all 0.5s ease";
  scaleUP2.style.backgroundColor = "#ECECEC";
}

function normalIMG2() {
  scaleUP2.style.transform = "scale(1)";
  scaleUP2.style.filter = "blur(2px)";
  scaleUP2.style.backgroundColor = "#ECECEC";
}

// FIRST IMAGE HOVER SELECTOR 3
function bigimg3() {
  scaleUP3.style.transform = "scale(1.1)";
  scaleUP3.style.filter = "blur(0px)";
  scaleUP3.style.transition = "all 0.5s ease";
  scaleUP3.style.backgroundColor = "#ECECEC";
}

function normalIMG3() {
  scaleUP3.style.transform = "scale(1)";
  scaleUP3.style.filter = "blur(2px)";
  scaleUP3.style.backgroundColor = "#ECECEC";
}

//END OF MAINPAGE


// KEYBOARDSHOP HOVER ANIMATION
// PRODUCTS HOVER INFO SECTION
// THE WHOLE STORE 1 WHEN ITS HOVER
var INFO1 = document.getElementById("INFO1");
var IMAGE_STORE1 = document.getElementById("IMAGE_STORE1");
var PRICE_KEYBOARD = document.getElementById("PRICE_KEYBOARD");
var RATINGSTARS = document.getElementById("RATINGSTARS");
var STOREone = document.getElementById("STOREone");
var COLORSWITCH = document.getElementById("COLORSWITCH");
var DISC = document.getElementById("DISC");
var buyandadd = document.getElementById("buyandadd");

function hovSTORE1() {
  INFO1.style.display = "none";
  IMAGE_STORE1.style.transform = "scale(0.9)";
  IMAGE_STORE1.style.transitionDuration = "400ms";
  PRICE_KEYBOARD.style.fontSize = "30px";
  PRICE_KEYBOARD.style.left = "20px";
  PRICE_KEYBOARD.style.top = "285px";
  PRICE_KEYBOARD.style.transitionDuration = "400ms";
  RATINGSTARS.style.left = "15px";
  RATINGSTARS.style.top = "320px";
  RATINGSTARS.style.transform = "scale(0.7)";
  RATINGSTARS.style.transitionDuration = "400ms";
  STOREone.style.height = "550px";
  STOREone.style.transitionDuration = "400ms";
  COLORSWITCH.style.left = "12px";
  COLORSWITCH.style.top = "445px";
  COLORSWITCH.style.transform = "scale(0.8)";
  COLORSWITCH.style.transitionDuration = "400ms";
  DISC.style.display = "block";
  buyandadd.style.display ="block";

}
function norSTORE1() {
  IMAGE_STORE1.style.transform = "scale(1)";
  INFO1.style.display = "block"
  PRICE_KEYBOARD.style.left = "5px";
  PRICE_KEYBOARD.style.top = "290px";
  PRICE_KEYBOARD.style.fontSize = "xx-large";
  RATINGSTARS.style.transform = "scale(1)";
  RATINGSTARS.style.left = "25px";
  RATINGSTARS.style.top = "350px";
  STOREone.style.transitionDuration = "400ms";
  STOREone.style.height = "480px";
  COLORSWITCH.style.top = "420px";
  COLORSWITCH.style.left = "30px";
  COLORSWITCH.style.transform = "scale(1)";
  COLORSWITCH.style.transitionDuration = "400ms";
  DISC.style.display = "none";
  buyandadd.style.display ="none";
}
// THE WHOLE STORE2 WHEN ITS HOVER 
var INFO2 = document.getElementById("INFO2");
var IMAGE_STORE2 = document.getElementById("IMAGE_STORE2");
var PRICE_KEYBOARD2 = document.getElementById("PRICE_KEYBOARD2");
var RATINGSTARS2 = document.getElementById("RATINGSTARS2");
var STOREtwo = document.getElementById("STOREtwo");
var COLORSWITCH2 = document.getElementById("COLORSWITCH2");
var DISC2 = document.getElementById("DISC2");
var buyandadd2 = document.getElementById("buyandadd2");

function hovSTORE2() {
  INFO2.style.display = "none";
  IMAGE_STORE2.style.transform = "scale(0.9)";
  IMAGE_STORE2.style.transitionDuration = "400ms";
  PRICE_KEYBOARD2.style.fontSize = "30px";
  PRICE_KEYBOARD2.style.left = "20px";
  PRICE_KEYBOARD2.style.top = "285px";
  PRICE_KEYBOARD2.style.transitionDuration = "400ms";
  RATINGSTARS2.style.left = "15px";
  RATINGSTARS2.style.top = "320px";
  RATINGSTARS2.style.transform = "scale(0.7)";
  RATINGSTARS2.style.transitionDuration = "400ms";
  STOREtwo.style.height = "550px";
  STOREtwo.style.transitionDuration = "400ms";
  COLORSWITCH2.style.left = "12px";
  COLORSWITCH2.style.top = "445px";
  COLORSWITCH2.style.transform = "scale(0.8)";
  COLORSWITCH2.style.transitionDuration = "400ms";
  DISC2.style.display = "block";
  buyandadd2.style.display ="block";

}
function norSTORE2() {
  IMAGE_STORE2.style.transform = "scale(1)";
  INFO2.style.display = "block"
  PRICE_KEYBOARD2.style.left = "5px";
  PRICE_KEYBOARD2.style.top = "290px";
  PRICE_KEYBOARD2.style.fontSize = "xx-large";
  RATINGSTARS2.style.transform = "scale(1)";
  RATINGSTARS2.style.left = "25px";
  RATINGSTARS2.style.top = "350px";
  STOREtwo.style.transitionDuration = "400ms";
  STOREtwo.style.height = "480px";
  COLORSWITCH2.style.top = "420px";
  COLORSWITCH2.style.left = "30px";
  COLORSWITCH2.style.transform = "scale(1)";
  COLORSWITCH2.style.transitionDuration = "400ms";
  DISC2.style.display = "none";
  buyandadd2.style.display ="none";
}

// THE WHOLE STORE3 WHEN ITS HOVER 
var INFO3 = document.getElementById("INFO3");
var IMAGE_STORE3 = document.getElementById("IMAGE_STORE3");
var PRICE_KEYBOARD3 = document.getElementById("PRICE_KEYBOARD3");
var RATINGSTARS3 = document.getElementById("RATINGSTARS3");
var STOREthree = document.getElementById("STOREthree");
var COLORSWITCH3 = document.getElementById("COLORSWITCH3");
var DISC3 = document.getElementById("DISC3");
var buyandadd3 = document.getElementById("buyandadd3");

function hovSTOREthree() {
  INFO3.style.display = "none";
  IMAGE_STORE3.style.transform = "scale(0.9)";
  IMAGE_STORE3.style.transitionDuration = "400ms";
  PRICE_KEYBOARD3.style.fontSize = "30px";
  PRICE_KEYBOARD3.style.left = "20px";
  PRICE_KEYBOARD3.style.top = "285px";
  PRICE_KEYBOARD3.style.transitionDuration = "400ms";
  RATINGSTARS3.style.left = "15px";
  RATINGSTARS3.style.top = "320px";
  RATINGSTARS3.style.transform = "scale(0.7)";
  RATINGSTARS3.style.transitionDuration = "400ms";
  STOREthree.style.height = "550px";
  STOREthree.style.transitionDuration = "400ms";
  COLORSWITCH3.style.left = "12px";
  COLORSWITCH3.style.top = "445px";
  COLORSWITCH3.style.transform = "scale(0.8)";
  COLORSWITCH3.style.transitionDuration = "400ms";
  DISC3.style.display = "block";
  buyandadd3.style.display ="block";

}
function norSTOREthree() {
  IMAGE_STORE3.style.transform = "scale(1)";
  INFO3.style.display = "block"
  PRICE_KEYBOARD3.style.left = "5px";
  PRICE_KEYBOARD3.style.top = "290px";
  PRICE_KEYBOARD3.style.fontSize = "xx-large";
  RATINGSTARS3.style.transform = "scale(1)";
  RATINGSTARS3.style.left = "25px";
  RATINGSTARS3.style.top = "350px";
  STOREthree.style.transitionDuration = "400ms";
  STOREthree.style.height = "480px";
  COLORSWITCH3.style.top = "420px";
  COLORSWITCH3.style.left = "30px";
  COLORSWITCH3.style.transform = "scale(1)";
  COLORSWITCH3.style.transitionDuration = "400ms";
  DISC3.style.display = "none";
  buyandadd3.style.display ="none";
}

// THE WHOLE STORE4 WHEN ITS HOVER 
var INFO4 = document.getElementById("INFO4");
var IMAGE_STORE4 = document.getElementById("IMAGE_STORE4");
var PRICE_KEYBOARD4 = document.getElementById("PRICE_KEYBOARD4");
var RATINGSTARS4 = document.getElementById("RATINGSTARS4");
var STOREfour = document.getElementById("STOREfour");
var COLORSWITCH4 = document.getElementById("COLORSWITCH4");
var DISC4 = document.getElementById("DISC4");
var buyandadd4 = document.getElementById("buyandadd4");

function hovSTOREfour() {
  INFO4.style.display = "none";
  IMAGE_STORE4.style.transform = "scale(0.9)";
  IMAGE_STORE4.style.transitionDuration = "400ms";
  PRICE_KEYBOARD4.style.fontSize = "30px";
  PRICE_KEYBOARD4.style.left = "20px";
  PRICE_KEYBOARD4.style.top = "285px";
  PRICE_KEYBOARD4.style.transitionDuration = "400ms";
  RATINGSTARS4.style.left = "15px";
  RATINGSTARS4.style.top = "320px";
  RATINGSTARS4.style.transform = "scale(0.7)";
  RATINGSTARS4.style.transitionDuration = "400ms";
  STOREfour.style.height = "550px";
  STOREfour.style.transitionDuration = "400ms";
  COLORSWITCH4.style.left = "12px";
  COLORSWITCH4.style.top = "445px";
  COLORSWITCH4.style.transform = "scale(0.8)";
  COLORSWITCH4.style.transitionDuration = "400ms";
  DISC4.style.display = "block";
  buyandadd4.style.display ="block";

}
function norSTOREfour() {
  IMAGE_STORE4.style.transform = "scale(1)";
  INFO4.style.display = "block"
  PRICE_KEYBOARD4.style.left = "5px";
  PRICE_KEYBOARD4.style.top = "290px";
  PRICE_KEYBOARD4.style.fontSize = "xx-large";
  RATINGSTARS4.style.transform = "scale(1)";
  RATINGSTARS4.style.left = "25px";
  RATINGSTARS4.style.top = "350px";
  STOREfour.style.transitionDuration = "400ms";
  STOREfour.style.height = "480px";
  COLORSWITCH4.style.top = "420px";
  COLORSWITCH4.style.left = "30px";
  COLORSWITCH4.style.transform = "scale(1)";
  COLORSWITCH4.style.transitionDuration = "400ms";
  DISC4.style.display = "none";
  buyandadd4.style.display ="none";
}

// THE WHOLE STORE5 WHEN ITS HOVER 
var INFO5 = document.getElementById("INFO5");
var IMAGE_STORE5 = document.getElementById("IMAGE_STORE5");
var PRICE_KEYBOARD5 = document.getElementById("PRICE_KEYBOARD5");
var RATINGSTARS5 = document.getElementById("RATINGSTARS5");
var STOREfive = document.getElementById("STOREfive");
var COLORSWITCH5 = document.getElementById("COLORSWITCH5");
var DISC5 = document.getElementById("DISC5");
var buyandadd5 = document.getElementById("buyandadd5");


function hovSTOREfive() {
  INFO5.style.display = "none";
  IMAGE_STORE5.style.transform = "scale(0.9)";
  IMAGE_STORE5.style.transitionDuration = "400ms";
  PRICE_KEYBOARD5.style.fontSize = "30px";
  PRICE_KEYBOARD5.style.left = "20px";
  PRICE_KEYBOARD5.style.top = "285px";
  PRICE_KEYBOARD5.style.transitionDuration = "400ms";
  RATINGSTARS5.style.left = "15px";
  RATINGSTARS5.style.top = "320px";
  RATINGSTARS5.style.transform = "scale(0.7)";
  RATINGSTARS5.style.transitionDuration = "400ms";
  STOREfive.style.height = "550px";
  STOREfive.style.transitionDuration = "400ms";
  COLORSWITCH5.style.left = "12px";
  COLORSWITCH5.style.top = "445px";
  COLORSWITCH5.style.transform = "scale(0.8)";
  COLORSWITCH5.style.transitionDuration = "400ms";
  DISC5.style.display = "block";
  buyandadd5.style.display ="block";

}
function norSTOREfive() {
  IMAGE_STORE5.style.transform = "scale(1)";
  INFO5.style.display = "block"
  PRICE_KEYBOARD5.style.left = "5px";
  PRICE_KEYBOARD5.style.top = "290px";
  PRICE_KEYBOARD5.style.fontSize = "xx-large";
  RATINGSTARS5.style.transform = "scale(1)";
  RATINGSTARS5.style.left = "25px";
  RATINGSTARS5.style.top = "350px";
  STOREfive.style.transitionDuration = "400ms";
  STOREfive.style.height = "480px";
  COLORSWITCH5.style.top = "420px";
  COLORSWITCH5.style.left = "30px";
  COLORSWITCH5.style.transform = "scale(1)";
  COLORSWITCH5.style.transitionDuration = "400ms";
  DISC5.style.display = "none";
  buyandadd5.style.display ="none";
}

// THE WHOLE STORE6 WHEN ITS HOVER 
var INFO6 = document.getElementById("INFO6");
var IMAGE_STORE6 = document.getElementById("IMAGE_STORE6");
var PRICE_KEYBOARD6 = document.getElementById("PRICE_KEYBOARD6");
var RATINGSTARS6 = document.getElementById("RATINGSTARS6");
var STOREsix = document.getElementById("STOREsix");
var COLORSWITCH6 = document.getElementById("COLORSWITCH6");
var DISC6 = document.getElementById("DISC6");
var buyandadd6 = document.getElementById("buyandadd6");


function hovSTOREsix() {
  INFO6.style.display = "none";
  IMAGE_STORE6.style.transform = "scale(0.9)";
  IMAGE_STORE6.style.transitionDuration = "400ms";
  PRICE_KEYBOARD6.style.fontSize = "30px";
  PRICE_KEYBOARD6.style.left = "20px";
  PRICE_KEYBOARD6.style.top = "285px";
  PRICE_KEYBOARD6.style.transitionDuration = "400ms";
  RATINGSTARS6.style.left = "15px";
  RATINGSTARS6.style.top = "320px";
  RATINGSTARS6.style.transform = "scale(0.7)";
  RATINGSTARS6.style.transitionDuration = "400ms";
  STOREsix.style.height = "550px";
  STOREsix.style.transitionDuration = "400ms";
  COLORSWITCH6.style.left = "12px";
  COLORSWITCH6.style.top = "445px";
  COLORSWITCH6.style.transform = "scale(0.8)";
  COLORSWITCH6.style.transitionDuration = "400ms";
  DISC6.style.display = "block";
  buyandadd6.style.display ="block";

}
function norSTOREsix() {
  IMAGE_STORE6.style.transform = "scale(1)";
  INFO6.style.display = "block"
  PRICE_KEYBOARD6.style.left = "5px";
  PRICE_KEYBOARD6.style.top = "290px";
  PRICE_KEYBOARD6.style.fontSize = "xx-large";
  RATINGSTARS6.style.transform = "scale(1)";
  RATINGSTARS6.style.left = "25px";
  RATINGSTARS6.style.top = "350px";
  STOREsix.style.transitionDuration = "400ms";
  STOREsix.style.height = "480px";
  COLORSWITCH6.style.top = "420px";
  COLORSWITCH6.style.left = "30px";
  COLORSWITCH6.style.transform = "scale(1)";
  COLORSWITCH6.style.transitionDuration = "400ms";
  DISC6.style.display = "none";
  buyandadd6.style.display ="none";
}

// END KEYBOARDSHOP HOVER ANIMATION

// MOBILE BURGER MENU
