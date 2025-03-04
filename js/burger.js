

function declareBtns(){
  let burger_btn = document.querySelector("#burger_btn");
  let nav_open = document.querySelector("#nav_open");
  burger_btn.addEventListener("click",function(){
    (nav_open.style.display != "block") ?  nav_open.style.display = "block" :  nav_open.style.display = "none";
  })
}
function declareBtns2(){
  let burger_btn = document.querySelector("#Pop-up_ad");
  let burger_btn2 = document.querySelector("#ccc");
  
  let nav_open = document.querySelector("#ad_open");
  burger_btn.addEventListener("click",function(){
    (nav_open.style.display != "block") ?  nav_open.style.display = "block" :  nav_open.style.display = "none";
  })
  burger_btn2.addEventListener("click",function(){
    (nav_open.style.display != "block") ?  nav_open.style.display = "block" :  nav_open.style.display = "none";
  })
}



declareBtns();
declareBtns2();

function scrollToSection(nameIndex){
  document.getElementById(nameIndex).scrollIntoView({ behavior: "smooth"});
  let nav_open = document.querySelector("#nav_open");
  if(window.innerWidth <= 768){
    nav_open.style.display = "none"
    }
  }