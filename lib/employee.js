class Employee {//creates class for all employees
    constructor(name,id,email){// creates constructor that takes in name, id, email
        this.name= name;//this refers to employee
        this.id= id;
        this.email= email;
    }
    getName(){//creates func to get name
        return this.name
    }
    getId(){//creates func to get id
        return this.id
    }
    getEmail(){//creates func to get email
        return this.email
    }
    getRole(){//creates func to get role
        return "Employee";
    }
}

module.exports = Employee;// can export employee class