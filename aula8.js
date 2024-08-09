function ex600()
{
    var qua = quant.value
    qua = parseInt(qua)
    var n1 = 0;
    var n2 = 1; 
    var resultado = 0;
    var sai = 1;

    while(qua > 1)
    {
        resultado = n1 + n2;
        n1 = n2;
        n2 = resultado;

        sai += " " +resultado + " ";

        qua -= 1;
    }

    saida.value = " 0 " + sai;

}
function ex61()
{
    var num = prompt("Digite um número");
    num = parseInt(num);
    var resultado = 1;
    
    while(num > 1)
    {
        //resultado = resultado * num
        resultado *= num
        
        //num = num - 1 ;
        //num -= 1;
        num -- //num ++
    }

    for (var num = num; num > 1; num --)
    {
        resultado *= num;
    }
    
    
    console.log("o fatorial é: " + resultado)
}

function ex60()
{
    var qua = prompt("digite o valor")
    qua = parseInt(qua)
    var n1 = 0;
    var n2 = 1; 
    var resultado = 0;
    var sai = 1;

    while(qua > 1)
    {
        resultado = n1 + n2;
        n1 = n2;
        n2 = resultado;

        sai += " " +resultado + " ";

        qua -= 1;
    }

    console.log("0 " + sai);

}