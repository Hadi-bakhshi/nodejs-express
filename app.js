const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require('./routes/routes');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(appRouter);
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.get('/', (req, res) => {
  return res.json({
    statusCode: 200,
    isSuccess: true,
    message: 'this is test api',
  });
});
app.listen(8000);

process.on('uncaughtException', (error, source) => {
  console.error('uncaughtException', error, source);
});

process.on('unhandledRejection', (error, source) => {
  console.error('unhandledRejection', error, source);
});
