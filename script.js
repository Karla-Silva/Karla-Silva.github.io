var i=0;
clientes=[];

function inputResultado(divatual,index){
    document.getElementById(divatual).innerHTML+=
    `<br>
    <input type="text" placeholder="O negócio foi fechado? Escreva aqui o feedback do cliente" name="input" id="input-resposta-${index}">
    <br>
    <button id="confirmar-resultado-${index}" class="botao">Confirmar</button>`

    document.getElementById(`confirmar-resultado-${index}`).addEventListener("click", function(){
        clientes[index].Resultado=document.getElementById(`input-resposta-${index}`).value;
        document.getElementById(divatual).innerHTML="";
        document.getElementById("resultado").innerHTML+=
        `<div id="resultado-${index}">
        Nome: ${clientes[index].Nome} <br>
        E-mail: ${clientes[index].Email} <br>
        Telefone: ${clientes[index].Telefone} <br>
        Necessidades: ${clientes[index].Necessidades}<br>
        Proposta: ${clientes[index].Proposta}<br>
        Resultado: ${clientes[index].Resultado}
        </div>`
    })
}

function inputProposta(divatual,index){
    document.getElementById(divatual).innerHTML+=
    `<br>
    <input type="text" placeholder="Escreva aqui a proposta a ser enviada para o cliente" name="input" id="input-proposta-${index}">
    <br>
    <button id="confirmar-proposta-${index}" class="botao">Confirmar</button>`

    document.getElementById(`confirmar-proposta-${index}`).addEventListener("click", function(){
        clientes[index].Proposta=document.getElementById(`input-proposta-${index}`).value;
        document.getElementById(divatual).innerHTML='';
        document.getElementById('proposta').innerHTML+=
        `<div id="proposta-${index}">
        Nome: ${clientes[index].Nome} <br>
        E-mail: ${clientes[index].Email} <br>
        Telefone: ${clientes[index].Telefone} <br>
        Necessidades: ${clientes[index].Necessidades}<br>
        Proposta: ${clientes[index].Proposta}<br>
        <button onclick="inputResultado('proposta-${index}',${index})" class="botao">Resultado</button>
        </div>`
    })
}

function inputNecessidades(divatual,index){
    document.getElementById(divatual).innerHTML+=
    `<br>
    <input type="text" placeholder="Escreva aqui as necessidades do cliente" name="input" id="input-necessidades-${index}">
    <br>
    <button id="confirmar-necessidades-${index}" class="botao">Confirmar</button>`

    document.getElementById(`confirmar-necessidades-${index}`).addEventListener("click", function(){
        clientes[index].Necessidades=document.getElementById(`input-necessidades-${index}`).value;
        document.getElementById(divatual).innerHTML="";
        document.getElementById('necessidades').innerHTML+=
        `<div id="necessidades-${index}">
        Nome: ${clientes[index].Nome} <br>
        E-mail: ${clientes[index].Email} <br>
        Telefone: ${clientes[index].Telefone} <br>
        Necessidades: ${clientes[index].Necessidades}<br>
        <button onclick="inputProposta('necessidades-${index}',${index})" class="botao">Elaborar proposta</button>
        </div>`
    })
}

/* Página vendas */
    /* Adicionar cliente */
document.getElementById("adicionar-cliente").addEventListener("click", function(){
    document.getElementById("criando-cliente").innerHTML+=
    `<div>
    <label for="nome"><b>Nome</b></label>
    <br>
    <input type="text" placeholder="Nome" name="nome" id="nome">
    <br>
    <label for="e-mail"><b>E-mail</b></label>
    <br>
    <input type="text" placeholder="xxxx@email.com" name="e-mail" id="email">
    <br>
    <label for="telefone"><b>Telefone</b></label>
    <br>
    <input type="text" placeholder="99 99999-9999" name="telefone" id="telefone">
    <br>
    <button id="confirmar-cliente" class="botao">Confirmar</button>
    </div>`
    
    /* Botão confirmar */

    document.getElementById("confirmar-cliente").addEventListener("click", function(){
        /* Adicionar o cliente no array */
        clientes[i] = {
            Nome: document.getElementById("nome").value,
            Email: document.getElementById("email").value,
            Telefone: document.getElementById("telefone").value,
            Necessidades: "",
            Proposta: "",
            Resultado: "",
        }

        /* Colocar na div clientes-cadastrados */
        document.getElementById("clientes-cadastrados").innerHTML+=
        `<div id="C${i}"> 
            Nome: ${clientes[i].Nome} <br>
            E-mail: ${clientes[i].Email} <br>
            Telefone: ${clientes[i].Telefone} <br>
            <button onclick="inputNecessidades('C${i}','${i}')" class="botao">Adicionar necessidades</button>
        </div>`

        /* Apagar o formulário */
        document.getElementById("criando-cliente").innerHTML="";
        
        /* Botão add-necessidades */

    i++
    })
})