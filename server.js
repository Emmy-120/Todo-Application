const express = require('express');
const app = express();
const port = 3000;

// in memory task storage
let tasks = [];

// middleware to parse json from data and server files

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//set EJS as the view engine
app.set('view engine', 'ejs');

// route to render the main page
app.get('/', (req, res) => {
    res.render('index', {tasks })
});

// route to handle task submissions
app.post('/add',(req,res)=>{
    const task = req.body.task;
    if (task){
        tasks.push({id: Date.now(), text: task});
    }
    res.redirect('/');

});

//route to remove a task
app.post('/delete/:id', (req,res)=>{
    tasks = tasks.filter(task => task.id != req.params.id);
    res.redirect('/')
});

//starting the server
app.listen(port,()=>{
    console.log(`Server running at https://localhost:${port}`)
});