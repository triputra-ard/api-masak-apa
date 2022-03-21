const router = require('express').Router();
const cors = require('cors');
const route = router;

const controller = require('../controller/index');

route.get('/', (req, res) => {
    res.send({
        greet : 'Hello there 👋',
        message : 'visit link on bellow for documentation about masak apa hari ini 👇',
        documentation : 'https://github.com/tomorisakura/unofficial-masakapahariini-api',
        redefine:"by Tri Putra Ardiyansah",
        new_routes:{
          recipes:"/recipes",
          categories:"/categories/recipes"
        }
    });
});


route.get('/recipes', cors(), controller.newRecipes);
route.get('/recipes/:page', cors(), controller.newRecipesByPage);
route.get('/recipes-length/', cors(), controller.newRecipesLimit);
route.get('/categories/recipes', cors(), controller.category);
route.get('/articles/new', cors(), controller.article);
route.get('/categories/recipes/:key', cors(), controller.recipesByCategory);
route.get('/categories/recipes/:key/:page', cors(), controller.recipesCategoryByPage);
route.get('/recipe/:key', cors(), controller.recipesDetail);
route.get('/search/', cors(), controller.searchRecipes);
route.get('/categories/article', cors(), controller.articleCategory);
route.get('/categories/article/:key', cors(), controller.articleByCategory);
route.get('/article/:tag/:key', cors(), controller.articleDetails);

route.get('*', (req, res) => {
    res.status(404).json({
        method : req.method,
        message : 'cant find spesific endpoint, please make sure you read a documentation',
        status : false,
        code : 401,
    });
});

module.exports = route;
