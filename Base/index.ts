console.log("TypeSctipt Works");

// let numArr: number[] = [1, 2, 3, 4, 5];
// console.log(numArr);
// numArr.push(100500);
// console.log(numArr);

// let strArr: string[] = ["C++", "JS", ".NET"];
// console.log(strArr);

// let mixedArr: [boolean, number, string, string] = [
//   true,
//   44,
//   "Stiven",
//   "Sinior",
// ];

// console.log(mixedArr);

type Person = {
  name: string;
  age: number;
  skills: string[];
  showSkills: () => string[];
  showPerson?: () => void;
};

let person: Person = {
  name: "Bill",
  age: 56,
  skills: [],
  showSkills(): string[] {
    return this.skills;
  },
  showPerson(): void {
    console.log(
      "Name: ",
      this.name,
      "\nAge: ",
      this.age,
      "\nSkills: ",
      this.skills
    );
  },
};

// person.skills = ["C++", "JS", "CSS"];
// person.showSkills();
// person.showPerson();

type User = { login: string; password: string };

const user: User = {
  login: "bob",
  password: "qwertywefewfwef",
};

function LogIn(user: User): void {
  console.log("Login: ", user.login, "\nPassword: ", user.password);
}

LogIn(user);

let test: any = 10;
console.log("test = ", test);
test = "Rest";
console.log("test = ", test);
