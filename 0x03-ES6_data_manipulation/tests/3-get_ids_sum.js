export default function getStudentIdsSum(studentList) {
  // Use the reduce function to sum up all the student ids
  return studentList.reduce((sum, student) => sum + student.id, 0);
}
