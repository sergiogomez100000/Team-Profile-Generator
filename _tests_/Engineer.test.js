const jest = require("jest")// to run test in test file
const { test, expect } = require("@jest/globals")
const Engineer =require("./lib/engineer")// imports employee class

test("expect Enginner to be object", ()=>{
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
});
test("expect to return engineers name", ()=> {
    const name = "Sergio"
    const e = new Engineer(name)
    expect(e.name).toBe(name);
});
test("expect to return number", ()=>{
    const id = 01
    const e = new Engineer("Sergio",id)
    expect(e.id).toBe(id);
})
test("expect to return email",()=>{
    const email = "sergiogomezz100000@gmail.com"
    const e = new Engineer("Sergio", 01, email)
    expect(e.email).toBe(email);
})
test("expect to return github", ()=>{
    const github = "sergiogomez100000"
    const e = new Engineer("Sergio", 01, github)
    expect(e.github).toBe(github);
})
test("expect to return Engineer", ()=> {
    const role= "Engineer"
    const e = new Engineer(role)
    expect(e).toBe("Engineer")
});
//test the get methods
test("can get github username with getGithub() method", () =>{
        const github = "sergiogomez100000";
        const e = new Employee("Sergio", 77, github);
        expect(e.getGithub()).toBe(github);
})
test("can get role with getRole() method", () =>{
        const e = new Employee("Sergio", 77, "sergiogomez100000@gmail.com");
        expect(e.getRole()).toBe("Engineer");
        
})
