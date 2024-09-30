let proximoId = 1

function adicionarLinha() {
    const id = document.getElementById("id").value;
    const marca = document.getElementById("marca").value;
    const segmento = document.getElementById("segmento").value;
    const valor = document.getElementById("valor").value;
    const data = document.getElementById("data").value;

    if (id === '' || marca === '' || segmento === '' || valor === '') {
        alert("Preencha os valores do formulário!")
    } else {

        const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];

        const novaLinha = tabela.insertRow();

        const celId = novaLinha.insertCell(0);
        const celID = novaLinha.insertCell(1);
        const celMarca = novaLinha.insertCell(2);
        const celSegmento = novaLinha.insertCell(3);
        const celValor = novaLinha.insertCell(4);
        const celData = novaLinha.insertCell(5);

        celId.innerHTML = proximoId;
        celID.innerHTML = id;
        celMarca.innerHTML = marca;
        celSegmento.innerHTML = segmento;
        celValor.innerHTML = valor;
        celData.innerHTML = data;

        proximoId++

        document.getElementById("linhaForm").reset();
    }
}