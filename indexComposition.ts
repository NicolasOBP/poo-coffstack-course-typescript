import { CompositionBankAccount } from "./bakingComposition/CompositionBankAccount";
import {
  OverdraftWithdraw,
  StandardWithdraw,
} from "./bakingComposition/WithdraStrategy";
import { Person } from "./banking/Person";

function main() {
  const maria = new Person("Maria", "da Silva", new Date("1990-10-10"));
  const mariaAccount = new CompositionBankAccount(
    maria,
    100,
    "123",
    new StandardWithdraw()
  );

  const lucas = new Person("Lucas", "Nogueira", new Date("1990-11-10"));
  const lucasAccount = new CompositionBankAccount(
    lucas,
    100,
    "123",
    new OverdraftWithdraw(100)
  );

  function transaction(
    sender: CompositionBankAccount,
    receiver: CompositionBankAccount,
    amount: number
  ): void {
    try {
      sender.withdraw(amount);
      receiver.deposit(amount);
      console.log("Transaction successful");
    } catch (error) {
      console.log(error.message);

      console.log("Transaction failed: insufficient funds or invalid amount");
    }
  }

  transaction(lucasAccount, mariaAccount, 200);
}

main();
