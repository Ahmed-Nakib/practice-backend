import express, { Router } from "express";

const app = express()
app.use(express.json())

const todoRouter = Router()

app.get('/all-todos', (req, res) => {
  res.json([
  {
    id: 1,
    todo: "this is dummy todo"
  }
  ])
})

app.post('/create', (req, res) => {
  let data = req.body;
  console.log(data);
  res.json(data)
  
})

app.post('/delete/:id', (req, res) => {
  let id = req.params?.id;
  console.log(id);

  res.json({
    message: "todo delete successfully"
  })
  
})

app.get('/test', async (req, res) => {
  
  let id = await req.query
  console.log(id);
  
  res.json(
    {
      message: "successfully"
    }
  )
})

export default app;

