export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // Filter the student list to get students from the specified city
  const studentsInCity = studentList.filter((student) => student.location === city);

  // Map through the students in the city and update their grades
  const updatedStudents = studentsInCity.map((student) => {
    // Find the corresponding grade object for the student, if it exists
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

    // If the grade object exists, assign the grade to the student, otherwise set it to N/A
    const grade = gradeObject ? gradeObject.grade : 'N/A';

    // Return a new student object with the updated grade
    return { ...student, grade };
  });

  return updatedStudents;
}
