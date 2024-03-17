export default function getListStudentIds(studentList) {
  // Check if the argument is an array
  if (!Array.isArray(studentList)) {
    return [];
  }

  // Use the map function to extract ids from the array of objects
  return studentList.map((student) => student.id);
}
