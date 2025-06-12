import { BankAccount } from "./BankAccount";
import { Person } from "./Person";

//subclass - herdando da BankAccount - expressa relacionamento do tipo "é um" entre 2 objetos
export class CurrentAccount extends BankAccount {
  private overdraftLimit: number;

  constructor(
    person: Person,
    initialBalance: number,
    accountNumber: string,
    overdraftLimit: number
  ) {
    super(person, initialBalance, accountNumber);
    this.overdraftLimit = overdraftLimit;
  }

  override withdraw(amount: number): void {
    const totalLimit = this._balance + this.overdraftLimit;

    if (amount > 0 && totalLimit >= amount) {
      this._balance -= amount;
      this.logSuccessWithDraw(amount);
    } else {
      this.logInvalidWithDraw();
    }
  }
}
