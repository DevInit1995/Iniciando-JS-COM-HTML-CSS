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
const greetingText = "Good Afternoon!";
const weatherCondition = "Sunny";
const userLocatiosn = "Rio de Janeiro";
let temperature = 35.78;
let weatherText = `The weather is ${weatherCondition} in ${userLocatiosn} and it's ${temperature.toFixed(1)}°C outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText;
