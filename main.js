// document -> raiz de todo o documento em si.
/*querySelector -> método que retorna o primeiro Element no documento 
que corresponde ao seletor ou grupo de seletores especificado.*/
/*addEventListener -> interface que configura uma função que será chamada
sempre que o evento especificado for entregue ao destino*/
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});