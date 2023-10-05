// document -> raiz de todo o documento em si.
/*querySelector -> método que retorna o primeiro Element no documento 
que corresponde ao seletor ou grupo de seletores especificado.*/
/*addEventListener -> interface que configura uma função que será chamada
sempre que o evento especificado for entregue ao destino*/

// abrir e fechar o menu
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

// area de previsão do tempo

function celsiusToFahr(temperature){
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}

const greetingText = "Good Afternoon!";
const weatherCondition = "Sunny";
const userLocations = "Rio de Janeiro";
let temperature = 30;

alert("The temperature outside is " + celsiusToFahr(temperature) + "°F.");

let celsiusText = `The weather is ${weatherCondition} in ${userLocations} and it's ${temperature.toFixed(1)}°C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocations} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

document.querySelector(".weather-group").addEventListener("click", function(e){
    // celsius
    // fahr
    if (e.target.id == "celsius"){
        document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (e.target.id == "fahr"){
        document.querySelector("p#weather").innerHTML = fahrText;;
    }
});

setInterval(function(){
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0");
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0");
},1000);

// Sessão de galeria

const galleryImages = [
    {
        src: "./assets/gallery/img1.png",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    },
];

/* for (let i in galleryImages){
    console.log(galleryImages[i]);
} */

let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;
//<img src="./assets/gallery/image1.jpg" 
//alt="Thumbnail Image 1" 
//data-array-index="0" data-selected="true"></img>
galleryImages.forEach(function(images, index){
    let thumb = document.createElement("img");
    thumb.src = images.src;
    thumb.alt = images.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = false;
    thumbnails.appendChild(thumb);
});

