const { makeExecutableSchema } = require("@graphql-tools/schema");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require("path");

const app = express();
const port = process.env.PORT || 3000;

//define typeDefs and resolvers
const resolvers = require("./lib/resolver");
const typeDefs = readFileSync(
  join(__dirname, "lib", "schema.graphql"),
  "utf-8"
);

// define schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is running on http://localHost:${port}/api`);
});
