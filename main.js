const express = require('express')
const app = express()
const PORT = process.env.PORT || 3333

const expressGraphQL = require('express-graphql')

app.use('/', (req, res) => {
    res.send('hi')
})

app.use('/graphql', expressGraphQL({
    graphiql: true
}))

const listener = () => console.log(`listening on port ${PORT}`)
app.listen(PORT, listener)