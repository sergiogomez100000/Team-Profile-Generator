const jest = require("jest")// to run test in test file
const { test, expect } = require("@jest/globals")
const Intern =require("./lib/intern")// imports employee class

test("expect Inter to be object", ()=>{
    const e = new Intern();
    expect(typeof(e)).toBe("object");
});
test("expect to return intern's name", ()=> {
    const name = "Sergio"
    const e = new Intern(name)
    expect(e.name).toBe(name);
});
test("expect to return number", ()=>{
    const id = 01
    const e = new Intern(id)
    expect(e).toBe(id);
})
test("expect to return email",()=>{
    const email = "sergiogomezz100000@gmail.com"
    const e = new Intern(email)
    expect(e).toBe(email);
})
test("expect to return school", ()=>{
    const school = "UofA"
    const e = new Intern(school)
    expect(e).toBe(school)
})
test("expect to return intern", ()=> {
    const role= "Intern"
    const e = new Intern(role)
    expect(e).toBe(role)
});
// test get methods
test("can get school name with getSchool() method", () =>{
    const school = "University of Arizona";
    const e = new Employee("Sergio", 77, school);
    expect(e.getSchool()).toBe(school);
})
test("can get role with getRole() method", () =>{
    const e = new Employee("Sergio", 77, "sergiogomez100000@gmail.com");
    expect(e.getRole()).toBe("Intern");
})