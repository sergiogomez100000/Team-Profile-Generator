const jest = require("jest")// to run test in test file
const { test, expect } = require("@jest/globals")
const Manager = require("./lib/manager");



test("expect Manager to be object", ()=>{
    const e = new Manager();
    expect(typeof(e)).toBe("object");
});
test("expect to return manager's name", ()=> {
    const name = "Sergio"
    const e = new Manager(name)
    expect(e.name).toBe(name);
});
test("expect to return number", ()=>{
    const id = 01
    const e = new Manager(id)
    expect(e).toBe(id);
})
test("expect to return email",()=>{
    const email = "sergiogomezz100000@gmail.com"
    const e = new Intern(email)
    expect(e).toBe(email);
})
test("expect to return office number", ()=>{
    const office = 101
    const e = new Manager(officenumber)
    expect(e).toBe(office)
})
test("expect to return manager", ()=> {
    const role= "Manager"
    const e = new Manager(role)
    expect(e).toBe(role)
});
// tests get methods
test("can get office number with getofficeNumber() method", () =>{
    const officeNumber = 101;
    const e = new Employee("Sergio", 77, officeNumber);
    expect(e.getSchool()).toBe(school);
})
test("can get role with getRole() method", () =>{
    const e = new Employee("Sergio", 77, "sergiogomez100000@gmail.com");
    expect(e.getRole()).toBe("Manager");
    
})