//Include packages and mods 
const inquirer = require("inquirer");
const fs = require("fs");// need fs
const Manager= require("lib\Manager")
const Engineer= require("lib\engineer.js")
const Intern = require("lib\intern.js")
const path = require("path");
//const generateHtml = require("dist/team-roster.html")/// maybe put in dist folder, name t-r.html?

const OUTPUT_DIR = path.resolve(__dirname, "dist");  // creates string path to the dist folder
const OutputPath = path.join(OUTPUT_DIR, "basetemplate.html");  // takes in string and adds the /basetemplate.html

// import the template in the src folder
//create an array of questions for input, maybe make dif array of questions for dif roles?
const questions = [{//first array of questions
    name:"Name",
    message: "What is your Team Manager's name?",
    type: "input",
},
{
    name:"Id",
    message: "What is your employee ID?",
    type:"number",
},
{
    name:"Email",
    message:"What is your email address",
    type:"input",
},
{
    name:"Office",
    message:"What is your office number?",
    type:"number",
},
{
    name:"Menu",
    message:"What you like to do?",
    type:"list",
    choices:["Add Engineer","Add Intern","Finish"],
}]
const engineerQuestions ={
    name: "Github",
    message:"What is your Githb username?",
    type:"input"
}
const internQuestions = {
    name:"School",
    message:"What is your School?",
    type:"input"
}

// empty array for team members
const teamMems = [];
// empty array for ids
const ids = [];


// inquirer.prompt(questions)
// .then(response =>{
//     console.log(response)
// //take to classes?
// })

// might want to wrap in an init function but don't have to

function createManager() {
    inquirer.prompt(questions)
        .then(answers => {
            const manager = new Manager(answers.Name, answers.Id, answers.Email, answers.OfficeNumber);
            teamMems.push(manager);
            ids.push(answers.Id);
            // createTeam();
        })
}

// createEngineer

// createIntern

// createTeam
    // another inquirer.prompt asking which type of team member to create
        // .then
            // if case for each answer selection
                // call the function
                // or just build out the team

// build team
    // check if the files exists
    // write the new file with the info