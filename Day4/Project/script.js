const students = [
    { name: 'john', score: 84.6 },
    { name: 'sarah', score: 72.3 },
    { name: 'mike', score: 91.8 },
    { name: 'linda', score: 67.4 },
    { name: 'tom', score: 45.5 }
  ];
  
  const output = document.getElementById("output");
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  let display = "";
  
  students.forEach(student => {
    const name = capitalize(student.name);
    const score = Math.round(student.score);
    display += `${name}: ${score}\n`;
  });
  
  const statuses = students.map(student => {
    const rounded = Math.round(student.score);
    return rounded >= 50 ? "Pass" : "Fail";
  });
  
  display += `\nStatuses:\n`;
  students.forEach((student, index) => {
    display += `${capitalize(student.name)}: ${statuses[index]}\n`;
  });
  
  display += `\nCongratulations:\n`;
  for (let student of students) {
    const name = capitalize(student.name);
    const score = Math.round(student.score);
    if (score >= 75) {
      display += `Well done, ${name}! You scored ${score}.\n`;
    }
  }
  
  output.textContent = display;
  