// 1. Declara a variável que armazenará os amigos
let amigos = [];

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
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Por favor, adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na interface
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
