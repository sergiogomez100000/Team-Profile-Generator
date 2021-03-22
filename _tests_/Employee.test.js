const { test, expect } = require("@jest/globals")
const jest = require("jest")// to run test in test file
const Employee =require("./lib/employee")// imports employee class

//tests to get info from employee
test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("expect to return employee name", () =>{ 
    const name = "Sergio";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});
test("expect to return id number", ()=>{
    const id = 01;
    const e = new Employee("Sergio", id);
    expect(e.id).toBe(id);
})
test("expect to return employee email", ()=>{
    const email= "sergiogomez100000@gmail.com"
    const e = new Employee("Sergio", 01, email)
    expect(e.email).toBe(email);
})
test("expect to return employee role",()=>{
    const type ="employee"
    const e = new Employee(role)
    expect(e).toBe("Employee")

})

//test the get methods
test("can get name with getName() method", () =>{
const name = "Sergio";
const e = new Employee(name, 77, "sergiogomez100000@gmail.com");
expect(e.getName()).toBe(name);
})
test("can get id with getId() method", () =>{
    const id = 007;
    const e = new Employee("Sergio", id, "sergiogomez100000@gmail.com");
    expect(e.getId()).toBe(id);
})
test("can get email with getEmail() method", () =>{
    const email = "sergiogomez100000@gmail.com";
    const e = new Employee("Sergio", 77, email);
    expect(e.getRole()).toBe(email);
})
test("can get role with getRole() method", () =>{
    const e = new Employee("Sergio", 77, "sergiogomez100000@gmail.com");
    expect(e.getRole()).toBe("Employee");
    
})