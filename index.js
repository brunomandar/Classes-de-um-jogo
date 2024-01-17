class hero{
    constructor(name, age, type, attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack
    }
}

let myHero = new hero("Swordman", 47, "guerreiro", "espada")

console.log("o " + myHero.type + " atacou usando " + myHero.attack)