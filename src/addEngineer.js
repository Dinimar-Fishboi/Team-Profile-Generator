

function addEngineer(data) {
    return `
    <div class="card shadow">
        <div class="card-header bg-info ">
          Engineer
        </div>
        <div class="card-body">
          <h4 class="card-title">${data.engineerName}</h4>
          <p class="card-text">Employee ID: ${data.engineerID}</p>
          <a href="mailto:${data.engineerEmail}" class="card-link">${data.engineerEmail}</a>
          <a href="${data.engineerGithub}" class="card-link">${data.engineerGithub}</a>
        </div>
      </div>
    `
}

module.exports = addEngineer;