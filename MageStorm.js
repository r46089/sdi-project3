
var Monster =
{
  name: "",
  HP: 15,
  getHP: function() { return this.HP; },
  strike: function (damage) { if (this.damage > this.HP) this.HP = 0; else this.HP = this.HP - damage; },
  heal: function (heal) { this.HP = this.HP + heal; },
  getName: function() { return this.name; },
  setName: function(newName) { this.name = newName; },
  isAlive: function() { if (this.HP <= 0) return false; else return true; }
}

var monsters = [];
var battles = 0;

function spawnMonsters(count) {
	var i = 0;
	var newMonsters = [];
	var thisMonster = Monster;
	for (i = 0; i < mageStormSettings.monsterNames.length && monsterNames.length > 0; i++) {
		thisMonster.setName(monsterNames.pop());
		newMonsters.push(thisMonster);
		thisMonster = Monster;
	}

	return newMonsters;
}

console.log("The mage creeped around the demon's den, cautious not to attract attention.");
console.log("Unfortunately for our hero, in this dungeon, the creatures see all...");

monsters = spawnMonsters(1);

while (monsters.length) {
	if (battles > 0) {
		console.log("But the fight wasn't over yet, and a new wave appeared...");
	}

	var i = 0;
	var lastMonster = "";
	for (i = 0; i < monsters.length; i++) {
		if (i) lastMonster = monsters[i-1].getName();
		if (!(i % 2)) {
			console.log("\"My name is " + monsters[i].getName() + ",\" the beast began.");
			console.log("But it was given no leave to finish its statement, before it was");
			console.log("hit by a fireball for 5 damage!");
			monsters[i].strike(5); 
		} else {
			console.log("\"" + lastMonster + "! I will heal you!\" And it was done by " + monsters[i].getName());
			console.log("before he was struck with a fireball for 5 damage.");
			monsters[i].strike(5);
			monsters[i-1].heal(3);
		}
		console.log("(to those who know like you and me, this left poor " + monsters[i].getName());
		if (!(i % 2)) {
			console.log("with " + monsters[i].getHP() + " health)");
		} else {
			console.log("with " + monsters[i].getHP() + " health -- but " + lastMonster + " now had ");
			console.log(monsters[i-1].getHP() + " health!)");
		}
	}

	if (!monsters.length) monsters = spawnMonsters(++battles);
}


