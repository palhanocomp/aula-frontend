var cidade = "Curitiba";
var cidade2 = "Colombo"

//estrutura de dados
// vetor = array

var lista = ["Curitiba", "Colombo", "Araucaria"];

console.log(lista[1]);

//add elementos
lista.push("Pinhais");
lista.unshift("Apucarana");

//remove elementos
lista.pop();
lista.shift();

//ordena em ord alfabetica
lista.sort();

//imprimir a lista
//loops = laços de repetiçao

lista.push("Pinhais")
var ini = 0;
var fim = lista.length - 1;

while (ini <= fim)
{
    console.log(lista[ini] );
    ini = ini + 1;
} 

var ini = 0;lista.length - 1;
var fim = 0;

while (fim <= ini)
{
    console.log(lista[ini] );
    ini = ini + 1;
} 