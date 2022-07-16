const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
//middleware
//If we dont use the down line then we will not have req.body
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.status(200).send(`Debasmit is BACK`);
});

app.use("/api/v1/tasks", tasks);

// app.get(`/api/v1/tasks`)    -get all the tasks
// app.post(`/api/v1/tasks`)   -create a new task
// app.get(`/api/v1/tasks/:id`) -get single task
// app.patch(`/api/v1/tasks/:id`) -update task
// app.delete(`/api/v1/tasks/:id`)  -delete task

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is live on ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
