const baseUrl = require("../constant/url");
const services = require("../helper/service");
const cheerio = require("cheerio");
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;

const fetchRecipes = (req, res, payload) => {
  try {
    const $ = cheerio.load(payload.data);
    const element = $("#recipes-page");
    let title, thumb, duration, servings, difficulty, key, url, href;
    let recipe_list = [];
    element.find("._recipe-card").each((i, e) => {
      title = $(e).find(".card-title").find("a").attr("data-tracking-value");
      thumb = $(e).find("picture.thumbnail").find("img").attr("data-src");
      duration = $(e)
        .find("._recipe-features")
        .find(".flex-wrap")
        .find("a:even")
        .text();
      servings = $(e).find(".servings").find("small").text();
      difficulty = $(e)
        .find("._recipe-features")
        .find(".flex-wrap")
        .find("a.icon_difficulty")
        .text();
      url = $(e).find(".card-title").find("a").attr("href");
      href = url.split("/");
      key = href[4];
      recipe_list.push({
        title: title,
        thumb: thumb,
        key: key,
        times: duration,
        servings: "All",
        difficulty: difficulty,
      });
    });
    console.log("fetch new recipes");
    res.send({
      method: req.method,
      status: true,
      results: recipe_list,
    });
  } catch (error) {
    throw error;
  }
};
const fetchRecipesDetails = (req, res, payload) => {
  try {
    const $ = cheerio.load(payload.data);
    const elementMain = $("#recipe-page");
    const elementHeader = $("._section-title");
    const elementThumbnail = $(".recipe-image");
    const elementNeeded = $(".row-product-card");
    const elementIngredients = $("._recipe-ingredients ");
    const elementSteps = $("._recipe-steps");
    let objectPopulate = {};
    let metaDuration, metaServings, metadifficulty, metaIngredient;
    let title,
      thumb,
      user,
      datePublished,
      description,
      quantity,
      ingredient,
      ingredients;
    let parseDuration, parseServings, parsedifficulty, parseIngredient;
    let duration, servings, difficulty;
    let servingsArr = [];
    let difficultyArr = [];

    //send title
    title = elementHeader.find("h1").text();
    objectPopulate.title = title;

    // send thumbnails
    thumb = elementThumbnail.find("img.image").attr("data-src");
    if (thumb === "") {
      thumb = null;
    }
    objectPopulate.thumbnail = thumb;

    user = elementMain.find(".author").text().split("|")[0].trim();
    datePublished = elementMain.find(".author").text().split("|")[1].trim();

    //send author
    objectPopulate.author = { user, datePublished };

    // send description
    description = elementMain
      .find("._rich-content > :not(:first-child)")
      .text();
    objectPopulate.desc = description;

    let stepArr = [];
    let step, resultStep;
    elementSteps.find(".step").each((i, e) => {
      step = $(e).find("p").text();
      resultStep = `${step}`;
      stepArr.push(resultStep);
    });

    objectPopulate.step = stepArr;

    let ingredientsArr = [];
    elementIngredients
      .find(".d-flex")
      .not(":first-child")
      .not(":nth-child(2)")
      .each((i, e) => {
        const term = [];
        quantity = $(e).find(".part").text();
        metaIngredient = $(e).find(".item").text();
        //   parseIngredient = metaIngredient.split("\n")[1].split(" ");
        //   parseIngredient.forEach((r) => {
        //     if (r !== "") term.push(r);
        //   });
        //   ingredient = Array.from(term).join(" ");
        quantityObj = `${quantity}`;
        ingredientObj = `${metaIngredient}`;
        ingredientsArr.push({
          quantity: quantityObj,
          ingredient: ingredientObj,
        });
      });

    objectPopulate.ingredient = ingredientsArr;

    let thumb_item, need_item;
    let neededArr = [];
    elementNeeded.find("._product-card ").each((i, e) => {
      thumb_item = $(e).find(".thumbnail").find("img").attr("data-src");
      need_item = $(e).find(".title").text();
      neededArr.push({
        item_name: need_item,
        thumb_item: thumb_item,
      });
    });

    objectPopulate.needItem = neededArr;

    // elementHeader.find(".recipe-info").each((i, e) => {
    //   metaDuration = $(e).find(".time").find("small").text();
    //   metaServings = $(e).find(".servings").find("small").text();
    //   metadifficulty = $(e).find(".difficulty").find("small").text();
    //   if (
    //     metaDuration.includes("\n") &&
    //     metaServings.includes("\n") &&
    //     metadifficulty.includes("\n")
    //   ) {
    //     parseDuration = metaDuration.split("\n")[1].split(" ");
    //     parseDuration.forEach((r) => {
    //       if (r !== "") duration = r;
    //     });

    //     parseServings = metaServings.split("\n")[1].split(" ");
    //     parseServings.forEach((r) => {
    //       if (r !== "") servingsArr.push(r);
    //     });
    //     servings = Array.from(servingsArr).join(" ");
    //     parsedifficulty = metadifficulty.split("\n")[1].split(" ");
    //     parsedifficulty.forEach((r) => {
    //       if (r !== "") difficultyArr.push(r);
    //     });
    //     difficulty = Array.from(difficultyArr).join(" ");
    //   }

    //   object.title = title;
    //   object.thumb = thumb;
    //   object.servings = servings;
    //   object.times = duration;
    //   object.difficulty = difficulty;
    //   object.author = { user, datePublished };
    // });

    res.send({
      method: req.method,
      status: true,
      results: objectPopulate,
    });
  } catch (error) {
    throw error;
  }
};
const searchRecipes = (req, res, payload) => {
  try {
    const $ = cheerio.load(response.data);
    const element = $("#search-content");

    let title, url, key, thumb, duration, serving, difficulty;
    let search_list = [];
    element
      .find(".results-row")
      .find(".post-col")
      .each((i, e) => {
        title = $(e).find(".block-link").attr("data-tracking-value");
        url = $(e).find("a").attr("href").split("/");
        thumb = $(e)
          .find(".thumb-wrapper")
          .find("img")
          .last()
          .attr("data-lazy-src");
        key = url[4];
        duration = $(e).find(".recipe-info").find(".time").find("small").text();
        servings = $(e)
          .find(".recipe-info")
          .find(".servings")
          .find("small")
          .text();
        difficulty = $(e)
          .find(".recipe-info")
          .find(".difficulty")
          .find("small")
          .text();

        search_list.push({
          title: title,
          thumb: thumb,
          key: key,
          times: duration,
          servings: servings,
          difficulty: difficulty,
        });
      });

    const item = search_list.filter((result) => result.times !== "");

    res.send({
      method: req.method,
      status: true,
      results: item,
    });
  } catch (error) {
    throw error;
  }
};

const limiterRecipes = (req, res, payload, limiter) => {
  try {
    const $ = cheerio.load(payload.data);
    const element = $("#category-content");
    let title, thumb, duration, servings, difficulty, key, url, href;
    let recipe_list = [];
    element.find(".category-posts");

    element.find(".post-col").each((i, e) => {
      title = $(e).find(".block-link").attr("data-tracking-value");
      thumb = $(e).find(".thumb-wrapper").find("img").attr("data-lazy-src");
      duration = $(e).find(".time").find("small").text();
      servings = $(e).find(".servings").find("small").text();
      difficulty = $(e).find(".difficulty").find("small").text();
      url = $(e).find("a").attr("href");
      href = url.split("/");
      key = href[4];

      recipe_list.push({
        title: title,
        thumb: thumb,
        key: key,
        times: duration,
        servings: servings,
        difficulty: difficulty,
      });
    });

    const recipes_limit = recipe_list.splice(0, limiter);
    console.log("limiter");
    if (limiter > 10) {
      res.send({
        method: req.method,
        status: false,
        message:
          "oops , you fetch a exceeded of limit, please set a limit below of 10",
        results: null,
      });
    } else {
      res.send({
        method: req.method,
        status: true,
        results: recipes_limit,
      });
    }
  } catch (error) {
    throw error;
  }
};
const fetchCategory = (req, res, payload) => {
  try {
    const $ = cheerio.load(payload.data);
    const element = $("header").find("#menu-item-287");
    let category, url, key;
    let category_list = [];
    // element.find(".explore-by-widget");
    element.find(".sub-menu li").each((i, e) => {
      category = $(e).find("a").attr("title");
      url = $(e).find("a").attr("href");
      const split = category.split(" ");
      if (split.includes("Menu")) split.splice(0, 1);
      const results = Array.from(split).join("-");
      key = $(e).find("a").attr("href").split("/");
      key = key[key.length - 2];
      // overlaySelector = '.category-col .category-block.'+key;
      // bgUrl = window.getComputedStyle(window.document.querySelector(overlaySelector)).backgroundImage;
      category_list.push({
        category: category,
        url: url,
        // backgroundImage:bgUrl.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, ''),
        key: key,
      });
    });

    return res.send({
      method: req.method,
      status: true,
      results: category_list,
    });
  } catch (error) {
    throw error;
  }
};
const fetchArticles = (req, res, payload) => {
  try {
    const $ = cheerio.load(payload.data);
    const element = $(".latest-posts-widget");
    let parse;
    let title, url;
    let article_lists = [];
    element.find(".posts-row");
    element.find(".posts-col").each((i, e) => {
      title = $(e).find("a").attr("data-tracking-value");
      url = $(e).find("a").attr("href");
      parse = url.split("/");
      console.log(parse.length);
      article_lists.push({
        title: title,
        url: url,
        key: parse[3],
      });
    });

    return res.send({
      method: req.method,
      status: true,
      results: article_lists,
    });
  } catch (error) {
    throw error;
  }
};

//controller variables
const Controller = {
  recipesAll: async (req, res) => {
    try {
      const payload = await services.fetchService(`${baseUrl}/resep/`, res);
      return fetchRecipes(req, res, payload);
    } catch (error) {
      throw error;
    }
  },

  recipesByPage: async (req, res) => {
    try {
      const page = req.params.page;
      const categories = req.params.tag;
      const payload = await services.fetchService(
        categories != ""
          ? `${baseUrl}/resep/${tag}/page/${page}`
          : `${baseUrl}/resep/page/${page}`,
        res
      );
      return fetchRecipes(req, res, payload);
    } catch (error) {
      throw error;
    }
  },
  recipeWithDetails: async (req, res) => {
    try {
      const key = req.params.key;
      const payload = await services.fetchService(
        `${baseUrl}/resep/${key}`,
        res
      );
      return fetchRecipesDetails(req, res, payload);
    } catch (error) {
      throw error;
    }
  },

  category: async (req, res) => {
    try {
      const payload = await services.fetchService(`${baseUrl}/resep/`, res);
      return fetchCategory(req, res, payload);
    } catch (error) {
      throw error;
    }
  },

  article: async (req, res) => {
    try {
      const payload = await services.fetchService(`${baseUrl}/artikel/`, res);
      return fetchArticles(req, res, payload);
    } catch (error) {
      throw error;
    }
  },

  recipesByCategory: async (req, res) => {
    try {
      const key = req.params.key;
      const response = await services.fetchService(
        `${baseUrl}/resep/${key}`,
        res
      );
      return fetchRecipes(req, res, response);
    } catch (error) {
      throw error;
    }
  },

  //   recipesCategoryByPage: async (req, res) => {
  //     try {
  //       const key = req.params.key;
  //       const page = req.params.page;
  //       const response = await services.fetchService(
  //         `${baseUrl}/resep-masakan/${key}/?halaman=${page}`,
  //         res
  //       );
  //       return fetchRecipes(req, res, response);
  //     } catch (error) {
  //       throw error;
  //     }
  //   },

  searchRecipes: async (req, res) => {
    try {
      const query = req.query.q;
      //   console.log(query);
      const payload = await services.fetchService(
        `${baseUrl}/?s=${query}`,
        res
      );
      return searchRecipes(req, res, payload);
    } catch (error) {
      throw error;
    }
  },

  // articleCategory: async (req, res) => {
  //   try {
  //     const response = await services.fetchService(baseUrl, res);
  //     const $ = cheerio.load(response.data);

  //     const element = $("#menu-item-286");
  //     let title, key;
  //     let article_category_list = [];
  //     element
  //       .find(".sub-menu")
  //       .find(".menu-item")
  //       .each((i, e) => {
  //         title = $(e).find("a").text();
  //         key = $(e).find("a").attr("href").split("/");
  //         article_category_list.push({
  //           title: title,
  //           key: key[3],
  //         });
  //       });

  //     res.send({
  //       method: req.method,
  //       status: true,
  //       results: article_category_list,
  //     });
  //   } catch (error) {}
  // },
  articleByCategory: async (req, res) => {
    try {
      const key = req.params.key;
      const response = await services.fetchService(`${baseUrl}/${key}`, res);

      const $ = cheerio.load(response.data);
      const element = $("#category-content");
      let title, thumb, tags, keys;
      let article_list = [];
      element
        .find(".category-posts")
        .find(".post-col")
        .each((i, e) => {
          title = $(e)
            .find(".inner-block")
            .find("a")
            .attr("data-tracking-value");
          thumb = $(e)
            .find(".inner-block")
            .find("a")
            .find(".thumb-wrapper")
            .find("img")
            .attr("data-lazy-src");
          tags = $(e).find(".post-info").find("small").text();
          keys = $(e).find(".inner-block").find("a").attr("href").split("/");
          article_list.push({
            title: title,
            thumb: thumb,
            tags: tags,
            key: keys[4],
          });
        });

      res.send({
        method: req.method,
        status: true,
        results: article_list,
      });
    } catch (error) {
      throw error;
    }
  },

  articleDetails: async (req, res) => {
    try {
      const tag = req.params.tag;
      const key = req.params.key;
      const response = await services.fetchService(
        `${baseUrl}/${tag}/${key}`,
        res
      );

      const $ = cheerio.load(response.data);
      const element = $("#main");

      let title, thumbs, author, published, description;
      let article_object = {};
      title = element.find(".article-header").find(".title").text();
      author = element.find("small").find(".author").text();
      published = element.find("small").find(".date").text();
      thumbs = element
        .find(".featured-img-wrapper")
        .find("img")
        .attr("data-lazy-src");

      element.find(".the-content").each((i, e) => {
        description = $(e).find("p").text();
      });

      article_object.title = title;
      article_object.thumb = thumbs;
      article_object.author = author;
      article_object.date_published = published;
      article_object.description = description;

      res.send({
        method: req.method,
        status: true,
        results: article_object,
      });
    } catch (error) {
      throw error;
    }
  },

  newRecipesLimit: async (req, res) => {
    try {
      const response = await services.fetchService(
        `${baseUrl}/resep-masakan/`,
        res
      );
      const limit = req.query.limit;
      return limiterRecipes(req, res, response, limit);
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Controller;
