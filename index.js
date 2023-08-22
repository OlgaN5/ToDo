const express = require('express')
const Sentry = require('@sentry/node')
const router = require('./Routes/index.routes')
require('dotenv').config()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const app = express()

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server started on port ${port}`))

const swaggerOptions = {
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
        },
    },
    apis: ['./routes/*.js']
}

app.use(Sentry.Handlers.requestHandler())
app.use(Sentry.Handlers.errorHandler())
app.use(express.json())
app.use('/api', router)

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

Sentry.init({
    dsn: process.env.DSN
});

module.exports = app







// app.use(
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