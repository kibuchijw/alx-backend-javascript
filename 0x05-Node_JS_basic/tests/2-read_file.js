const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data
      .trim()
      .split('\n')
      .filter((line) => line.length > 0);

    // Check if there are lines to process (excluding the header)
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Parse the header and data lines
    const header = lines[0].split(',');
    const students = lines.slice(1).map((line) => line.split(','));

    // Count the number of students
    console.log(`Number of students: ${students.length}`);

    // Create a dictionary to count students by field
    const fieldCount = {};

    students.forEach((student) => {
      const field = student[header.indexOf('field')];
      const firstname = student[header.indexOf('firstname')];

      if (!fieldCount[field]) {
        fieldCount[field] = [];
      }

      fieldCount[field].push(firstname);
    });

    // Log the number of students in each field
    for (const [field, names] of Object.entries(fieldCount)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}`,
      );
    }
  } catch (error) {
    // Handle errors (e.g., file not found)
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
