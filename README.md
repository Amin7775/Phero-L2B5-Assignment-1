# What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enums is also known as enumerations. In typeScript is provides a way to define a set of named constants. They make code more readable and type-safe. Especially when we are working on a fixed set of options like days of a week , names of students , roles etc. 

### Why use enums?

Without enums , we might find ourselves using plain strings or numbers.

example : 

function setRole(role : string){
    if(role === "admin"){
        ...
    }
}


But this is error prone . why ? 

Because misspelling admin as "adimn" will not be caught at the input time. so , the code becomes harder to maintain which isn't what we want while using typeScript. 

Enums on the other hand have prefixed values. So , at the compile time it wont cause any invalid values problem and make the code more documented and easier to maintain. 

### Numeric Enums

Numeric enums are default in TS and they auto increment starting from 0 . 

example : 

enum Direction {
    Up,
    Down , 
    Left , 
    Right 
}

const res1 = Direction.Up;
console.log(res1)  // Output : 0

const res2 = Direction.Down;
console.log(res2)  // Output : 1


### String Enums

String enums are basically string literals assigned to each member. They are useful for meaningful value like roles , responses , logs etc. 

example : 

enum UserRole {
    Admin = "ADMIN"
    user = "USER"
}

function checkAdminAccess(role: UserRole){
    if(role === UserRole.Admin){
        console.log("Granted Access")
    }
}

checkAdminAccess(UserRole.Admin)
---------------------------------------------------

# How does TypeScript help in improving code quality and project maintainability?

TypeScript is a language that extents javaScript with extra features. It Improves code quality , catches bugs earlier and boosts project maintainability. It can be said that TypeScripts is the main difference between chaos and clean code. 

TypeScript brings type safety to js . it also adds types , interfaces , enums , classes etc which are needed for better code quality. 

### Benefits of TypeScript : 

- Early Bug Fixing : It catches errors at compile time which saves hours or debugging.

- Improved Autocomplete and intelliSense : As Ts knows our types , it returns smarter suggestions on the editor which brigs a lot of efficiency while coding. 

- Consistency in Data : With the use of types and  interfaces , handling data becomes easier. Because they force our data to follow the structure of types and interfaces. 

- Self-Documenting the code : Types make code easier to understand . Reading the function signatures or the types is enough have a grasp of code and how things are working.

- Better Collaboration : With TypeScript , developers know what types are expected and miscommunications between the developers get lower as a result. As a result , progressing becomes faster and number of bugs reduced. 


### Final Thoughts

TypeScript is not about writing more code. It never was. It's about writing better , safer and easier to maintain codes. 

Weather we are building side projects or a scalable SaaS product, it sets the foundation of our codebase and helps with long-term success of the project. 