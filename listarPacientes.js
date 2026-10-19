export default function listarPacientes(pacientes) {
    if (pacientes.length === 0) {
        console.log('Nenhum paciente cadastrado')
        return
    }

    pacientes.forEach((paciente) => {
        console.log(`\nID: ${paciente.id}`)
        console.log(`Nome: ${paciente.nome} (${paciente.idade} anos)`)
        console.log(`CPF: ${paciente.cpf}`)
        console.log(`Alergias: ${paciente.alergias.length === 0 ? 'Nenhuma' : paciente.alergias.join(' | ')}`)
    })
}