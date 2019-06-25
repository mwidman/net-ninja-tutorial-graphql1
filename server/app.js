const express = require('express');
const graphqlHttp = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

const port = 5000;

app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`now listening for requests on port ${port}`);
})
