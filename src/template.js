const { generate } = require("rxjs");

const showTeam = team => {
    // where the html template goes
    
    const showManager = manager => {
        return `
        <div class="card container column col-4">
        <div class="card-header">Name: ${manager.getName()}</div>
        <div class="card-header">Role: ${manager.getRole()}</div>
        <div class="card-content">ID: ${manager.getId()}</div>
        <div class="card-content">Office#:${manager.getOfficeNumber()}</div>
        <div class="card-content">Email: ${manager.getEmail()}</div>
    </div>
        `
    }
    const showEngineer = manager => {
        return `
        <div class="card container column col-4">
        <div class="card-header">Name: ${engineer.getName()}</div>
        <div class="card-header">Role: ${engineer.getRole()}</div>
        <div class="card-content">ID: ${engineer.getId()}</div>
        <div class="card-content">Office#:${engineer.getGithub()}</div>
        <div class="card-content">Email: ${engineer.getEmail()}</div>
    </div>
        `
    }
    const showIntern = manager => {
        return `
        <div class="card container column col-4">
        <div class="card-header">Name: ${intern.getName()}</div>
        <div class="card-header">Role: ${intern.getRole()}</div>
        <div class="card-content">ID: ${intern.getId()}</div>
        <div class="card-content">Office#:${intern.getSchool()}</div>
        <div class="card-content">Email: ${intern.getEmail()}</div>
    </div>
        `
    }
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => showManager(manager))
        //.join("")
    );

    // do the same thing for interns and engineers EXCEPT ONE MORE STEP
    html.push(team
        .filter(employee=> employee.getRole()=== "Engineer")
        .map(engineer => showEngineer(manager))
        .join("")
    
    );
    html.push(team
        .filter(employee => employee.getRole()==="Intern")
        .map(intern => showIntern(intern))
        .join("")
    );
    return html.join("");
}

module.exports = team => {
   // return your whole html file EXCEPT for where you show your cards
    // template literal for showTeam(team);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TeamProfiler</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    </head>
    <body>
        <section class="hero is-link">
            <div class="hero-body container">
              <p class="title">
                Project Name
              </p>
            </div>
        </section>
       ${showTeam(team)}
    
    </body>
    </html>
    
    
    `
}