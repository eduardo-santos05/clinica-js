export default function atuyalizarPaciente(pacientes, id, novosDados) {
    const indice = pacientes.findIndex((paciente) => paciente.id === id)
    if (indice === -1) {
        console.log('Erro: Paciente não encontrado!')
        return false
    }
}