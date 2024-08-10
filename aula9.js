$(document).ready(function()
{
    $("h1").css("color", "red");

    $(".bt-add").click(function()
    {
        var cidade = $("#cidade").val();
        var lists = $("#lists").html();
        

//add somente se o valor fo igual a nada
    if(cidade != "")
    {
//add somente se n foi add antes

        if(lists.search(cidade) == -1)
    {

        $("#lists").append("<li>" + cidade + "</li>");
        $("#cidade").val("");
        }
    }


    });
   
});



// {
    // var entrada = ent.value;
    // var lista = entrada;

    // lista.push = list;
// }