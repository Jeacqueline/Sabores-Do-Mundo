const router = require('express').Router();
const sequelize = require("../../config/connection");
const Recipe = require("../../models/Receipe");


router.get("/recipes", (req, res) => { //route that was added is the recipe path 🚌
  res.render("recipes");
});


router.get("/recipes/:id", async (req, res)=>{
  try{
    const recipeData = await Recipe.findByPk(req.params.id);
    if(!recipeData){
      res.status(404).json({message: 'No recipe with this id! Sorry 😟'});
      return;
    }
    const recipe = recipeData.get({plain: true});
    res.render("recipe", recipe);
  } catch (err){
    res.status(500).json(err);
  };
});




module.exports= Recipe; 
