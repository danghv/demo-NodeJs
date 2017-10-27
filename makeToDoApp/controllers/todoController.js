var todo = []

var done = []
var doing = []
module.exports = function(app) {
    app.get('/', (req, res) => {
        // console.log(todo)
        res.render('index', {todo: todo, doing: doing, done: done})
    })

    app.post('/todo', (req, res) => {
        console.log(req.body)
        todo.push(req.body)
        res.json(todo)
    })
    app.post('/doing', (req, res) => {
        console.log(req.body)
        doing.push(req.body)
        res.json(doing)
    })
    app.post('/done', (req, res) => {
        console.log(req.body)
        done.push(req.body)
        res.json(done)
    })
    app.delete('/todo/:item', (req, res) => {
        let jobTodo = req.params.item.replace(/-/g, ' ')
        doing.push({job: jobTodo})
        todo = todo.filter((job) => {
            return job.job != jobTodo
        })
        res.json({todo: todo, doing: doing, done: done})
    })

    app.delete('/doing/:item', (req, res) => {
        let jobDoing = req.params.item.replace(/-/g, ' ')
        done.push({job: jobDoing})
        doing = doing.filter((job) => {
            return job.job != jobDoing
        })
        res.json({todo: todo, doing: doing, done: done})
    })
    app.delete('/done/:item', (req, res) => {
        let jobDone = req.params.item.replace(/-/g, ' ')
        done = done.filter((job) => {
            return job.job != jobDone
        })
        res.json({todo: todo, doing: doing, done: done})
    })

}