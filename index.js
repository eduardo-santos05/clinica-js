import PromptSync from "prompt-sync"

import pacientes from './pacientes.js'
import adicionarPaciente from './adicionarPaciente.js'
import listarPacientes from "./listarPacientes.js"
import atualizarPaciente from "./atualizarPaciente.js"
import removerPaciente from "./removerPaciente.js"

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
        case '1': {
            let cpf = prompt('CPF: ').trim()
            let nome = prompt('Nome: ').trim()
            let idade = Number(prompt('Idade: ').trim())
            let alergias = []
            let temAlergia = prompt('Tem alergia? (sim/nao): ').trim().toLowerCase()
            if (temAlergia === 'sim') {
                let alergia = prompt('Alergia: ').trim()
                if (alergia !== '') {
                    alergias.push(alergia)
                }
                    
                while (temAlergia === 'sim') {
                    temAlergia = prompt('Outra alergia? (sim/nao): ').trim().toLowerCase()
                    if (temAlergia === 'sim') {
                        alergia = prompt('Alergia: ').trim()
                        if (alergia !== '') {
                            alergias.push(alergia)
                        }
                    }
                }
            }

            if (adicionarPaciente(pacientes, {cpf, nome, idade, alergias}))
                console.log('Paciente cadastrado com sucesso!')
            
            break
        }
            
        case '2': {
            listarPacientes(pacientes)
            break
        }
        
        case '3': {
            let id = Number(prompt('ID do paciente: ').trim())
            let novoNome = prompt('Novo nome (Enter para manter): ').trim()
            let novaIdade = prompt('Nova idade (Enter para manter): ').trim()
            let novasAlergias = []
            let trocarAlergias = prompt('Trocar as alergias? (sim/nao): ').trim().toLowerCase()
            if (trocarAlergias === 'sim') {
                let alergia = prompt('Alergia: ').trim()
                if (alergia !== '') {
                    novasAlergias.push(alergia)
                }
                let temOutraAlergia = 'sim'
                while (temOutraAlergia === 'sim') {
                    temOutraAlergia = prompt('Outra alergia? (sim/nao): ').trim().toLowerCase()
                    if (temOutraAlergia === 'sim') {
                        alergia = prompt('Alergia: ').trim()
                        if (alergia !== '') {
                            novasAlergias.push(alergia)
                        }
                    }
                }
            }

            if (atualizarPaciente(pacientes, id, {nome: novoNome, idade: novaIdade === '' ? undefined : Number(novaIdade), alergias: novasAlergias })) {
                console.log('Paciente atualizado com sucesso!')
            }

            break
        }

        case '4': {
            let cpf = prompt('CPF do paciente: ')
            let confirmacao = prompt('Tem certeza? (sim/nao): ').trim().toLowerCase()
            if (confirmacao === 'sim') {
                removerPaciente(pacientes, cpf)
            } else {
                console.log('Remoção cancelada.')
            }
            break
        }
            
        case '0': {
            console.log('Até logo!')
            break
        }
            
        default: {
            console.log('Opção inválida!')
            break
        }  
    }
} while(opcao !== '0')