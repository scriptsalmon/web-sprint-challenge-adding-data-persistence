const express = require("express");

//routers
const projectRouter = require("./project/router.js");
const resourceRouter = require("./resource/router.js");
const taskRouter = require('./task/router.js');

const server = express();
server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use('/api/tasks', taskRouter);

server.get("*", (req, res) => {
  res.json("server is running");
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
