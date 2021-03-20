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

    // const showEngineer
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => showManager(manager))
        //.join("")
    );

    // do the same thing for interns and engineers EXCEPT ONE MORE STEP
        //.join("")
    
    return html.join("");
}

module.exports = team => {
   // return your whole html file EXCEPT for where you show your cards
    // template literal for showTeam(team);
    return `
    
    
    `
}