let listaAlunos = []
let idCounter = 0 // Variável para gerar IDs únicos
let alunoEditando = null // Variável para armazenar o aluno sendo editado

function cadastrarAluno() {
    // Captura dados da página
    let nome = document.getElementById("nome").value
    let dataNasc = document.getElementById("dataNasc").value
    let curso = document.getElementById("curso").value

    // Verifica se os campos estão preenchidos
    if (nome && dataNasc && curso) {
        if (alunoEditando === null) {
            // Cria um novo aluno a partir dos dados capturados, com ID único
            let aluno = { id: idCounter++, nome: nome, dataNasc: dataNasc, curso: curso }
            
            // Adiciona aluno na lista
            listaAlunos.push(aluno)
            
            // Notifica usuário
            document.getElementById("msg").innerHTML = "<p class='text-success'>Aluno cadastrado com sucesso!</p>"
        } else {
            // Edita o aluno existente
            alunoEditando.nome = nome
            alunoEditando.dataNasc = dataNasc
            alunoEditando.curso = curso

            // Limpa a variável alunoEditando após edição
            alunoEditando = null

            document.getElementById("msg").innerHTML = "<p class='text-success'>Aluno editado com sucesso!</p>"
            document.getElementById("btn-cadastrar").innerHTML = "Cadastrar" // Resetando o botão para "Cadastrar"
        }

        // Limpar campos
        document.getElementById("nome").value = ''
        document.getElementById("dataNasc").value = ''
        
        mostrarAlunos()
    } else {
        document.getElementById("msg").innerHTML = "<p class='text-danger'>Por favor, preencha todos os campos.</p>"
    }
}

function mostrarAlunos() {
    // Limpar tabela antes de adicionar os alunos
    document.getElementById("tabelaAlunos").innerHTML = "";

    // Percorrer a lista de alunos
    listaAlunos.forEach(aluno => {
        // Cria uma linha na tabela pra cada aluno
        document.getElementById("tabelaAlunos").innerHTML += `
            <tr id="aluno-${aluno.id}">
                <td>${aluno.nome}</td>
                <td>${aluno.dataNasc}</td>
                <td>${aluno.curso}</td>
                <td>
                    <button class="btn btn-danger" onclick="excluirAluno(${aluno.id})">
                        <i class="fa fa-trash"></i> Excluir
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary" onclick="editarAluno(${aluno.id})">Editar</button>
                </td>
            </tr>
        `;
    });
}


function excluirAluno(id) {
    // Filtra a lista para remover o aluno com o ID especificado
    listaAlunos = listaAlunos.filter(aluno => aluno.id !== id)
    
    // Remove a linha da tabela correspondente
    document.getElementById(`aluno-${id}`).remove()

    // Atualiza a mensagem de feedback
    document.getElementById("msg").innerHTML = "<p class='text-success'>Aluno removido com sucesso!</p>"
}

function editarAluno(id) {
    // Encontra o aluno pelo ID
    alunoEditando = listaAlunos.find(aluno => aluno.id === id)

    // Carrega os dados do aluno nos campos de entrada
    document.getElementById("nome").value = alunoEditando.nome
    document.getElementById("dataNasc").value = alunoEditando.dataNasc
    document.getElementById("curso").value = alunoEditando.curso

    // Muda o texto do botão "Cadastrar" para "Salvar"
    document.getElementById("btn-cadastrar").innerHTML = "Salvar"
}






// function mostrarAlunos() {
    // const tabelaAlunos = document.getElementById("tabelaAlunos");
    // tabelaAlunos.innerHTML = ''; // Limpa o conteúdo anterior
    
    // listaAlunos.forEach(aluno => {
        // tabelaAlunos.innerHTML += `
        // <div class="card">
            // <div class="card-body">
                // <h4 class="card-title">${aluno.nome}</h4>
//                 <h6 class="card-title">${aluno.dataNasc}</h6>
//                 <h6 class="card-title">${aluno.curso}</h6>
//             </div>
//         </div>
//         `;
//     });
// }


