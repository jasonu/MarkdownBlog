const express = require('express')
const app = express()
const articleRouter = require('./routes/articles')

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [
	{
	    title: 'My First Article',
	    createdAt: new Date(),
	    description: 'My article description.'
	},
	{
	    title: 'My Second Article',
	    createdAt: new Date(),
	    description: 'My article description.'
	}
    ]
    res.render('articles/index', { articles: articles })
})

app.listen(3000)
