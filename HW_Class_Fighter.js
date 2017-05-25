class Fighter {
    constructor(name = "First", power = 2, health = 100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }
    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }
    setDamage(damage) {
        this.health -= damage;
        console.log(`health of ${this.name}: ${this.health}`);
    }
}

class improvedFighter extends Fighter {
    doubleHit(enemy, point) {
        super.hit(enemy, point *= 2);
    }
}

function fight(Fighter, improvedFighter, ...point) {

    let randomIndex = (point) => Math.floor(Math.random() * point.length);

    for (i = 0; Fighter.health > 0 && improvedFighter.health > 0; i++) {
        Fighter.hit(improvedFighter, point[randomIndex(point)]);
        improvedFighter.doubleHit(Fighter, point[randomIndex(point)]);
    }
    
    if (Fighter.health <= 0) {
        console.log(`The winner is: ${improvedFighter.name}; His power is: ${improvedFighter.power}`);
    } else if (improvedFighter.health <= 0) {
        console.log(`The winner is: ${Fighter.name}; His power is: ${Fighter.power}`);
    } else if (Fighter.health <= 0 && improvedFighter.health <= 0) {
        console.log(`Draw!`);
    }
}

let fighter = new Fighter("Venom", 3, 380);
let bestFighter = new improvedFighter("Spider", 2, 280);
fight(fighter, bestFighter, 2, 4, 5, 6);
