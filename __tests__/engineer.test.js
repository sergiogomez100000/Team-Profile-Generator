
const { test, expect } = require("@jest/globals")
const Engineer =require("../lib/engineer")// imports employee class

// "can *set* Github account via Engineer Constructor"
test("expect to return github", ()=>{
    const github = "sergiogomez100000"
    const e = new Engineer("Sergio", 1, "sergiogomez100000@gmail.com",github)
    expect(e.Github).toBe(github);
})

//test the get methods
test("can get github username with getGithub() method", () =>{
        const github = "sergiogomez100000";
        const e = new Engineer("Sergio", 77,"sergiogomez100000@gmail.com", github);
        expect(e.getGithub()).toBe(github);
})
test("can get role with getRole() method", () =>{
        const testrole= "Engineer";
        const e = new Engineer("Sergio", 77, "sergiogomez100000@gmail.com","sergiogomez100000");
        expect(e.getRole()).toBe(testrole);
        
})
