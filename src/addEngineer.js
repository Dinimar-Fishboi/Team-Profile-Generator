

function addEngineer(newEngineer) {
    return `
    <div class="card shadow">
        <div class="card-header bg-info ">
          Engineer
        </div>
        <div class="card-body">
          <h4 class="card-title">${newEngineer.employeeName}</h4>
          <p class="card-text">Employee ID: ${newEngineer.employeeID}</p>
          <p><a href="mailto:${newEngineer.employeeEmail}" class="card-link">${newEngineer.employeeEmail}</a></p>
          <p><a href="${newEngineer.githubUrl}" class="card-link">GitHub Portfolio</a></p>
        </div>
      </div>
    `
}

module.exports = addEngineer;