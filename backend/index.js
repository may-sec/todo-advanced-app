const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db")
const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json());
app.use(cors());


app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Inserted wrong input"
        })
        return;
    }
    //put in mongo
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created - mongo"
    })


})


app.get("/todos", async function(req, res){
    const todos = await todo.find({}); // if commented, will cause infinite loop of useState bcz of re-rendering -> soln useEffect
    res.json({
        todos
    })

})


app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: "Inserted wrong input"
        })
        return;
    }
    
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        msg: "Todo marked as complete"
    })
})

app.listen(3000)













