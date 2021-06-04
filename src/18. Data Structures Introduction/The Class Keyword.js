class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}

let firstStudent = new Student("Jonghyeon", "Ko", 3);
let secondStudent = new Student("Cheolsoo", "Kim", 4);

console.log(firstStudent);
console.log(secondStudent);
console.log(firstStudent.firstName);

firstStudent.firstName = "Jonkyky";

console.log(firstStudent.firstName);
