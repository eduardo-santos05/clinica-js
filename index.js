import PromptSync from "prompt-sync"

const prompt = PromptSync()

function exibirMenu() {
    console.log('\n==== CLÍNICA LIONS MED ====')
    console.log('1 - Cadastrar paciente')
    console.log('2 - Listar pacientes')
    console.log('3 - Atualizar paciente')
    console.log('4 - Remover paciente')
    console.log('5 - Buscar paciente pelo nome')
    console.log('6 - Relatório')
    console.log('0 - Sair')
}

let opcao

do {
    exibirMenu()
    opcao = prompt('Escolha uma opção: ')

    switch (opcao) {
        case '0':
            console.log('Até logo!')
            break
        default:
            console.log('Opção inválida!')
            break
    }
} while(opcao !== '0')