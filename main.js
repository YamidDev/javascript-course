function getRandom() {
    return Math.random();
}

function getName() {
    return "Yamid";
}

function isGreatherThan(){
    if( getRandom() > 0.5 ){
        return true;
    }else{
        return false;
    }
}

function createPerson(name, lastName) {
    return {
        name: name,
        lastName: lastName
    }
}

var person2 = createPerson("Yamid", "Perez");
console.log(`${person2.name} ${person2.lastName}`);


function createFunction() {
    return (creator)=>{
        console.log(`I was created! by: ${creator}`);
        return ()=>console.log("I am the Second Function");
    } 
}

var person = {
    name: "Yamid",
    lastName: "Cueto"
}

var newFunction = createFunction();
var otherFunction = newFunction(person.name);
otherFunction();

function firstFunction() {
    var a = 20;
    console.log(a);
}

firstFunction();

function printPerson(person) {
   
    console.log(`${person.name} ${person.lastName}`);
}

printPerson(person);

var myFunction = function(){
    console.log("My Function print");
}

function printFunction(fn) {
    fn();
}

printFunction(function(){
    console.log("Print anonymous function");
});
printFunction(myFunction);