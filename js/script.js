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
//abas
let abaFront = document.getElementById("front")
let abaBack = document.getElementById("back")
let abaTeste = document.getElementById("teste")

//divs
let frontEnd = document.getElementById("front-end")
let backEnd = document.getElementById("back-end")
let testes = document.getElementById("testes")
backEnd.style.display='none'
testes.style.display='none'

abaFront.addEventListener('click',function mostrarConteudo(){
    frontEnd.style.display='block'
    backEnd.style.display='none'
    testes.style.display='none'
})

abaBack.addEventListener('click',function mostrarConteudo(){
    abaBack.classList.add('active')
    backEnd.style.display='block'
    abaFront.classList.remove('active')
    abaTeste.classList.remove('active')

    frontEnd.style.display='none'
    testes.style.display='none'
})

abaTeste.addEventListener('click',function mostrarConteudo(){
    abaTeste.classList.add('active')

    abaFront.classList.remove('active')
    abaBack.classList.remove('active')

    frontEnd.style.display='none'
    backEnd.style.display='none'
})

document.getElementById("teste").addEventListener("click",function(){
    alert("projetos no forno")
})