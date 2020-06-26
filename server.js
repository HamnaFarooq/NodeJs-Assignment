const path = require('path')
const indexRouter = require('./routes/routes')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const PORT = process.env.PORT || 5000
// Connect to DB
const db = require(path.join(__dirname,'models','database.js'));
// Set views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
// Set layouts
app.set('layout', path.join(__dirname, 'views', 'layouts', 'layout'))
app.use(expressLayouts);
// Set public directory
app.use(express.static(path.join(__dirname,'public')))
// body Parser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// Set Router
app.use('/', indexRouter)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});