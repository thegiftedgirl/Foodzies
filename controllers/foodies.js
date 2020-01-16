const Foodie = require('../models/room')

module.exports = {
    index,
    create
}


function index(req, res, next) {
    Foodie.find({}, function(err, foodies) {
    res.render('foodies/index', {
        foodies,
        user: req.user
        });
    });
}



function create (req, res) {
   const foodie = new Foodie(req.body);
   foodie.save(function (err){
       if (err) return res.render('foodies/new');
       console.log(foodie);
       res.redirect('/foodies/new');
   });

}


function newRecipe(req, res) {
    res.render('recipes/new');
}

