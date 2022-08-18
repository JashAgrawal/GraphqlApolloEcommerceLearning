const { Query } = require("./query");
const { Product } = require("./product");
const { Category } = require("./category");
const { Mutation } = require("./mutation");
exports.resolvers = { Query, Product, Category, Mutation };
