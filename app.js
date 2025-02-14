// 1. Declara a variável que armazenará os amigos e os amigos sorteados
let amigos = [];
let amigosSorteados = [];

// 2. Função para adicionar amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const inputNome = document.getElementById('amigo');
    const nomeAmigo = inputNome.value.trim();

    // Validação para garantir que o campo não esteja vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Verifica se o amigo já foi adicionado
    if (amigos.includes(nomeAmigo)) {
        alert("Este amigo já foi adicionado.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    inputNome.value = "";

    // Atualiza a lista de amigos na interface
    exibirAmigos();
}

// 3. Função para exibir os amigos na lista HTML
function exibirAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpa a lista existente para evitar duplicação
    listaAmigos.innerHTML = "";

    // Percorre o array de amigos e cria um <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

// 4. Função para sortear um amigo secreto aleatório
function sortearAmigo() {
    // Verifica se todos os amigos já foram sorteados
    if (amigos.length === amigosSorteados.length) {
        alert("Todos os amigos já foram sorteados.");
        return;
    }

    // Gera um índice aleatório
    let indiceSorteado;
    let amigoSorteado;

    // Enquanto o amigo sorteado já tiver sido sorteado antes, sorteia novamente
    do {
        indiceSorteado = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceSorteado];
    } while (amigosSorteados.includes(amigoSorteado));

    // Marca o amigo como sorteado
    amigosSorteados.push(amigoSorteado);

    // Exibe o resultado na interface
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
