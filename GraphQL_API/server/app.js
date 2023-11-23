const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true,
}));

mongoose.connect('mongodb+srv://davisdustin501:Test123@cluster0.d4hthsw.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});