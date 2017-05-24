//********************SUPERHEROES***********************************
//This file is used for refactoring.

var express   = require('express');
var Router    = express.Router();
var Superhero = require('../models/superhero');
var Note      = require('../models/note');
var async     = require('async');

//******* GET ********
Router.route('/')
 .get((req,res) => {
   Superhero.find()
     .populate('notes')
     .exec((err, data) => {
       if(err) throw err;
       res.send({data})
     })
 });

 //****** GET by ID *****
 Router.route('/:superhero_id')
  .get((req, res) => {
    Superhero.findById(req.params.superhero_id)
      .populate('notes') // added this so we can see the notes that we added to individual hero
      .exec((err, data) =>{
      if(err){
        res.send(err);
      }else{
        res.json(data);
      }
    });
  });

//******* GET by ID - notes *****
//route JUST for posting notes. find a specfici hero. make a note. add new note to hero.
Router.route('/note/:superhero_id')
  .post((req, res) => {
    Superhero.findById(req.params.superhero_id, (err, hero) => {//hero passes down below to .note.push and .save
     if(err) throw err;
     const newNote = new Note(); //need to create/save a note to get an Id
     newNote.loadData(req.body); //there's the load method we defined earlier
     newNote.save((err, savedNote) => { //change the name of the note AFTER save
       if(err) throw err;
       hero.notes.push(savedNote);//if we pass this a note object, it will go for THAT Id
       hero.save((err, savedHero) => { //created this "new saved hero" in this function
         if(err) throw err;
         res.send({date: savedHero})
       })
     })
    })
  })

//****** POST ********
Router.route('/')
 .post(function(req,res){
   var newSuperHero = new Superhero();
   newSuperHero.loadPower(req.body.superPower);
   newSuperHero.loadData(req.body);
   newSuperHero.save(function(err,sh){
     if(err){
        console.log(err)
     }else{
       res.json(sh)
     }
   });
 })
   .post(function(req,res){ // Route chained to the POST route (chained together because they're both using the same URL)
      var newHeroes = [];
      console.log(req.body.data, "REQUEST BODY DATA");
      async.each(req.body.data, function(hero, cb) {
        var newHero = new Superhero();
          newHero.loadPower(hero.superPower);
          newHero.loadData(hero);
          newHero.save()
          .then(function(hero){
            console.log(hero, 'EACH HERO SUCCESS');
            newHeroes.push(hero);
            cb(); //do not pass a parameter into the first cb
          }, function(err){
            if(err) cb(err);
          });
      },function(err) {
          if(err) throw err;
          res.json(newHeroes);
        });
    });
//****** PUT *******
Router.route('/:superhero_id')
 .put(function(req, res){
   Superhero.findById(req.params.superhero_id, function(err, hero){
     if(!hero) return res.status(404).send(err, "Can't find superhero");
     hero.loadPower(req.body.superPower);
     hero.loadData(req.body);
     hero.save(function(e){
       if(e){
         res.status(500).send(e);
       }else{
         res.json(hero);
       }
     });
   });
 });
//***** DELETE ********
Router.route('/:superhero_id')
 .delete(function(req, res){
   Superhero.remove({_id: req.params.superhero_id}, function (err){
     if(err){
       console.log(err)
     }else{
       res.send("Super hero successfully removed!")
     }
   });
 });

module.exports = Router;
