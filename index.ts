import { Person } from "./Person";

function main() {
  const maria = new Person("Maria", "da Silva", new Date("1990-10-10"));

  //   maria.isBirthDayPassed(); protected method. Only Submembers can use

  console.log(maria);

  maria.firstName = "Maira Claer";

  console.log(maria.fullName);

  console.log(maria);
}

main();
