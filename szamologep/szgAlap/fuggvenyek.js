const SZAMOk = document.querySelectorAll(".szamok")[0]
SZAMOk.innerHTML = szamok()
function szamok() {
    let txt = "";
    for (let index = 0; index < 10; index++) {
        txt += `<button>${index}</button>`;
        
    }
    console.log(txt)
    return txt
    
}

const SZAMOKKIIR = document.querySelectorAll(".szamok button")[0]

for (let index = 0; index < SZAMOKKIIR.length; index++) {
    SZAMOKKIIR[index].addEventListener("click",kattintas)
}

function kattintas(event) {
    console.log(event.target) 
    const kifELEM = document.querySelector(".kifejezes")
    kifELEM.innerHTML += event.target.innerHTML  
}
