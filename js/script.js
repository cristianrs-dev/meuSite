//alert("site em construção");

function openMenu(){
    //document.getElementById("myDropdown").classList.toggle("show");
    let menu=document.getElementById("mobile")
    if(menu.style.display =='block'){
        menu.style.display='none'
    }else{
        menu.style.display='block'
    }
}

let front = document.getElementById("front")
let back = document.getElementById("back")
let testes = document.getElementById("testes")

function mostrarConteudoFront(){
    let front_end = document.getElementById("front-end")
    let back_end = document.getElementById("back-end")
    let testes = document.getElementById("tetes")
    front_end.style.display='block'
    back_end.style.display='none'
    testes.style.display='none'
    

}
function mostrarConteudoBack(){
    let front_end = document.getElementById("front-end")
    let back_end = document.getElementById("back-end")
    let testes = document.getElementById("tetes")
    back_end.style.display='block'
    front_end.style.display='none'
    testes.style.display='none'
    
}

function mostrarConteudoTestes(){
    let front_end = document.getElementById("front-end")
    let back_end = document.getElementById("back-end")
    let testes = document.getElementById("tetes")
    testes.style.display='block'
    front_end.style.display='none'
    back_end.style.display='none'
   
}

front.addEventListener("click",mostrarConteudoFront)
back.addEventListener("click",mostrarConteudoBack)
testes.addEventListener("click",mostrarConteudoTestes)
