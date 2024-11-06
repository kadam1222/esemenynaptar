const d = new Date("November 1, 2024");
let ev = d.getFullYear();
let honap = d.getMonth()+1;
let mainap = d.getDay();
let datum = document.getElementById("datum");
datum.innerHTML= ev + ". " +honap+". hónap"

const dmainap=new Date();
let ma=dmainap.getDate();
let mahonap=dmainap.getMonth();
let maev=dmainap.getFullYear();

let honaphossz=[31,28,31,30,31,30,31,31,30,31,30,31]
let honapokneve=["January","February","March","April","May","June","July","August","September","November","December"];
let fodiv=document.getElementById("fodiv");
let napok_div=document.getElementById("napok")
let napok=["H","K","Sze","Cs","P","Szo","V"]
for(let i=0;i<7;i++){
    let jelenleg = document.createElement("span")
    jelenleg.innerText = napok[i] + "    \t";
    napok_div.appendChild(jelenleg)
}

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let hozzaad = document.getElementById("hozzaad");

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}


let elozo= document.getElementById("elozo");
elozo.addEventListener("click",function(){
    honap= honap-1;
    if(honap==0){
        ev=ev-1
        honap=12
    }
    datum.innerHTML= ev + ". " +honap+". hónap"
    nap.innerText="";
    for(let i=1;i<honaphossz[honap-1]+1;i++){
        let jelenleg = document.createElement("button")
        jelenleg.innerText=i
        if(i==1){
            const d2= new Date(ev,honap-1,1);
            mainap= d2.getDay();
            if(mainap==0){
                jelenleg.style.gridColumnStart=7
            }
            else{
                jelenleg.style.gridColumnStart=mainap
            }
            
        }
        if(i==ma && honap-1==mahonap && ev==maev){
            jelenleg.style.backgroundColor="orange"
        }
        jelenleg.addEventListener("click",function(){
            modal.style.display = "block";
            
        })
        nap.appendChild(jelenleg)
    }
    fodiv.appendChild(nap)
})

let kov = document.getElementById("kov");
kov.addEventListener("click",function(){
    honap= honap+1;
    if(honap==13){
        ev=ev+1
        honap=1
    }
    datum.innerHTML= ev + ". " +honap+". hónap"
    nap.innerText="";
    
    for(let i=1;i<honaphossz[honap-1]+1;i++){
        let jelenleg = document.createElement("button")
        jelenleg.innerText=i
        if(i==1){
            const d3= new Date(ev,honap-1,1);
            mainap= d3.getDay();
            if(mainap==0){
                jelenleg.style.gridColumnStart=7
            }
            else{
                jelenleg.style.gridColumnStart=mainap
            }
        }
        if(i==ma && honap-1==mahonap && ev==maev){
            jelenleg.style.backgroundColor="orange"
        }
        jelenleg.addEventListener("click",function(){
            modal.style.display = "block";
        })
        nap.appendChild(jelenleg)
    }
    fodiv.appendChild(nap)
})

let kezdet = 5;
let nap = document.createElement("div");
nap.id="naplist"
for(let i=1;i<31;i++){
    let jelenleg = document.createElement("button")
    jelenleg.innerText=i
    if(i==1){
        jelenleg.style.gridColumnStart=mainap
    }
    if(i==ma && honap-1==mahonap && ev==maev){
        jelenleg.style.backgroundColor="orange"
    }
    jelenleg.addEventListener("click",function(){
        modal.style.display = "block";
        hozzaad.onclick = function(){
            let esemenynev = document.getElementById("esemenynev");
            jelenleg.innerHTML=i + `<p>${esemenynev}</p>`
            modal.style.display = "none";
        }
         
    })
    nap.appendChild(jelenleg)
}
fodiv.appendChild(nap)


