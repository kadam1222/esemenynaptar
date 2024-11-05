const d = new Date();
let ev = d.getFullYear();
let honap = d.getMonth()+1;
let datum = document.getElementById("datum");
datum.innerHTML= ev + ". " +honap+". hónap"


let fodiv=document.getElementById("fodiv");
let napok_div=document.getElementById("napok")
let napok=["H","K","Sze","Cs","P","Szo","V"]
for(let i=0;i<7;i++){
    let jelenleg = document.createElement("span")
    jelenleg.innerText = napok[i] + "    \t";
    napok_div.appendChild(jelenleg)
}

let elozo= document.getElementById("elozo");
elozo.addEventListener("click",function(){
    honap= honap-1;
    if(honap==0){
        ev=ev-1
        honap=12
    }
    datum.innerHTML= ev + ". " +honap+". hónap" 
})



let nap = document.createElement("div");
nap.id="naplist"
for(let i=1;i<32;i++){
    let jelenleg = document.createElement("button")
    jelenleg.innerText=i
    if(i==1){
        jelenleg.id="elso"
    }
    nap.appendChild(jelenleg)
}
fodiv.appendChild(nap)