let proximoId = 1

function adiocionarLinha(){
    //entrada de valores do formlário
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const admissao = document.getElementById("admissao").value;
    const demissao = document.getElementById("demissao").value;

    //se for preenchido vazio
    if(nome === '' || idade === '' || admissao === ''){
        alert("Preencha os valores do formulário!")
    }

    //cria uma linha se não existir
    const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];

    //inserindo uma nova linha
    constnovaLinha = tabela.insertRow;

    //inserindo os valores da linha
    const celId = novaLinha.insertCell(0);
    const celNome = novaLinha.insertCell(1);
    const celIdade = novaLinha.insertCell(2);
    const celAdmissao = novaLinha.insertCell(3);
    const celDemissao = novaLinha.insertCell(4);

    //inserindo os valores dentro das celulas
    CellId.innerHTML = proximoId;
    cellNome.innerHTML = nome;
    cellIdade.innerHTML = idade;
    cellAdmissao.innerHTML = admissao;
    cellDemissao.innerHTML = demissao;

    proximoI++

    //limpar formulário
    document.getElementById("linhaForm").reset ();
}