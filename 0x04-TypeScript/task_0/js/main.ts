interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const s1: Student = {
  firstName: 'Obada',
  lastName: 'Badee',
  age: 24,
  location: 'Ksa',
}

const s2: Student = {
  firstName: 'Mohamed',
  lastName: 'Ahmed',
  age: 24,
  location: 'Sudan',
}
const studentList: Array<Student> = [s1, s2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.innerText = 'First Name';
th2.innerText = 'Location';

thead.append(th1);
thead.append(th2);

table.append(thead);


studentList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const column1: HTMLTableCellElement = document.createElement('td');
  const column2: HTMLTableCellElement = document.createElement('td');

  column1.innerText = student.firstName;
  column2.innerText = student.location;

  row.append(column1);
  row.append(column2)

  table.append(row);
});

body.append(table)
