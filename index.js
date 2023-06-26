function compareStudents(a, b) {
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1;
  } else if (
    a.chemistryMarks + a.biologyMarks <
    b.chemistryMarks + b.biologyMarks
  ) {
    return 1;
  }

  if (a.biologyMarks > b.biologyMarks) {
    return -1;
  } else if (a.biologyMarks < b.biologyMarks) {
    return 1;
  }

  const dateA = new Date(a.dateOfBirth.split('-').reverse().join('-'));
  const dateB = new Date(b.dateOfBirth.split('-').reverse().join('-'));
  if (dateA > dateB) {
    return 1;
  } else if (dateA < dateB) {
    return -1;
  }

  return 0;
}

const students = [
  {
    name: 'rohit',
    chemistryMarks: 80,
    biologyMarks: 90,
    dateOfBirth: '15-05-2000',
  },
  {
    name: 'ankit',
    chemistryMarks: 75,
    biologyMarks: 85,
    dateOfBirth: '18-06-2000',
  },
  {
    name: 'priyanshu',
    chemistryMarks: 80,
    biologyMarks: 85,
    dateOfBirth: '15-05-2000',
  },
];

students.sort(compareStudents);

console.log(students);
