🎉 Calculadora Simples em Node.js

Mini projeto desenvolvido durante o programa Bolsa Futuro Digital da Softex
Aprendendo Node.js e reforçando conceitos de lógica de programação, funções e tratamento de erros.

💻 Sobre o Projeto

A Calculadora Simples realiza as 4 operações matemáticas básicas:

Operação	Símbolo
Adição	➕
Subtração	➖
Multiplicação	✖️
Divisão	➗

✅ Funciona direto no terminal, pedindo números e operação, e retorna o resultado na hora.

🛠 Tecnologias Utilizadas

Node.js – Ambiente de execução JavaScript no servidor

prompt-sync – Captura entrada do usuário via terminal

📂 Estrutura do Código

O projeto é organizado em funções:

somar(a, b) → Adição

subtrair(a, b) → Subtração

multiplicar(a, b) → Multiplicação

dividir(a, b) → Divisão (com proteção contra divisão por 0)

lerNumero(mensagem) → Garante que o usuário digite apenas números válidos

calculadora() → Função principal que controla o fluxo

⚠️ Tratamento de Erros

Entrada inválida (não numérica)

Exibe:

Valor inválido! Digite um número válido.


Solicita o número novamente.

Divisão por zero

Exibe:

Erro: não é possível fazer divisão por 0!


Impede a operação inválida.

▶️ Como Executar

Instale o Node.js: Node.js Download

Clone o repositório ou copie o código para uma pasta

Instale o prompt-sync:

npm install prompt-sync


Execute a calculadora:

node calculadora.js

📌 Exemplo de Uso
Bem-vindo - Calculadora Simples -

Operações disponíveis: +  -  *  /
Digite a operação (ou 'sair' para encerrar): +
Digite o primeiro número: 10
Digite o segundo número: 5
Resultado: 10 + 5 = 15

🎯 Objetivos de Aprendizado

Praticar entrada e saída de dados no terminal

Estruturar código usando funções

Validar entradas e tratar erros

Trabalhar com loops e condições

✍️ Autor

Lucas Gabriel
Programa: Bolsa Futuro Digital – Softex
Aprendizado: Fundamentos de Node.js