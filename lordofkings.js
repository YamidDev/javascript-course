function Player( name ) {
    this.name = name;
    this.healthPoints = 100;
    this.specialPoints = 100;

    this.heal = ( targetPlayer ) => {
        if( this.specialPoints >= 40 ) {
            this.specialPoints -= 40;
            targetPlayer.healthPoints += 20;
        } else {
            console.info ( this.name + " not enough sp");
        }

        this.status( targetPlayer );
    }

    this.atack = ( targetPlayer ) => {
        if( targetPlayer.healthPoints > 40 ) {
            targetPlayer.healthPoints -= 40;
        } else {
            targetPlayer.healthPoints = 0;
            console.error( `${targetPlayer.name} is Dead!!!` );
        }

        this.status( targetPlayer );
    }

    this.status = ( targetPlayer ) => {
        console.info( this );
        console.info ( targetPlayer );
    }
    
}

var gandalf = new Player("Gandalf");
var legolas = new Player("Legolas");
var mordor = new Player("Mordor");

console.log(gandalf);
console.log(legolas);
console.log(mordor);

mordor.atack(legolas);
gandalf.heal(legolas);