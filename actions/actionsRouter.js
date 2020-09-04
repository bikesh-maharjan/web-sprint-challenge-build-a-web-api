const express = require("express");
const Actions = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", (req, res) => {
  Actions.get()
    .then((es) => {
      res.status(200).json(es);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: " There is problem with the server." });
    });
});

router.get("/:id", (req, res) => {
  Actions.get(req.params.id)
    .then((es) => {
      res.status(200).json(es);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "There is problem with the server." });
    });
});

router.post("/", (req, res) => {
  Actions.insert(req.body)
    .then((es) => {
      res.status(201).json(es);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Action could not be created." });
    });
});

router.put("/:id", (req, res) => {
  Actions.update(req.params.id, req.body)
    .then((es) => {
      res.status(200).json(es);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Action could not be edited." });
    });
});

router.delete("/:id", (req, res) => {
  Actions.remove(req.params.id)
    .then((es) => {
      res.status(200).send("Action successfully deleted.");
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Action could not be deleted." });
    });
});

module.exports = router;
