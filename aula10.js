$(document).ready(function()
    {
        $("#servico").change(function()
        {
            var valor = $(this).val();

            $("#form-consulta, #form-banho, #form-internamento, #form-exames").addClass("d-none");

            if(valor == 10)
            {
                $("#form-consulta").removeClass("d-none");
            }else if(valor == 11)
            {
                $("#form-banho").removeClass("d-none");
            }else if(valor == 12)
            {
                $("#form-internamento").removeClass("d-none");
            }else if(valor == 13)
                {
                    $("#form-exames").removeClass("d-none");
                }
        });//fim do change serviço

        $("#bt-salvar").click(function()
    {
        if ($("#paciente").val() == "")
        {
            alert("Nome do paciente é obrigatório");
        }

    });//fm do bt-salvar

    });//fim do document ready
