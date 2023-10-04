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
