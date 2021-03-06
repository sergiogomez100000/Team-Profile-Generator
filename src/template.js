const { generate } = require("rxjs");
const teamMems = require("..");

const showTeam = teamMems => {// creates showTeam function using team info
    // where the html template goes
    
    const showManager = manager => {// creates showM func with manager info, returns htmtl format to create html
        return `
        <div class="card container is-fluid column col-4">
        <div class="card-header">Name: ${manager.getName()}</div>
        <div class="card-header">Role: ${manager.getRole()}</div>
        <div class="card-content">ID: ${manager.getId()}</div>
        <div class="card-content">Office#:${manager.getofficeNumber()}</div>
        <div class="card-content"><a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()} </a></div>
    </div>
        `
    }
    const showEngineer = engineer => {// reaturns html format with temp literals to plug in info
        return `
        <div class="card container is-fluid column col-4">
        <div class="card-header">Name: ${engineer.getName()}</div>
        <div class="card-header">Role: ${engineer.getRole()}</div>
        <div class="card-content">ID: ${engineer.getId()}</div>
        <div><a href="https://www.github.com/${engineer.getGithub()}" target="_blank" >${engineer.getGithub()}</a></div>
        <div class="card-content"><a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()} </a></div>
    </div>
        `
    }
    const showIntern = intern => {
        return `
        <div class="card container is-fluid column col-4">
        <div class="card-header">Name: ${intern.getName()}</div>
        <div class="card-header">Role: ${intern.getRole()}</div>
        <div class="card-content">ID: ${intern.getId()}</div>
        <div class="card-content">School:${intern.getSchool()}</div>
        <div class="card-content"><a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()} </a></div>
    </div>
        `
    }
    const html = [];// empty array for html

    html.push(teamMems// pushes team to html bt have to filter and map 
        .filter(employee => employee.getRole() === "Manager")// filter only for managers
        .map(manager => showManager(manager))// creates new array  with evry new manager
        //.join("")
    );

    // do the same thing for interns and engineers EXCEPT ONE MORE STEP
    html.push(teamMems// pushes team to html but has to filter map join 
        .filter(employee=> employee.getRole()=== "Engineer")//filter for enginners
        .map(engineer => showEngineer(engineer))// create new array with engineers
        .join("")// joins to html
    
    );
    html.push(teamMems// pushe team to html but has to filter map join
        .filter(employee => employee.getRole()==="Intern")//filter for intern
        .map(intern => showIntern(intern))// creates new array with interns
        .join("")//joins html
    );
    return html.join("");//joins all to hmtml
}

const showHtml = teamMems => {
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
       ${showTeam(teamMems)}
    
    </body>
    </html>
    
    
    `
}
module.exports = showHtml;