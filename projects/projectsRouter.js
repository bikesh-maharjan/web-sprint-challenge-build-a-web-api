const express = require("express");

const Projects = require("../data/helpers/projectModel");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.get()
    .then((es) => {
      res.status(200).json(es);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "Oh oh something is wrong with the server" });
    });
});

router.get("/:id", (req, res) => {
  Projects.get(req.params.id)
    .then((es) => {
      res.status(200).json(es);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "Oh oh something is wrong with the server." });
    });
});

router.get("/:id/actions", (req, res) => {
  Projects.get(req.params.id)
    .then((es) => {
      res.status(200).json(es.actions);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "Oh oh something is wrong with the server" });
    });
});

router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then((es) => {
      res.status(201).json(es);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "The action could not be created." });
    });
});

router.put("/:id", (req, res) => {
  Projects.update(req.params.id, req.body)
    .then((es) => {
      res.status(200).json(es);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "The action could not be edited." });
    });
});

router.delete("/:id", (req, res) => {
  Projects.remove(req.params.id)
    .then((es) => {
      res.status(200).send("The action is successfully deleted.");
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "The action could not be deleted." });
    });
});

module.exports = router;
