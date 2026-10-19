import PromptSync from "prompt-sync"

import pacientes from './pacientes.js'
import adicionarPaciente from './adicionarPaciente.js'

const prompt = PromptSync()

function exibirMenu() {
    console.log('\n==== CLÍNICA LIONS MED ====')
    console.log('1 - Cadastrar paciente')
    console.log('2 - Listar pacientes')
    console.log('3 - Atualizar paciente')
    console.log('4 - Remover paciente')
    console.log('5 - Relatório')
    console.log('0 - Sair')
}

let opcao

do {
    exibirMenu()
    opcao = prompt('Escolha uma opção: ')

    switch (opcao) {
        case '1':
            let cpf = prompt('CPF: ').trim()
            let nome = prompt('Nome: ').trim()
            let idade = Number(prompt('Idade: ').trim())
            let alergias = []
            let temAlergia = prompt('Tem alergia? (sim/nao): ').trim().toLowerCase()
            if (temAlergia === 'sim') {
                let alergia = prompt('Alergia: ').trim()
                alergias.push(alergia)
                while (temAlergia === 'sim') {
                    temAlergia = prompt('Outra alergia? (sim/nao): ').trim().toLowerCase()
                    if (temAlergia === 'sim') {
                        alergia = prompt('Alergia: ').trim()
                        alergias.push(alergia)
                    }
                }
            }

            if (adicionarPaciente(pacientes, {cpf, nome, idade, alergias}))
                console.log('Paciente cadastrado com sucesso!')

            break
        case '0':
            console.log('Até logo!')
            break
        default:
            console.log('Opção inválida!')
            break
    }
} while(opcao !== '0')