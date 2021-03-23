const { test, expect } = require("@jest/globals")
const Employee =require("../lib/employee")// imports employee class

//tests to get info from employee
test("Can instantiate Employee instance", () => {//test to make sure new Employee is an obj
    const e = new Employee();//give var for new Employee constructor
    expect(typeof(e)).toBe("object");// expects the type of newEmployee to be an obj
});

test("expect to return employee name", () =>{ //test to make sure newEmployee returns name
    const name = "Sergio";// creates var for test name
    const e = new Employee(name);// creates var for newEmployee constructor
    expect(e.name).toBe(name);// expects newEmployee name to be equaal to test name
});
test("expect to return id number", ()=>{
    const id = 1;
    const e = new Employee("Sergio", id);
    expect(e.id).toBe(id);
})
test("expect to return employee email", ()=>{
    const email= "sergiogomez100000@gmail.com"
    const e = new Employee("Sergio", 1, email)
    expect(e.email).toBe(email);
})
test("expect to return employee role",()=>{
    const type ="Employee"
    const e = new Employee("Sergio",2, "sergiogomez100000@gmail.com")
    expect(e.getRole()).toBe(type)

})

//test the get methods
test("can get name with getName() method", () =>{
const name = "Sergio";
const e = new Employee(name, 77, "sergiogomez100000@gmail.com");
expect(e.getName()).toBe(name);
})
test("can get id with getId() method", () =>{
    const id = 7;
    const e = new Employee("Sergio", id, "sergiogomez100000@gmail.com");
    expect(e.getId()).toBe(id);
})
test("can get email with getEmail() method", () =>{
    const email = "sergiogomez100000@gmail.com";
    const e = new Employee("Sergio", 77, email);
    expect(e.getEmail()).toBe(email);
})
test("can get role with getRole() method", () =>{
    const e = new Employee("Sergio", 77, "sergiogomez100000@gmail.com");
    expect(e.getRole()).toBe("Employee");
    
})