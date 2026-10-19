import fs from "node:fs"

export default function relatorioPacientes(pacientes) {
    let relatorio = '--- Relatório da clínica ---\n'
    let totalPacientes = pacientes.length
    if (totalPacientes === 0) {
        relatorio += 'Nenhum paciente cadastrado.'
        fs.appendFileSync("relatorio.txt", relatorio, "utf8")
        return
    }
    let somaIdade = 0
    let pacienteMaisVelhoNome
    let pacienteMaisVelhoIdade = 0
    let qtdPacientesAlergia = 0

    for (let i = 0; i < pacientes.length; i++) {
        somaIdade += pacientes[i].idade
        if (pacientes[i].idade > pacienteMaisVelhoIdade) {
            pacienteMaisVelhoNome = pacientes[i].nome
            pacienteMaisVelhoIdade = pacientes[i].idade
        }
        if (pacientes[i].alergias.length > 0) {
            qtdPacientesAlergia ++
        }
    }
    let mediaIdade = somaIdade / pacientes.length
    
}