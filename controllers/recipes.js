const Recipe = require('../models/room');

module.exports = {
    new: newRecipe,
    create
};

function create (req, res) {
   const recipe = new Recipe(req.body);
   recipe.save(function (err){
       if (err) return res.render('recipes/new');
       console.log(recipe);
       res.redirect('/recipes/new');
   });

}


function newRecipe(req, res) {
    res.render('recipes/new');
}




