const express = require("express"); // always required

const server = express(); // always required
const actionsRouter = require("./actions/actionsRouter"); // exporting from actionsrouter
const projectsRouter = require("./projects/projectsRouter"); // exporting from projectRouter
// const helmet = require("helmet");

server.use(express.json());
// server.use(helmet());

server.use("/api/actions", actionsRouter);
server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
  res.send("I hope this is working");
});

module.exports = server;
