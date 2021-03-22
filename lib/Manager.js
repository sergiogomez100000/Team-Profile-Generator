const Employee = require("lib\employee.js");//imports employee class

class Manager extends Employee {//creates manager class but uses employee class to get some info
    constructor(name, id, email, officeNumber) {// creates constructor func taking in name, id , email, office num
        super(name,id,email);//gets name, id ,email from employee class
        this.officeNumber = officeNumber;//this refers to manager
    }
    getofficeNumber(){//creates func to get office number
        return this.officeNumber;
    }

    getRole(){// creates func to get role
        return "Manager"
    }
}

module.exports = Manager;//exports manager class


