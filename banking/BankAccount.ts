import { Person } from "./Person";

//supper class - classe principal
export class BankAccount {
  private holder: Person; // composition (composiçaõ) - expressa relacionamento do tipo "contem um" entre 2 objetos
  protected _balance: number;
  private accountNumber: string;

  constructor(person: Person, balance: number, accountNumber: string) {
    this.holder = person;
    this._balance = balance;
    this.accountNumber = accountNumber;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(
        `Deposited $${amount} into the account. Now balance is $${this._balance}`
      );
    } else {
      console.log("Amount must be greater than 0");
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && this._balance >= amount) {
      this._balance -= amount;
      this.logSuccessWithDraw(amount);
    } else {
      this.logInvalidWithDraw();
    }
  }

  protected logSuccessWithDraw(amount: number) {
    console.log(
      `Withdrew $${amount} from the account. New balance is $${this._balance}`
    );
  }

  protected logInvalidWithDraw() {
    console.log("Invalid withdraw amount or insufficient funds");
  }

  get balance(): number {
    return this._balance;
  }

  get accountDetails(): string {
    return `Account number: ${this.accountNumber}\nAccount holder: ${this.holder.fullName}\nBalance: ${this._balance}`;
  }
}
