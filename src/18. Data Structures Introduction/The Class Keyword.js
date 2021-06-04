class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
}

let firstStudent = new Student("Jonghyeon", "Ko", 3);
let secondStudent = new Student("Cheolsoo", "Kim", 4);

console.log(firstStudent.markLate());

console.log(firstStudent);
console.log(secondStudent);
console.log(firstStudent.firstName);

firstStudent.firstName = "Jonkyky";

console.log(firstStudent.firstName);
console.log(firstStudent.fullName());

secondStudent.addScore(92);
secondStudent.addScore(97);
secondStudent.addScore(30);
secondStudent.addScore(70);
console.log(secondStudent.scores);
console.log(secondStudent.calculateAverage());
