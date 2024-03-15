export default function getStudentsByLocation(studentList, city) {
  // Use the filter function to filter students by location
  return studentList.filter((student) => student.location === city);
}
