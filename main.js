function firstFunction() {
    var a = 20;
    console.log(a);
}

firstFunction();

function printPerson(person) {
   
    console.log(`${person.name} ${person.lastName}`);
}

var person = {
    name: "Yamid",
    lastName: "Cueto"
}

printPerson(person);

function printFunction(fn) {
    fn();
}

printFunction(function(){
    console.log("Print anonymous function");
});