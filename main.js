

class Student {
	constructor(name, favoriteSubject, gpa) {
		this.name = name;
		this.favoriteSubject = favoriteSubject;
		this.gpa = gpa;
	}
	studentDescribe() {
		console.log(this.name + " favorite subject is " + this.favoriteSubject + ". " + this.name + " has a gpa of " + this.gpa);
	}
}

class Classroom {
	constructor(professor, roomNumber) {
		this.professor = professor;
		this.roomNumber = roomNumber;
		this.students = [];
	}
	addStudent(student) {
		this.students.push(student);
	}
	studentCount() {
		console.log("There " + pluralize(this.students.length, `is ${this.students.length} student`, `are ${this.students.length} students`) + " in the class");
	}
	studentNames() {
		console.log("Students in professor " + this.professor + "'s class:");
		for(const student of this.students) {
			console.log("- " + student.name);
		}
	}
	classDescribe() {
		console.log("Professor " + this.professor + "'s class is in room " + this.roomNumber + ".  Professor " + this.professor + " has " + this.students.length + pluralize(this.students.length, " student.", " students."));
	}
}

const pluralize = function(count, singular, plural) {
	if(count == 1) {
		return singular;
	} else {
		return plural;
	}
}

let student1 = new Student("Denis Savgir", "Astrophysics", 4.0);
let student2 = new Student("Neil DeGrasse Tyson", "Theoretical Physics", 4.0);

student1.studentDescribe();
student2.studentDescribe();

let firstClass = new Classroom("Stephen Hawking", 420);

firstClass.addStudent(student1);
firstClass.addStudent(student2);

student1.name = "Peter";

firstClass.studentNames();

// change the name of student one to Peter using your instantiated student2
// ^-- I don't know wht you mean by "using your instantiated student2"

// Call firstClass and Chain the studentCount and studentNames methods
// ^-- Not sure what you mean here.  Do you mean firstClass.studentCount().studentNames()?  If so, that doesn't work.