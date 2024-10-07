let proximoId = 1

function adicionarLinha() {
    const id = document.getElementById("A").value;
    const marca = document.getElementById("B").value;
    const segmento = document.getElementById("C").value;
    const valor = document.getElementById("X").value;

    if (A === '' || B === '' || C === '') {
        alert("Preencha as incógnitas do formulário!")}
    if ( X === '1,2'){
            alert("O X apenas pode valer 1 ou 2")
    } else {

        const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];

        const novaLinha = tabela.insertRow();

        const celId = novaLinha.insertCell(0);
        const celA = novaLinha.insertCell(1);
        const celB = novaLinha.insertCell(2);
        const celC = novaLinha.insertCell(3);
        const celX = novaLinha.insertCell(4);

        celId.innerHTML = proximoId;
        celA.innerHTML = id;
        celB.innerHTML = marca;
        celC.innerHTML = segmento;
        celX.innerHTML = valor;

        proximoId++

        document.getElementById("linhaForm").reset();
    }
}