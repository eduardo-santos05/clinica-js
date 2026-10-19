export default function removerPaciente(pacientes, cpf) {
    const indice = pacientes.findIndex((paciente) => paciente.cpf === cpf)

    if (indice === -1) {
        console.log('Erro: Nenhum paciente com esse CPF!')
        return false
    }

    const nome = pacientes[indice].nome
    pacientes[indice].splice(indice, 1)
    console.log(`Paciente ${nome} removido.`)

    return true
}