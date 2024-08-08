function ex24()
{

    var n1 = num1.value;
    var n2 = num2.value;
    var n3 = num3.value;

    var resultado1;
    var resultado2;
//>
    if       (n1 > n2)
    {
        if (n1 > n3)
        {
            resultado1 = "O maior é " + n1
        }
        else
        {
            resultado1 = "O maior é " + n3
        }

    }else 
    {
        if (n2 > n3)
        {
            resultado1 = "O maior é " + n2
        }else 
        {
             resultado1 = "O maior é " + n3
        }
    }
    //<
    if       (n1 < n2)
        {
            if (n1 < n3)
            {
                resultado2 = " e o menor é " + n1
            }
            else
            {
                resultado2 = " e o menor é " + n3
            }
    
        }else 
        {
            if (n2 > n3)
            {
                resultado2 = " e o menor é " + n2
            }else 
            {
                resultado2 = " e o menor é " + n3
            }
        }
    
   saida.value = resultado1 + resultado2

}
// function = sub programa = subrotina
// E(entrada) = P(processamento) = S(saida) 

function soma (n1, n1)
{
    var resultado = n1 + n2;
    return resultado;
}

//executa a função
soma(3, 5);