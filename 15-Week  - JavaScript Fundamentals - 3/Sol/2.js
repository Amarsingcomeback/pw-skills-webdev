// define student imformation objects
let studentImformations = {
  name: "Amar sing",
  age: 20,
  grade: "C",
};

// define updateStudentGrade functions
function updateStudentGrade(grade = studentImformations.grade) {
  studentImformations.grade = grade;
  console.log(studentImformations.grade);
}

// calling updatestudentGradeS
updateStudentGrade("A");
