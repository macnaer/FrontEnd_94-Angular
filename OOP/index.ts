console.log("TypeSctipt Works");

abstract class Driver {
  constructor(protected name: string, protected age: number) {
    this.name = name;
    this.age = age;
  }

  get Age(): number {
    return this.age;
  }

  set Age(age: number) {
    if (age <= this.age) {
      console.log("Error ");
    } else {
      this.age = age;
    }
  }

  public getDriverInfo(): void {
    console.log("Drver name: ", this.name, "\nAge: ", this.age);
  }
}

// const driver1 = new Driver("Derek", 30);
// driver1.getDriverInfo();
// const driver2 = new Driver("Bob", 45);
// driver2.getDriverInfo();
// driver2.Age = 1;
// console.log("Age = ", driver2.Age);

interface ILisence {
  category: string;
  permit: boolean;
  PrisonCheck(): boolean;
}

interface ITest {}

class TruckDriver extends Driver implements ILisence, ITest {
  constructor(
    protected name: string,
    protected age: number,
    private experriance: number
  ) {
    super(name, age);
    this.experriance = experriance;
  }
  category = "E";
  permit = true;
  PrisonCheck(): boolean {
    return true;
  }

  public getDriverInfo(): void {
    console.log(
      "Drver name: ",
      this.name,
      "\nAge: ",
      this.age,
      "\nExp: ",
      this.experriance,
      "\nCategory: ",
      this.category,
      "\nPermit: ",
      this.permit
    );
  }

  // CheckWorkingDay<T>(data: T): void {
  //   console.log("To dinner left.. ", data, " hours");
  // }

  CheckWorkingDay(data: number | string): void {
    console.log("To dinner left.. ", data, " hours");
  }
}

let dimas = new TruckDriver("Dimas", 56, 61);
dimas.getDriverInfo();
console.log("Prison check => ", dimas.PrisonCheck());
dimas.CheckWorkingDay("three");
