const Employee = require("./employee");// imports employee class

class Intern extends Employee {// creates intern class but uses employee class to get some info
    constructor(name, id, email, school) {// createsa constructor taking in, name, id, email, and school
        super(name,id,email);// gets name, email, id from employee class
        this.school = school;// this refers to intern
    }
    getSchool(){// creates func to get school
        return this.school;
    }

    getRole(){// creates func to get get role
        return "Intern"
    }
}

module.exports = Intern//can export intern