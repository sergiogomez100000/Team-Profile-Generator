//Include packages and mods
const inquirer = require("inquirer"); //for questions
const fs = require("fs"); //to write hmtl
const Manager = require("./lib/manager.js"); //import Manager class
const Engineer = require("./lib/engineer.js"); //immport Engineer class
const Intern = require("./lib/intern.js"); //import Intern class
const path = require("path"); //create path to html
//const { createReadStream } = require("node:fs");
//const { inherits } = require("node:util");

const OUTPUT_DIR = path.resolve(__dirname, "dist"); // creates string path to the dist folder
const OutputPath = path.join(OUTPUT_DIR, "basetemplate.html"); // takes in string and adds the /basetemplate.html

// import the template in the src folder
const questions = [
  {
    // array of manager questions
    name: "Name",
    message: "What is your team manager's name?",
    type: "input",
  },
  {
    name: "Id",
    message: "What is your team manager's ID?",
    type: "number",
  },
  {
    name: "Email",
    message: "What is your team manager's email address?",
    type: "input",
  },
  {
    name: "Office",
    message: "What is your team manager's office number?",
    type: "number",
  },
];
const engineerQuestions = [
  {
    //array of engineers questions
    name: "Name",
    message: "What is your engineer's name?",
    type: "input",
  },
  {
    name: "Id",
    message: "What is your engineer's ID?",
    type: "number",
  },
  {
    name: "Email",
    message: "What is your engineer's email address",
    type: "input",
  },
  {
    name: "Github",
    message: "What is your engineer's Githb username?",
    type: "input",
  },
  ,
];
const internQuestions = [
  {
    //first array of questions
    name: "Name",
    message: "What is your intern's name?",
    type: "input",
  },
  {
    name: "Id",
    message: "What is your intern's employee ID?",
    type: "number",
  },
  {
    name: "Email",
    message: "What is your intern's email address?",
    type: "input",
  },
  {
    name: "School",
    message: "What is your intern's School?",
    type: "input",
  },
];
// menu questions to add mems to finsh
const menuquestions = {
  name: "Menu",
  message: "What you like to do?",
  type: "list",
  choices: ["Add Manager", "Add Engineer", "Add Intern", "Finish"],
};

// empty array for team members
const teamMems = [];
// empty array for ids
const ids = [];
initialize();
// might want to wrap in an init function but don't have to
function initialize() {
  createManager();
}
function createManager() {
  //function to create manager
  inquirer
    .prompt(questions) //ask questions
    .then((answers) => {
      // data now called answers, creates mnager but running new Mnager class w/ansrs info
      const manager = new Manager(
        answers.Name,
        answers.Id,
        answers.Email,
        answers.OfficeNumber
      );
      teamMems.push(manager); //pushes manager into teamMems array
      ids.push(answers.Id); ///pushes Id info from ansrs into ids array
      createTeam(); //runs create team function
    });
}

// createEngineer
function createEngineer() {
  //function to create engineer
  inquirer
    .prompt(engineerQuestions) //asks eng questions
    .then((answers) => {
      // with info now answers use in function below
      const engineer = new Engineer(
        answers.Name,
        answers.Id,
        answers.Email,
        answers.Github
      );
      teamMems.push(engineer); //creates eng using new Eng class with answers info, pushs into teamM array
      ids.push(answers.Id); // pushes id from answers to ids array
      createTeam(); //runs create team function
    });
}

// createIntern
function createIntern() {
  //func to creat Intrn
  inquirer
    .prompt(internQuestions) //asks Intrn questions
    .then((answers) => {
      //then with data now answers,runs func to create intrn w/ new Intrn class and info
      const intern = new Intern(
        answers.Name,
        answers.Id,
        answers.Email,
        answers.School
      );
      teamMems.push(intern); //pushes intern to teamM array
      ids.push(answers.Id); //pushes Id from answers to ids array
      createTeam(); //runs createTeam function
    });
}

function createTeam() {
  //function to create team
  //ask what type of team member to create, make case for each, and run functions fro each
  inquirer.prompt(menuquestions).then((answers) => {
    console.log(answers.Menu)// ask menuquestions to add teamM or finish
    switch (answers.Menu){ //create switch for every case of choices from answer 
      case "Add Manager": //if Add M cosen
        createManager(); //run create M function
        break; //get outta this
      case "Add Engineer": //if Add E chosen
        createEngineer(); //run create E function
        break; //get out
      case "Add Intern": //if add I chosen
        createIntern(); //run create I function
        break; //get out
      case "Finish": // if Finish chosen
        buildTeam(); // run buildTeamfunction
    }
  });
}
function buildTeam() {//function to build team once evryones added
  let path = "src\template.js";
  try {
    if (fs.existsSync(path)) {
      fs.writeFile(teamMems, "utf8");
    }
  } catch (err) {
    console.error(err);
  }
}

// build team
// check if the files exists
// write the new file with the info
//if i make an array of teamMems and Ids do i export them to 
