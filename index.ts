import { Person } from "./Person";

function main() {
  const maria = new Person("Maria", "da Silva", new Date("1990-10-10"));

  //   maria.isBirthDayPassed(); protected method. Only Submembers can use

  console.log(maria);
  console.log(maria.getFullName());
}

main();
