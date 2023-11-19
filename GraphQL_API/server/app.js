// const express = require('express');
// const { graphqlHTTP } = require('express-graphql');
// const schema = require('./schema/schema.js');

// const app = express();

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   graphiql: true
// }));

// app.listen(4000, () => {
//   console.log('now listening for requests on port 4000');
// });

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});