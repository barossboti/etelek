var tomb=[
    {
        "etelNeve":"Babgulyás",
        "kepNeve":"1.jpg",
        "elkeszitesIdo":120,
        "kaloriaTartalma":110,
    },
    {
        "etelNeve":"Slambuc",
        "kepNeve":"2.jpg",
        "elkeszitesIdo":60,
        "kaloriaTartalma":150,
    },
    {
        "etelNeve":"Cordon Bleu",
        "kepNeve":"3.jpg",
        "elkeszitesIdo":130,
        "kaloriaTartalma":250,
    },
    {
        "etelNeve":"Mac and Cheese",
        "kepNeve":"4.jpg",
        "elkeszitesIdo":30,
        "kaloriaTartalma":350,
    }

]
var sorsolas=()=>{
    var veletlenszam =Math.floor(Math.random()*tomb.length)
    console.log(veletlenszam)
    document.getElementById("etelhelye").innerHTML=`
    <span style="color:blue">
    ${tomb[veletlenszam].etelNeve}
    </span>
    <br>`

    document.getElementById("etelhelye").innerHTML+=`
    <img id="kep" src="kepek/${tomb[veletlenszam].kepNeve}" alt="">
    `
    document.getElementById("etelhelye").innerHTML+=`
    <span id="zold">
    ${tomb[veletlenszam].elkeszitesIdo} perc
    </span>
    <br>`
    document.getElementById("etelhelye").innerHTML+=`
    <span id="rozsaszin">
    ${tomb[veletlenszam].kaloriaTartalma} kcal
    </span>
    <br>`

//---------------Dizájnolás JavaScript-ben.....


document.getElementById("zold").style.backgroundColor="yellow"
document.getElementById("zold").style.fontWeight="bold"
document.getElementById("zold").style.fontFamily="fantasy"
document.getElementById("kep").style.width="500px"
}
//-------
console.log(tomb)
//----etelek feltöltése
tomb.forEach(elem=>{
    sz+=`<div class="col-sm-3">
    <p>${elem.etelNeve}
    </p>
    <p>
     <img class="img-fluid">${elem.kepNeve}
    </p>
    <p>${elem.elkeszitesIdo}
    </p>
    <p>${elem.kaloriaTartalma}
    </p>

    </div>`
})
document.getElementById("kajak").innerHTML=sz