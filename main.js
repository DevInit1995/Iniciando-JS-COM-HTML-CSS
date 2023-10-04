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
const greetingText = "Good morning!";
const weatherCondition = "Sunny";
const userLocatiosn = "New Yourk";
let temperature = 22.8673;
let weatherText = "The weather is cloudy in London and it's 22°C outside.";