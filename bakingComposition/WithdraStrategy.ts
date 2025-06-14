// interface (contratos) - conjunto de atributos e métodos que deve ser implementado
// pela classe.
// Não possui implementação, programar "orientado a interface" deixa o código mais
// flexivel e desaclopado
// Pilar de abstração - lidar com ideias ao invés de objetos concretos
export interface WithdrawStrategy {
  canWithdraw(balance: number, amount: number): boolean;
  executeWithdraw(balance: number, amount: number): number;
}

// Modelo saque padrão
export class StandardWithdraw implements WithdrawStrategy {
  canWithdraw(balance: number, amount: number): boolean {
    return amount > 0 && balance >= amount;
  }

  executeWithdraw(balance: number, amount: number): number {
    return balance - amount;
  }
}

// Modelo saque com limite
export class OverdraftWithdraw implements WithdrawStrategy {
  private overdraftLimit: number;

  constructor(overdraftLimit: number) {
    this.overdraftLimit = overdraftLimit;
  }

  canWithdraw(balance: number, amount: number): boolean {
    return amount > 0 && balance + this.overdraftLimit >= amount;
  }

  executeWithdraw(balance: number, amount: number): number {
    return balance - amount;
  }
}
