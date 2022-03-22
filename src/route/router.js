const router = require('express').Router();
const cors = require('cors');
const route = router;

const controller = require('../controller/mainController');

route.get('/', (req, res) => {
    res.send({
        greet:"Hello 🖐️",
        documentation : 'https://github.com/triputra-ard/api-masak-apa',
        build:{
          by:"Reski Arianto",
          github:"https://github.com/tomorisakura"
        },
        rebuild:{
          by:"Tri Putra Ardiyansah",
          github:"https://github.com/triputra-ard"
        },
        new_routes:{
          recipes:"/recipes",
          recipes_detail:"/recipes/:key",
          categories:"/categories",
          categories_details:"/categories/:key",
          article:"/article",
          article_detail:"/article/:tag/:key",
          search:"/search/?q=parameter"
        }
    });
});

route.get('/recipes', cors(), controller.newRecipes);
route.get('/recipes/:page', cors(), controller.newRecipesByPage);
route.get('/recipes/length/', cors(), controller.newRecipesLimit);
route.get('/categories', cors(), controller.category);
route.get('/article/new', cors(), controller.article);
route.get('/categories/:key', cors(), controller.recipesByCategory);
route.get('/categories/:key/:page', cors(), controller.recipesCategoryByPage);
route.get('/recipe/:key', cors(), controller.recipesDetail);
route.get('/search/', cors(), controller.searchRecipes);
route.get('/article', cors(), controller.articleCategory);
route.get('/article/:key', cors(), controller.articleByCategory);
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
