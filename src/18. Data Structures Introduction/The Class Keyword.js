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

  static EnrollStudents() {
    return "ENROLLING STUDENTS!";
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

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // only Class itself can use it
  // e.g. Point.distance(a, b)
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(p1);

console.log(Point.distance(p1, p2));
console.log(Student.EnrollStudents());
