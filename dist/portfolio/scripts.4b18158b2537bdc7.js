const modalViews=document.querySelectorAll(".services__modal"),modalBtns=document.querySelectorAll(".services__button"),modalCloses=document.querySelectorAll(".services__modal-close");let modal=function(e){modalViews[e].classList.add("active-modal")};modalBtns.forEach((e,l)=>{e.addEventListener("click",()=>{modal(l)})}),modalCloses.forEach(e=>{e.addEventListener("click",()=>{modalViews.forEach(l=>{l.classList.remove("active-modal")})})});