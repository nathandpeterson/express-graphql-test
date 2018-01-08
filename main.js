const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema.js')


app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

const listener = () => console.log(`listening on port ${PORT}`)
app.listen(PORT, listener)