
var Monster =
{
  .name: "";
  .HP: 15,
  .getHP: function() { return this.HP; },
  .strike: function (damage) { if (this.damage > this.HP) this.HP = 0; else this.HP = this.HP - damage; },
  .heal: function (heal) { this.HP = this.HP + heal; },
  .getName: function() { return this.name; },
  .setName: function(newName) { this.name = newName; },
  .isAlive: function() { if (this.HP <= 0) return false; else return true; }
}

var monsters = [];
var monsterNames = ["Flynn", "Quinn", "Lynn", "Gwyn", "Mike"];

function spawnMonsters() {
	var i = 0;
	var newMonsters = [];
	var thisMonster = Monster;
	for (i = 0; i < monsterNames.length; i++) {
		thisMonster.setName(monsterNames[i]);
		newMonsters.push(thisMonster);
		thisMonster = Monster;
	}

	return newMonsters;
}


