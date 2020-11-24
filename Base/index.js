console.log("TypeSctipt Works");
var person = {
    name: "Bill",
    age: 56,
    skills: [],
    showSkills: function () {
        return this.skills;
    },
    showPerson: function () {
        console.log("Name: ", this.name, "\nAge: ", this.age, "\nSkills: ", this.skills);
    }
};
var user = {
    login: "bob",
    password: "qwertywefewfwef"
};
function LogIn(user) {
    console.log("Login: ", user.login, "\nPassword: ", user.password);
}
LogIn(user);
var test = 10;
console.log("test = ", test);
test = "Rest";
console.log("test = ", test);
