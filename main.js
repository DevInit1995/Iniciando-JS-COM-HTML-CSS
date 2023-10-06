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

const products = [
    {
        title: "AstroFiction",
        author: "John Doe",
        price: 49.9,
        image: "./assets/products/img6.png"
      },
      {
        title: "Space Odissey",
        author: "Marie Anne",
        price: 35,
        image: "./assets/products/img1.png"
      },
      {
        title: "Doomed City",
        author: "Jason Cobert",
        price: 0,
        image: "./assets/products/img2.png"
      },
      {
        title: "Black Dog",
        author: "John Doe",
        price: 85.35,
        image: "./assets/products/img3.png"
      },
      {
        title: "My Little Robot",
        author: "Pedro Paulo",
        price: 0,
        image: "./assets/products/img5.png"
      },
      {
        title: "Garden Girl",
        author: "Ankit Patel",
        price: 45,
        image: "./assets/products/img4.png"
      }
    ];


// seção menu
function menuHandler() {
    // abrir e fechar o menu
    document.querySelector("#open-nav-menu").addEventListener("click", function() {
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

    document.querySelector("#close-nav-menu").addEventListener("click", function() {
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}

//sessão de conversão de temperatura
function celsiusToFahr(temperature) {
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}

// area de previsão do tempo
function greetingHandler() {
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
        if (e.target.id == "celsius") {
            document.querySelector("p#weather").innerHTML = celsiusText;
        } else if (e.target.id == "fahr") {
            document.querySelector("p#weather").innerHTML = fahrText;;
        }
    });
}

// sessão de relógio
function clockHandler() {
    setInterval(function() {
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0");
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0");
    }, 1000);
}

// Sessão de galeria
function galleryHandler() {
    let mainImage = document.querySelector("#gallery > img");
    let thumbnails = document.querySelector("#gallery .thumbnails");

    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;

    galleryImages.forEach(function(images, index) {
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

            thumbnails.querySelectorAll("img").forEach(function(img) {
                img.dataset.selected = false;
            });

            e.target.dataset.selected = true;
        });

        thumbnails.appendChild(thumb);
    });
}

//Sessão de produtos
/* <div class="product-item">
             <img src="./assets/products/img6.png" alt="AstroFiction">
             <div class="product-details">
                <h3 class="product-title">AstroFiction</h3>
                <p class="product-author">John Doe</p>
                <p class="price-title">Price</p>
                <p class="product-price">$ 49.90</p>
             </div>
          </div> */

function productsHandler() {

    let productsSection = document.querySelector(".products-area");

    // Correr um loop pelo array de produtos e criar um elemento ("product-item") html para cada um deles
    products.forEach(function(product, index) {
        // criando o elemento HTML para os produtos individuais
        let productElm = document.createElement("div");
        productElm.classList.add("product-item");

        // criando a imagem do produto
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "Image for " + product.title;

        // criar a sessão de detalhes do produto
        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        // Criando titulo, author, preço-titulo e preço
        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.textContent = product.title;
        
        let productAuthor = document.createElement("p");
        productAuthor.classList.add("product-author");
        productAuthor.textContent = product.author;
       
        let priceTitle = document.createElement("p");
        priceTitle.classList.add("price-title");
        priceTitle.textContent = "Price";
        
        let productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2) : "Free";

        // Acrescenta o detalhe de produtos
        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        productDetails.append(priceTitle);
        productDetails.append(productPrice);

        // Add todos os elemento HTML filhos de produtos 
        productElm.append(productImage);
        productElm.append(productDetails);

        // Add o produto individual na sessão de produtos
        productsSection.append(productElm);
    });
}

// Carregamento da página
menuHandler();
clockHandler();
greetingHandler();
galleryHandler();
productsHandler();

