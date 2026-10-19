export default function atuyalizarPaciente(pacientes, id, novosDados) {
    const indice = pacientes.findIndex((paciente) => paciente.id === id)

    if (indice === -1) {
        console.log('Erro: Paciente não encontrado!')
        return false
    }

    pacientes[indice].nome = novosDados.nome || pacientes[indice].nome

    pacientes[indice].idade = novosDados.idade || pacientes[indice].idade  

    if (novosDados.alergias && novosDados.alergias.length > 0) {
        pacientes[indice].alergias = novosDados.alergias || pacientes[indice].alergias
    }
}