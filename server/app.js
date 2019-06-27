const express = require('express');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');
const { connectionString } = require('./env');

const app = express();

mongoose.connect(connectionString);
mongoose.connection.once('open', () => {
  console.log('connected to database');
})

const port = 5000;

app.use('/graphql', cors(), graphqlHttp({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`now listening for requests on port ${port}`);
})
