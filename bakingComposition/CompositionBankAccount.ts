import { Person } from "../banking/Person";
import { WithdrawStrategy } from "./WithdraStrategy";

export class CompositionBankAccount {
  private holder: Person;
  private _balance: number;
  private accountNumber: string;
  private withDrawStrategy: WithdrawStrategy;

  constructor(
    person: Person,
    initialBalance: number,
    accountNumber: string,
    withDrawStrategy: WithdrawStrategy
  ) {
    this.holder = person;
    this._balance = initialBalance;
    this.accountNumber = accountNumber;
    this.withDrawStrategy = withDrawStrategy;
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
    if (this.withDrawStrategy.canWithdraw(this._balance, amount)) {
      this._balance = this.withDrawStrategy.executeWithdraw(
        this._balance,
        amount
      );
      this.logSuccessWithDraw(amount);
    } else {
      throw new Error(this.logInvalidWithDraw());
    }
  }

  get balance(): number {
    return this._balance;
  }

  get accountDetails(): string {
    return `Account number: ${this.accountNumber}\nAccount holder: ${this.holder.fullName}\nBalance: ${this._balance}`;
  }

  protected logSuccessWithDraw(amount: number) {
    console.log(
      `Withdrew $${amount} from the account. New balance is $${this._balance}`
    );
  }

  protected logInvalidWithDraw(): string {
    return "Invalid withdraw amount or insufficient funds";
  }
}
