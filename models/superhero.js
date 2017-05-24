//mongoose model "abstract datatype" representation of something you're modeling (not an integer or number or string - it's a datatype) created by the programmer
var mongoose = require('mongoose');

var SuperheroSchema = new mongoose.Schema({
    name: { required: true, type: String },
    superPowers: [{ type: String }],
    universe: String,
    evil: { default: false, type: Boolean },
    rank: Number,
    alterEgo: String,
    weakness: String,
    nemesis: String,
    img: String,
    notes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Note' }]
});

//use this to update our superhero (if we don't want to update a particular field, it will default to what's already there.)
SuperheroSchema.methods.loadData = function(data){
  this.name     = data.name ? data.name : this.name;
  this.universe = data.universe ? data.universe : this.universe;
  this.rank     = data.rank ? data.rank : this.rank;
  this.evil     = data.evil ? data.evil : this.evil;
  this.nemesis  = data.nemesis ? data.nemesis : this.nemesis;
  this.weakness = data.weakness ? data.weakness : this.weakness;
  this.alterEgo = data.alterEgo ? data.alterEgo : this.alterEgo;
  this.img      = data.img ? data.img : this.img;
}

SuperheroSchema.methods.loadPower = function(powerN){
  this.superPowers.push(powerN);
}
module.exports = mongoose.model('Superhero', SuperheroSchema);
