export default function adicionarPaciente(pacientes, novoPaciente) {
    for (let i = 0; i < pacientes.length; i++) {
        if (novoPaciente.cpf === pacientes[i].cpf) {
            console.log('Erro: Já existe um paciente com esse CPF!')
            return false
        }
    }

    if (pacientes.length > 0) {
        novoPaciente.id = pacientes[pacientes.length - 1].id + 1
    } else {
        novoPaciente.id = 1
    }
}