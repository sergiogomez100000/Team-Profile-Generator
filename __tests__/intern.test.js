
const { test, expect } = require("@jest/globals")
const Intern =require("../lib/intern")// imports employee class


test("expect to return school", ()=>{
    const school = "UofA"
    const e = new Intern("Sergio",2,"sergiogomez100000@gmail.com",school)
    expect(e.school).toBe(school)
})

// test get methods
test("can get school name with getSchool() method", () =>{
    const school = "University of Arizona";
    const e = new Intern("Sergio", 77,"sergiogomez100000@gmail.com", school);
    expect(e.getSchool()).toBe(school);
})
test("can get role with getRole() method", () =>{
    const e = new Intern("Sergio", 77, "sergiogomez100000@gmail.com","UofA");
    expect(e.getRole()).toBe("Intern");
})