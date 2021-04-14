const { Sequelize, DataTypes, Op } = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:postAdmin@localhost:5432/food_db')
const recipeModel = require('./model/Recipe')
const dietModel = require('./model/DietType')

const Recipe = recipeModel(sequelize)
const Diet = dietModel(sequelize)

Recipe.belongsToMany(Diet, { through: 'RecipeXDiet' });
Diet.belongsToMany(Recipe, { through: 'RecipeXDiet' });

async function startDb() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully : ).');
    await sequelize.sync({ force: false });
    console.log("All models were synchronized successfully.");
    /*const foo = await rm.create({ name: 'foo' });
    console.log("Model created",foo) */
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

/* name,
  summary,
  score,
  healthyLevel,
  steps */

async function createRecipe(recipe) {
  try {
    const r = await Recipe.create(recipe)
    console.log("Recipe Was Create!!!!", r.toJSON())
  } catch (error) {
    console.log("Error on create Recipe", error)
  }
}

async function createRecipeXDiet(idRecipe, types) {

}

async function getDiets() {
  const diets = await Diet.findAll()
  return diets
}

async function getRecipeByName(name) {
  try {
    const result = await Recipe.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      }
    })
    return result
  } catch (error) {
    console.log("EROOR", error)
  }
}

async function getRecipeById(id) {
  try {
    const result = await Recipe.findAll({
      where: {
        id
      }
    })
    return result
  } catch (error) {
    console.log("EROOR", error)
  }
}


exports.startDb = startDb;
exports.createRecipe = createRecipe;
exports.getDiets = getDiets;
exports.getRecipeByName = getRecipeByName;
exports.getRecipeById = getRecipeById