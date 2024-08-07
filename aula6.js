// aula 6

function oi()
{
    //console.log(valor.value);// Pega os valores q foram escritos e salva(apenas ficam armazenado)
    
    var entrada = valor.value
    
    saida.value = entrada;
}

//exercicios
// 1 - devolva o valor digitado de forma inversa
//ex. Edir = ridE bola = alob

// ex2 - coloque o nome todo em maiusculo 
// Edir = EDIR bola = BOLA

// ex3 -coloque a 1a letra em maiusculo 

function ex1()
{

}

function ex2()
{
//pegar a palavra
    var entrada = valor.value
    saida.value = entrada.toUpperCase();

}
function ex3()
{
    var entrada = valor.value
    var letra = entrada.charAt(0);
    var resto = entrada.substr(1).toLowerCase();

    saida.value = letra.toUpperCase() + resto;
    //saida.value = entrada.charAt(0).toUpperCase()
}
// Soma o num1 + o num2
function ex4()
{
    var entnum1 = num1.value;
    var entnum2 = num2.value;

    saida.value = parseInt(entnum1) + parseInt(entnum2)
}

//calcula imc
// pedir peso e aultura
// IMC = peso/(altura x altura)
function ex5()
{
    var entnum1 = num1.value;
    var entnum2 = num2.value;

    //modfica uma var existente
    entnum1 = parseFloat(entnum1)
    entnum2 = parseFloat(entnum2)

    saida.value = entnum1 / ( entnum2 * entnum2 ) 
}

// ex6
// Pegue 2 num e diga qual deles é o maior
function ex6()
{
    var entnum1 = num1.value;
    var entnum2 = num2.value;

    entnum1 = parseInt(entnum1)
    entnum2 = parseInt(entnum2)

    if (entnum1 > entnum2)
    {
        saida.value = entnum1;
    }else // se nao
    {
        saida.value = entnum2;
    }

}
// ex7
// peque a idade de um pes e diga se é criança, adulto ou idoso
// adulto > 18 anos , idoso > 65
function ex7()
{
   var idade = valor.value;

    if (idade >= 65)
    {
        saida.value = "Idoso";
    } else if (idade >= 18)
    {
        saida.value = "Adulto";
    }else
    {
        saida.value = "Criança"
    }
}