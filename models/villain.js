var mongoose = require('mongoose');

var VillainSchema = new mongoose.Schema({
    name: String,
    evilPowers: { default: [], type: Array },
    evil: {default: true, type: Boolean},
    nemesis: String,
    img: String,
    alterEgo: String,
    universe: String,
    weakness: String
});

VillainSchema.methods.loadData = function(data){
  this.name     = data.name ? data.name : this.name;
  this.nemesis  = data.nemesis ? data.nemesis : this.nemesis;
  this.universe = data.universe ? data.universe : this.universe;
  this.evil     = data.evil ? data.evil : this.evil;
  this.alterEgo = data.alterEgo ? data.alterEgo : this.alterEgo;
  this.weakness = data.weakness ? data.weakness : this.weakness;
  this.img      = data.img ? data.img : this.img;
}

VillainSchema.methods.loadPower = function(powerN){
  this.evilPowers.push(powerN);
}


module.exports = mongoose.model('Villain', VillainSchema);
