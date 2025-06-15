# Projeto de Estudos: Programação Orientada a Objetos com TypeScript

Este projeto foi desenvolvido como parte de um estudo aprofundado sobre Programação Orientada a Objetos (POO) utilizando TypeScript. O objetivo principal é aplicar e demonstrar os conceitos teóricos aprendidos em um cenário prático de um sistema bancário simples.

O repositório contém implementações que exploram diferentes abordagens de design, como **Herança** e **Composição**, permitindo uma comparação direta entre elas.

## 🚀 Princípios de POO Utilizados
O código neste repositório aplica os seguintes princípios da Programação Orientada a Objetos:

1. **Abstração**
2. **Encapsulamento**
3. **Herança**
4. **Polimorfismo**
5. **Composição**
6. **Interfaces (Contratos)**
7. **Classes Abstratas**
8. **Membros Estáticos**

## 📂 Estrutura do Projeto

O projeto está organizado em duas abordagens principais para demonstrar os conceitos de Herança e Composição:

```
.
├── banking/
│   ├── BankAccount.ts        # Classe base para contas
│   ├── CreditCard.ts         # Exemplo de método de pagamento
│   ├── CurrentAccount.ts     # Conta Corrente (herda de BankAccount)
│   ├── PaymentMethod.ts      # Interface para métodos de pagamento
│   ├── Person.ts             # Classe para representar uma pessoa
│   ├── ProcessPayment.ts     # Classe que utiliza polimorfismo
│   └── SavingsAccount.ts     # Conta Poupança (herda de BankAccount)
│
├── bankingCompositon/
│   ├── CompositionBankAccount.ts # Conta que USA uma estratégia de saque
│   └── WithdrawStrategy.ts   # Interface/Classe para a estratégia de saque (Composição)
│
├── index.ts                  # Ponto de entrada para executar o exemplo com HERANÇA
├── indexComposition.ts       # Ponto de entrada para executar o exemplo com COMPOSIÇÃO
├── package.json
├── package-lock.json
└── tsconfig.json
```

-   **`banking/`**: Contém as classes que demonstram a abordagem tradicional com **Herança**, onde `CurrentAccount` e `SavingsAccount` herdam de uma `BankAccount` base.
-   **`bankingCompositon/`**: Contém as classes que demonstram a abordagem com **Composição**, favorecendo a flexibilidade ao compor um objeto `CompositionBankAccount` com uma `WithdrawStrategy`.
-   **`index.ts` e `indexComposition.ts`**: São os arquivos principais para executar e testar cada uma das abordagens separadamente.

## 🛠️ Como Executar

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
-   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
    cd SEU-REPOSITORIO
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Instale o `ts-node` para executar os arquivos TypeScript diretamente (se ainda não o tiver):**
    ```bash
    npm install -g ts-node
    ```

4.  **Execute os exemplos:**

    -   Para ver a implementação com **Herança**:
        ```bash
        ts-node index.ts
        ```

    -   Para ver a implementação com **Composição**:
        ```bash
        ts-node indexComposition.ts
        ```

---

Feito por **Nícolas Oliveira Baptista Pereira**.
