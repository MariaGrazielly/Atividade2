var bot = document.querySelector('#bot');
var nome = document.querySelector('#nome');
var cargo = document.querySelector('#cargo');
var salario = document.querySelector('#salario');
var info = document.querySelector('#info');

bot.addEventListener('click', () => {
   if (nome.value != "" && cargo.value != "Cargo" && salario.value != ""){

            let aumento = parseFloat;
            let salarion = parseFloat;
            let perau = String;
            let inss = parseFloat;
            let salliq = parseFloat;
            let perinss = String;

        if(cargo.value = "Atendente"){
            aumento = (parseFloat(salario.value) * 0.08);
            salarion = (parseFloat(salario.value) + aumento);
            perau = "(+ 8%)";

        }else if(cargo.value = "Estoquista"){
           aumento = (parseFloat(salario.value)* 0.06);
           salarion = (parseFloat(salario.value) + aumento);
           perau = "(+ 6%)";

        }else if(cargo.value = "Gerente"){
           aumento = (parseFloat(salario.value) * 0.03);
           salarion = (parseFloat(salario.value) + aumento);
           perau = "(+ 3%)";

        }else{
            aumento = "CARGO SEM AUMENTO NO MOMENTO.";
        }
        
        
           if(salarion <= 1045.00){
           inss = salarion * 0.075;
           salliq = salarion - inss;
           perinss = "(- 7,5%)";

        }else  if (salarion > 1045.00 && salarion <= 2089.60){
           inss = salarion * 0.09;
           salliq = salarion - inss;
           perinss = "(- 9%)";

        }else{
           inss = salarion * 0.12;
           salliq = salarion - inss;
           perinss = "(- 12%)";
        
        }

        info.innerHTML = "<b><center>CONTRA CHEQUE</center></b><br><br> "+
                         "<b>Funcionário: </b>" + nome.value + "<br>" +
                         "<b>Cargo: </b>" + cargo.value + "<br>" + 
                         "<b>Salário Atual: </b>" + parseFloat(salario.value) .toFixed(2) + "<br><hr><br>" +
                         "<b>Aumento de Salário: </b>" + perau + "<br>" +
                         "<b>Novo Salário: </b>" + salarion .toFixed(2) + "<br>" +
                         "<b>Desc. INSS: </b>" + perinss + "<br><hr><br>" +
                         "<b>Salário Liq.: </b>" + salliq .toFixed(2) + "<hr>";

    }else{
       alert("Preencha todos os campos.");
    }
     
})   