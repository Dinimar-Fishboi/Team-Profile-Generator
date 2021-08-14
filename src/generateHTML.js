function generateManager(thisIsTheManager){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./src/style.css">
    <title>Team Profile</title>
</head>
<header>
 <H1> TEAM PROFILE</H1>
</header>
<body>
   <div class="staff">
    <div class="card shadow">
        <div class="card-header bg-info ">
          Manager
        </div>
        <div class="card-body">
          <h4 class="card-title">${thisIsTheManager.managerName}</h4>
          <p class="card-text">Employee ID: ${thisIsTheManager.managerEmployeeID}</p>
          <p class="card-text">Office: ${thisIsTheManager.managerOffice}</p>
          <a href="mailto:${thisIsTheManager.managerEmail}" class="card-link">${thisIsTheManager.managerEmail}</a>
        </div>
      </div>
    `
}

// function addEngineer(data) {
//     return `
//     <div class="card shadow">
//         <div class="card-header bg-info ">
//           Engineer
//         </div>
//         <div class="card-body">
//           <h4 class="card-title">${data.engineerName}</h4>
//           <p class="card-text">Employee ID: ${data.engineerID}</p>
//           <a href="mailto:${data.engineerEmail}" class="card-link">${data.engineerEmail}</a>
//           <a href="${data.engineerGithub}" class="card-link">${data.engineerGithub}</a>
//         </div>
//       </div>
//     `
// }

// function addIntern(data) {
//     return `
//     <div class="card shadow">
//     <div class="card-header bg-info">
//       Intern
//     </div>
//     <div class="card-body">
//       <h4 class="card-title">${data.internName}</h4>
//       <p class="card-text">Employee ID: ${data.internID}</p>
//       <p class="card-text">School: ${data.internSchool}</p>
//       <a href="mailto:${data.internEmail}" class="card-link">${data.internEmail}</a>
//     </div>
//   </div>
//     `
// }

// function closeRanks() {
//     return `
//     </div>
//     </body>
// <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
// </html>
//     `
// }

module.exports = generateManager;
// module.exports = addEngineer;
// module.exports = addIntern;
// module.exports = closeRanks;