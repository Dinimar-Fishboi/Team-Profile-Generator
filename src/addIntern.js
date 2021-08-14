
function addIntern(newIntern) {
    return `
    <div class="card shadow">
    <div class="card-header bg-info">
      Intern
    </div>
    <div class="card-body">
      <h4 class="card-title">${newIntern.employeeName}</h4>
      <p class="card-text">Employee ID: ${newIntern.employeeID}</p>
      <p class="card-text">School: ${newIntern.internSchool}</p>
      <a href="mailto:${newIntern.employeeEmail}" class="card-link">${newIntern.employeeEmail}</a>
    </div>
  </div>
    `
}


module.exports = addIntern;
