# 🎉 Calculadora Simples em Node.js

> Mini projeto desenvolvido durante o programa **Bolsa Futuro Digital** da **Softex**  
> Aprendendo **Node.js** e reforçando conceitos de **lógica de programação**, **funções** e **tratamento de erros**.

---

## 💻 Sobre o Projeto

A **Calculadora Simples** realiza as 4 operações matemáticas básicas:

| Operação        | Símbolo |
|-----------------|---------|
| Adição          | ➕      |
| Subtração       | ➖      |
| Multiplicação   | ✖️      |
| Divisão         | ➗      |

✅ Funciona direto no **terminal**, pedindo números e operação, e retornando o resultado na hora.

---

## 🛠 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript no servidor  
- **prompt-sync** – Biblioteca para capturar entrada do usuário via terminal  

---

## 📂 Estrutura do Código

O projeto é organizado em funções:

- `somar(a, b)` → Adição  
- `subtrair(a, b)` → Subtração  
- `multiplicar(a, b)` → Multiplicação  
- `dividir(a, b)` → Divisão (com proteção contra divisão por 0)  
- `lerNumero(mensagem)` → Garante que o usuário digite apenas números válidos  
- `calculadora()` → Função principal que controla o fluxo  

---

## ⚠️ Tratamento de Erros

1. **Entrada inválida (não numérica)**  
   - Exibe:
   ```text
   ⚠️ Valor inválido! Digite um número válido.
2. Solicita o número novamente.

Divisão por zero

Exibe:
   ```text
🚫 Erro: não é possível fazer divisão por 0!
   ```
▶️ Como Executar

1. Instale o Node.js → Node.js Download

2. Clone o repositório ou copie o código para uma pasta

3. Instale o prompt-sync:
 ```text
npm install prompt-sync
   ```
4. Execute a calculadora:
 ```text
node calculadora.js
   ```
📌 Exemplo de Uso
 ```text
  ==============================
 Bem-vindo - Calculadora Simples
==============================

Operações disponíveis: +  -  *  /
Digite a operação (ou 'sair' para encerrar): +
Digite o primeiro número: 10
Digite o segundo número: 5
Resultado: 10 + 5 = 15
```

🎯 Objetivos de Aprendizado

Praticar entrada e saída de dados no terminal

Estruturar código usando funções

Validar entradas e tratar erros

Trabalhar com loops e condições

## 📈 Melhorias Futuras
- Implementar histórico de operações
- Permitir múltiplas operações em sequência
- Suporte a exponenciação e raiz quadrada
- Interface gráfica simples

✍️ Autor

Lucas Gabriel

Programa: Bolsa Futuro Digital – Softex

  


