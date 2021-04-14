function clicou(){
    document.getElementById("Agradecimento").innerHTML =" <b>Obrigado por clicar</b>";
    //alert("Obrigado por ter clicado");
}
function redirecionar(){

    window.open("https://www.google.com/webhp?hl=pt-PT&sa=X&ved=0ahUKEwial7Dw2PvvAhXRX8AKHdFKDz0QPAgI");
}
function trocar(elemento){

    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML ="Obrigado por passar o mouse";
    //alert("Trocar texto");
}
function voltar(elemento){

    elemento.innerHTML ="Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML ="Passe o mouse aqui";

}
function load(){

    alert("Pagina carregada");
}
function funcaoChange(elemento){

    console.log(elemento.value);
}

/*
function validAge(age){
    
    if(age>=18){
        return true;
    }else{
        return false;
    }
}

var old= prompt("Enter your age");

alert(validAge(old));


function sum(n1,n2){

    return n1+n2;
}
function setReplace(frase,nome,novo_nome){

    return frase.replace(nome, novo_nome);
}

alert(sum(10,5));
alert(setReplace("Vai para Mocambique","Mocambique", "Maputo"));


var d = new Date;

alert(d);

var i =0;

while(i<10){

    console.log(i);
    i++;

}

do{
var idade= prompt("Qual a sua idade?");

if(idade >=18){
    
    alert("Maior de idade");
}else{

    alert("Menor de idade");
}
}while(idade<18);


var frutas =[{nome: "Banana", cor: "Amarela"},{nome:"maca", cor:"verde"},{nome:"uva", cor:"roxo"}]
console.log(frutas);/*

var fruta ={nome: "Banana", cor: "Amarela"}
console.log(fruta);


var lista = ["maca","pera","laranja"];
lista.push("Beteraba");
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join('-'));
*/