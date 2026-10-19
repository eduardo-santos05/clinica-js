import fs from "node:fs"

export default function relatorioPacientes(pacientes) {
    let relatorio = '--- Relatório da clínica ---\n'
    let totalPacientes = pacientes.length
    if (totalPacientes === 0) {
        relatorio += 'Nenhum paciente cadastrado.'
        fs.appendFileSync("relatorio.txt", relatorio, "utf8")
        return
    }
}