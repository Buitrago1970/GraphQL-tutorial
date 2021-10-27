const { buildSchema } = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require("path");

const app = express();
const port = process.env.PORT || 3000;

// define schema
const schema = buildSchema(
  readFileSync(join(__dirname, "lib", "schema.graphql"), "utf-8")
);

//definiendo resolver
const resolvers = require("./lib/resolver");

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
