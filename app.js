const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware

// app.use(express.static('./public'));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: {
      instruction: "Use the endpoint for all methods",
      route: "https://futurelabs-todo-app.onrender.com/api/v1/tasks"
    }
  })
})
app.use('/api/v1/tasks', tasks);


app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI || `mongodb://localhost:27017/todo-app`);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
