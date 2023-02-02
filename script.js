const mainContainer=document.querySelector(".container");
const containerPoppu = document.querySelector(".container-popup ");
const btnClick=document.querySelector(".click");
const close=document.querySelector(".close");
btnClick.addEventListener("click",()=>{
    mainContainer.classList.add("active");
    containerPoppu.classList.remove("active");
});
close.addEventListener('click',()=>{
    mainContainer.classList.remove("active");
    containerPoppu.classList.add("active");
})
