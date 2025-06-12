import { BankAccount } from "./banking/BankAccount";
import { CurrentAccount } from "./banking/CurrentAccount";
import { Person } from "./banking/Person";
import { SavingsAccounts } from "./banking/SavingsAccount";

function main() {
  const maria = new Person("Maria", "da Silva", new Date("1990-10-10"));

  // Agora maria não é apenas uma conta qualquer,
  // mas continua herdando as operações da BankAccount
  // const mariaAccount = new BankAccount(maria, 100, "123");
  const mariaAccount = new SavingsAccounts(maria, 100, "123", 10);

  mariaAccount.addInterest();

  const lucas = new Person("Lucas", "Nogueira", new Date("1990-11-10"));
  const lucasAccount = new CurrentAccount(maria, 100, "123", 50);

  mariaAccount.withdraw(150);
  lucasAccount.withdraw(150);

  // Toda SavingsAccounts/CurrentAccunt é uma BankAccount, mas nem toda BankAccount é uma SavingsAccounts/CurrentAccunt
  function transaction(
    sender: BankAccount,
    receiver: BankAccount,
    amount: number
  ): void {
    if (amount > 0 && amount <= sender.balance) {
      sender.withdraw(amount);
      receiver.deposit(amount);
      console.log("Transaction successful");
    } else {
      console.log("Transaction failed: insufficient funds or invalid amount");
    }
  }

  // transaction(mariaAccount);
}

main();
