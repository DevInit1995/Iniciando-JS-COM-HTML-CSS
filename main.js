// document -> raiz de todo o documento em si.
/*querySelector -> método que retorna o primeiro Element no documento 
que corresponde ao seletor ou grupo de seletores especificado.*/
/*addEventListener -> interface que configura uma função que será chamada
sempre que o evento especificado for entregue ao destino*/

// Arrays de galeria
const galleryImages = [
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
    }
];

// seção menu
function menuHandler(){
    // abrir e fechar o menu
    document.querySelector("#open-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

    document.querySelector("#close-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}

//sessão de conversão de temperatura
function celsiusToFahr(temperature){
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}

// area de previsão do tempo
function greetingHandler(){
    let currentHour = new Date().getHours();
    let greetingText;

    if (currentHour < 12){
        greetingText = "Good morning!";
    } else if (currentHour < 19){
        greetingText = "Good afternoon!";
    } else if (currentHour < 24){
        greetingText = "Good evening!";
    } else {
        greetingText = "Welcome!";
    }

    const weatherCondition = "Sunny";
    const userLocations = "Rio de Janeiro";
    let temperature = 30;

    //alert("The temperature outside is " + celsiusToFahr(temperature) + "°F.");

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
}

// sessão de relógio
function clockHandler(){
    setInterval(function(){
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0");
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0");
    }, 1000);
}

// Sessão de galeria
function galleryHandler(){
    let mainImage = document.querySelector("#gallery > img");
    let thumbnails = document.querySelector("#gallery .thumbnails");

    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;

    galleryImages.forEach(function(images, index){
        let thumb = document.createElement("img");
        thumb.src = images.src;
        thumb.alt = images.alt;
        thumb.dataset.arrayIndex = index;
        thumb.dataset.selected = index === 0 ? true : false;

        thumb.addEventListener("click", function(e){
            let selectedIndex = e.target.dataset.arrayIndex;
            let selectedImage = galleryImages[selectedIndex];
            mainImage.src = selectedImage.src;
            mainImage.alt = selectedImage.alt;

            thumbnails.querySelectorAll("img").forEach(function(img){
                img.dataset.selected = false;
            });

            e.target.dataset.selected = true;
        });

        thumbnails.appendChild(thumb);
    });
}

// Carregamento da página
menuHandler();
clockHandler();
greetingHandler();
galleryHandler();

