import { BankAccount } from "./banking/BankAccount";
import { CreditCard } from "./banking/CreditCard";
import { CurrentAccount } from "./banking/CurrentAccount";
import { Person } from "./banking/Person";
import { ProcessPayment } from "./banking/ProcessPayment";
import { SavingsAccounts } from "./banking/SavingsAccount";

function main() {
  // Agora maria não é apenas uma conta qualquer,
  // mas continua herdando as operações da BankAccount
  // Agora BankAccount é Abstrata, não pode ser instanciada
  // const mariaAccount = new BankAccount(maria, 100, "123");

  const maria = new Person("Maria", "da Silva", new Date("1990-10-10"));
  const mariaAccount = new SavingsAccounts(maria, 100, 10);
  const mariaCreditCard = new CreditCard("555 5552", 50);

  mariaAccount.addInterest();

  const lucas = new Person("Lucas", "Nogueira", new Date("1990-11-10"));
  const lucasAccount = new CurrentAccount(lucas, 100, 50);

  const payment = new ProcessPayment(lucasAccount, 100);
  payment.excecute();

  const payment2 = new ProcessPayment(mariaCreditCard, 100);
  payment2.excecute();

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

  transaction(lucasAccount, mariaAccount, 200);

  console.log(lucasAccount.accountType);
  console.log(lucasAccount.accountDetails);
  console.log(mariaAccount.accountType);
  console.log(mariaAccount.accountDetails);
  console.log(BankAccount.validateAccountNumber("12345678"));
}

main();
