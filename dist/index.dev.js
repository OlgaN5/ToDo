"use strict";

var express = require('express');

var Sentry = require('@sentry/node');

var router = require('./Routes/index.routes');

require('dotenv').config();

var swaggerJsDoc = require('swagger-jsdoc');

var swaggerUi = require('swagger-ui-express');

var app = express();
var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log("server started on port ".concat(port));
});
var swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'ToDo',
      description: 'Customer API information',
      contact: {
        name: 'Olya'
      },
      servers: ["http://localhost:3000"]
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          name: "Authorization"
        }
      }
    }
  },
  apis: ['./routes/*.js']
};
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());
app.use(express.json());
app.use('/api', router);
var swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
Sentry.init({
  dsn: process.env.DSN
});
module.exports = app; // app.use(
//     cors({
//         origin: 'http://example.com', // Allow requests from this origin
//         methods: ['GET', 'POST'], // Allow specified HTTP methods
//     })
// );
// app.get('/secret', (req, res) => {
//     const secret = Math.floor(Math.random() * 100)
//     res.json({
//         secret
//     })
// });
// _________________________________________________________
// let corsOptions = {
//     origin: ['http://example.com'],
// }
// app.use(cors(corsOptions))
// app.get('/secret', cors(corsOptions), (req, res) => {
//     const secret = Math.floor(Math.random() * 100)
//     res.json({
//         secret
//     })
// });
// const express = require('express')
// const myApp = express()
// const PORT = 3000
// myApp.listen(PORT, () => console.log(`server started on port ${port}`))
// myApp.get('/', (req, res) => {
//     res.send('Hello World!')
//   })