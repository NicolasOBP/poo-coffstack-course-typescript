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
