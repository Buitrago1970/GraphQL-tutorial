/* import { graphql, buildSchema } from 'graphql'; */
const { graphql, buildSchema } = require('graphql');

//define schema
const schema = buildSchema(`
    type Query {
        hello: String
        saludo: String
    }
`);
//query and resolver
const resolvers = {
    hello:()=>{
        return 'Hello World';       
    },
    saludo:()=>{
        return 'Hola Mundo';
    }
    
}

//run query hello
graphql(schema, '{saludo}', resolvers)
.then((data) => {console.log(data)})
