// Define the ALXClass first since it's used in creating objects
export class ALXClass {
    constructor(year, location) {
      this._year = year;
      this._location = location;
    }
  
    // Getter for year
    get year() {
      return this._year;
    }
  
    // Getter for location
    get location() {
      return this._location;
    }
  }
  
  // Create instances of ALXClass
  const class2019 = new ALXClass(2019, 'San Francisco');
  const class2020 = new ALXClass(2020, 'San Francisco');
  
  // Define StudentALX
  export class StudentALX {
    constructor(firstName, lastName, alxClass) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._alxClass = alxClass; // Assign the passed class instance
    }
  
    // Getter for full name
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    // Getter for ALXClass
    get alxClass() {
      return this._alxClass;
    }
  
    // Full description of the student
    get fullStudentDescription() {
      return `${this._firstName} ${this._lastName} - ${this._alxClass.year} - ${this._alxClass.location}`;
    }
  }
  
  // Create student instances
  const student1 = new StudentALX('Guillaume', 'Salva', class2020);
  const student2 = new StudentALX('John', 'Doe', class2020);
  const student3 = new StudentALX('Albert', 'Clinton', class2019);
  const student4 = new StudentALX('Donald', 'Bush', class2019);
  const student5 = new StudentALX('Jason', 'Sandler', class2019);
  
  // Export the list of students
  export const listOfStudents = [student1, student2, student3, student4, student5];
  
  console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)
