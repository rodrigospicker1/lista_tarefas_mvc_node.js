const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const Task = require('./models/Task')
const tasksRoutes = require('./routes/taskRoutes')

const app = express()

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())
app.use('/tasks', tasksRoutes)
