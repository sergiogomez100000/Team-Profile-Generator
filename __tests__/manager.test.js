
const { test, expect } = require("@jest/globals")
const Manager = require("../lib/manager");

// can *set* office number using the manager constructor
test("expect to return office number", ()=>{
    const office = 101
    const e = new Manager("Sergio",2,"sergiogomez100000@gmail.com",office)
    expect(e.officeNumber).toBe(office)
})

// tests *get* methods
test("can get office number with getofficeNumber() method", () =>{
    const officeNumber = 101;
    const e = new Manager("Sergio", 77,"sergiogomez100000@gmail.com", officeNumber);
    expect(e.getofficeNumber()).toBe(officeNumber);
})
test("can get role with getRole() method", () =>{
    const e = new Manager("Sergio", 77, "sergiogomez100000@gmail.com",2);
    expect(e.getRole()).toBe("Manager");
    
})