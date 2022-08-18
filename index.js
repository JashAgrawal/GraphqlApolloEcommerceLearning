const { ApolloServer } = require("apollo-server");
const { db } = require("./databse/db.js");
const { typeDefs } = require("./models/schema");
const { resolvers } = require("./resolvers/index");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
  },
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((err) => {
    console.log(err);
  });
