const prompt = require('prompt-sync')();

// Funções para operações:
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        console.log("Erro: não é possível fazer divisão por 0!");
        return null;
    } else {
        return a / b;
    }
}

// Ler número válido!
function lerNumero(mensagem) {
    let numero;
    do {
        numero = parseFloat(prompt(mensagem));
        if (isNaN(numero)) {
            console.log("Valor inválido! Digite um número válido.");
        }
    } while (isNaN(numero));
    return numero;
}

// Função principal
function calculadora() {
    console.log("Bem-vindo - Calculadora Simples -");
    
    while (true) {
        console.log("\nOperações disponíveis: +  -  *  /");
        
        // Loop para validar a operação
        let operacao;
        do {
            operacao = prompt("Digite a operação (ou 'sair' para encerrar): ").trim();
            
            if (operacao.toLowerCase() === "sair") {
                console.log("Encerrando a calculadora. Até mais!");
                return; 
            }
            
            if (operacao !== "+" && operacao !== "-" && operacao !== "*" && operacao !== "/") {
                console.log("Operação inválida! Selecione uma operação válida (+, -, *, /)");
            }
        } while (operacao !== "+" && operacao !== "-" && operacao !== "*" && operacao !== "/");
        
        
        const numero1 = lerNumero("Digite o primeiro número: ");
        const numero2 = lerNumero("Digite o segundo número: ");
        
        let resultado;
        let operacaoValida = false;
        
        do {
            switch(operacao) {
                case "+":
                    resultado = somar(numero1, numero2);
                    operacaoValida = true;
                    break;
                case "-":
                    resultado = subtrair(numero1, numero2);
                    operacaoValida = true;
                    break;
                case "*":
                    resultado = multiplicar(numero1, numero2);
                    operacaoValida = true;
                    break;
                case "/":
                    resultado = dividir(numero1, numero2);
                    operacaoValida = true;
                    break;
                default:
                    console.log("Operação inválida! Selecione uma operação correta (+, -, *, /)");
                    operacao = prompt("Digite a operação novamente: ").trim();
                    operacaoValida = false;
                    break;
            }
        } while (!operacaoValida);
        
        if (resultado !== null) {
            console.log(`Resultado: ${numero1} ${operacao} ${numero2} = ${resultado}`);
        }
    }
}

calculadora();