const router = require("express").Router();
const cors = require("cors");
const route = router;

const controller = require("../controller/mainController");

route.get("/", (req, res) => {
  res.send({
    greet: "Hello",
    githubSource: "https://github.com/triputra-ard/api-masak-apa",
    build: {
      by: "Reski Arianto",
      github: "https://github.com/tomorisakura",
    },
    rebuild: {
      by: "Tri Putra Ardiyansah",
      github: "https://github.com/triputra-ard",
    },
    new_routes: {
      recipes: "/recipes",
      recipes_detail: "/recipes/details/:key",
      categories: "/categories",
      categories_details: "/categories/:key",
      article: "/article",
      article_view: "/article/:key",
      article_detail: "/article/:tag/:key",
      search: "/search/?q=parameter",
    },
    ask_for_source_code: "trieputra@live.com",
  });
});
route.get("/recipes", cors(), controller.recipesAll);
route.get("/recipes/:page", cors(), controller.recipesByPage);
route.get("/recipes/:tag/:page", cors(), controller.recipesByPage);
route.get("/recipes/length/", cors(), controller.newRecipesLimit);
route.get("/recipes/full/details/:key", cors(), controller.recipeWithDetails);
route.get("/categories", cors(), controller.category);
route.get("/article/new", cors(), controller.article);
route.get("/categories/:key", cors(), controller.recipesByCategory);
route.get("/search/", cors(), controller.searchRecipes);
route.get("/article", cors(), controller.article);
route.get("/article/:key", cors(), controller.articleByCategory);
route.get("/article/:tag/:key", cors(), controller.articleDetails);

route.get("*", (req, res) => {
  res.status(404).json({
    method: req.method,
    message:
      "cant find spesific endpoint, please make sure you read a documentation",
    status: false,
    code: 401,
  });
});

module.exports = route;
