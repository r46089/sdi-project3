
var Monster =
{
  .HP: 15,
  .getHP: function() { return this.HP; }
  .strike: function (damage) { if (this.damage > this.HP) this.HP = 0; else this.HP = this.HP - damage; }
  .heal: function (heal) { this.HP = this.HP + heal; }
  .name: "";
  .getName: function() { return this.name; }
  .setName: function(newName) { this.name = newName; }
  .isAlive: function() { if (this.HP <= 0) return false; else return true; }
}


