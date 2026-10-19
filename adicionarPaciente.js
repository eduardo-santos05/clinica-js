export default function adicionarPaciente(pacientes, novoPaciente) {
    for (let i = 0; i < pacientes.length; i++) {
        if (novoPaciente.cpf === pacientes[i].cpf) {
            console.log('Erro: Já existe um paciente com esse CPF!')
            return false
        }
    }
}