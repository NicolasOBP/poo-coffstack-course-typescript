export class Person {
  private _firstName: string;
  private lastName: string;
  private birthDate: Date;

  constructor(firstName: string, lastName: string, birthDate: Date) {
    this._firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(firstName: string) {
    if (firstName.length > 0) {
      this._firstName = firstName;
    }
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number {
    const today = new Date();
    const age = today.getFullYear() - this.birthDate.getFullYear();

    return this.isBirthDayPassed() ? age : age - 1;
  }

  protected isBirthDayPassed(): boolean {
    const today = new Date();

    return (
      today.getMonth() > this.birthDate.getMonth() ||
      (today.getMonth() === this.birthDate.getMonth() &&
        today.getDate() >= this.birthDate.getDate())
    );
  }
}
