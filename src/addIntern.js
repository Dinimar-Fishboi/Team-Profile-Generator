
function addIntern(data) {
    return `
    <div class="card shadow">
    <div class="card-header bg-info">
      Intern
    </div>
    <div class="card-body">
      <h4 class="card-title">${data.internName}</h4>
      <p class="card-text">Employee ID: ${data.internID}</p>
      <p class="card-text">School: ${data.internSchool}</p>
      <a href="mailto:${data.internEmail}" class="card-link">${data.internEmail}</a>
    </div>
  </div>
    `
}


module.exports = addIntern;
