const Employee= require("./employee");//imports employee class

class Engineer extends Employee {// creates eng class but uses employee class to get soome info
    constructor(name,id,email,Github){//creates constructor taking in name, id, email, github
        super(name,id,email);// gets name, email , id from employee class
        this.Github = Github;// this refers to engineer
    }
    getGithub(){//function to get github
        return this.Github
    }
    getRole(){// function to get role
        return "Engineer"
    }
}

module.exports = Engineer// can export engineer class