const express = require('express');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema/schema');

const app = express();

mongoose.connect('<connection-string>');
mongoose.connection.once('open', () => {
  console.log('connected to database');
})

const port = 5000;

app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`now listening for requests on port ${port}`);
})
