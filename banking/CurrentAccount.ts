import { BankAccount } from "./BankAccount";
import { PaymentMethod } from "./PaymentMethod";
import { Person } from "./Person";

//subclass - herdando da BankAccount - expressa relacionamento do tipo "é um" entre 2 objetos
export class CurrentAccount extends BankAccount implements PaymentMethod {
  private overdraftLimit: number;
  accountType = "Current Account";

  constructor(person: Person, initialBalance: number, overdraftLimit: number) {
    super(person, initialBalance);
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

  pay(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient balance for transaction");
    } else {
      this._balance -= amount;
      console.log(`✅ Payment of $${amount} made successfully`);
    }
  }

  getBalance(): number {
    return this._balance;
  }
}
