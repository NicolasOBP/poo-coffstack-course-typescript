import { BankAccount } from "./BankAccount";
import { Person } from "./Person";

//subclass - herdando da BankAccount - expressa relacionamento do tipo "é um" entre 2 objetos
export class SavingsAccounts extends BankAccount {
  private interestRate: number;

  constructor(
    person: Person,
    initialBalance: number,
    accountNumber: string,
    interestRate: number
  ) {
    super(person, initialBalance, accountNumber);
    this.interestRate = interestRate;
  }

  addInterest() {
    const interest = this.balance * (this.interestRate / 100);
    this.deposit(interest);
    console.log(`Interest added: $${interest}. New balance $${this.balance}`);
  }
}
