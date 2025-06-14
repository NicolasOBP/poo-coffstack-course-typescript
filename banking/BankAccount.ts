import { Person } from "./Person";

//supper class - classe principal
//Classe abstrata - base para outras classes, não pode ser instanciada
// Metodos podem ser concretos (com implementaçaõ) ou abstratos (como interface)
export abstract class BankAccount {
  private holder: Person; // composition (composiçaõ) - expressa relacionamento do tipo "contem um" entre 2 objetos
  protected _balance: number;
  private accountNumber: string;

  private static nextAccountNumber: number = 1;

  constructor(person: Person, balance: number) {
    this.holder = person;
    this._balance = balance;
    this.accountNumber = BankAccount.generataAccountNumber();
  }

  private static generataAccountNumber(): string {
    return (this.nextAccountNumber++).toString().padStart(6, "0");
  }

  /**Add commentMore actions
   * Statistical method to validate an account number.
   * We consider it valid if it is composed of exactly 6 digits.
   * @param accountNumber
   * @returns if `accountNumber` is valid
   */
  public static validateAccountNumber(accountNumber: string): boolean {
    return /^\d{6}$/.test(accountNumber);
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

  abstract get accountType(): string;
}
