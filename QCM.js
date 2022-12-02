//Objet : deux manières de rajouter un attribut :
Object.keys = "Valeurs"
let xxx = Object.create(yyyy)


//Objet : comment boucle-t-on sur un objet ? 
//for .... in 
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}


//Objet : rajouter deux méthode de 2 manières différentes : 

// Methode:1
class Person {
    constructor(fName, lName) {
       this.firstName = fName;
       this.lastName = lName;
    }
    sayName = function() {
    return `My Name is ${this.firstName} ${this.lastName}`
    }
 }
 const firstPerson= new Person ("Sidi", "CISSE")
 console.log(firstPerson.sayName())
// Methode : 2

// je sais plus

//Objet : à partir de l'objet suivant, renvoyez un tableau comportant uniquement les clés de l'objet :
const obj = {
    width : '10px',
    height : '10px',
    color : 'red'
};
console.log(Object.keys(obj))


//Class : écrivez une class (prenom, nom, age) et instanciez vous !

class Person {
    constructor(fName, lName, Age) {
       this.firstName = fName;
       this.lastName = lName;
       this.Age = Age;
    }
    sayName = function() {
    return `My Name is ${this.firstName} ${this.lastName} i'm old ${this.Age}`
    }
 }
 const firstPerson= new Person ("Sidi", "CISSE",40)
 //console.log(firstPerson.sayName())

//Ecrivez une sous-classe (possible de réutiliser la classe ci dessus)
class Study extends Person {
    constructor(Université,fName,lName, Age){
        super(fName,lName,Age);
        this.Université = Université;
    }
        sayName1 = function () {
        return `My Name is ${this.firstName} ${this.lastName} i'm old ${this.Age} and i study ${this.Université}`
        }
        
        
    
};
const firstPerson1= new Study ("Sidi", "CISSE",40, "Matrice")
 console.log(firstPerson1.sayName1())

//Les 4 cas où la console renvoie undefined 

