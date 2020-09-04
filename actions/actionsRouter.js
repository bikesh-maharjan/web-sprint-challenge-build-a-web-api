const express = require("express");
const Actions = require("../data/helpers/actionModel");
const { data } = require("../data/dbConfig");

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

router.get("/:id", actionIdValidation, (req, res) => {
  res.status(200).json(req.action);
});

router.post("/", (req, res) => {
  Actions.insert(req.body)
    .then((es) => {
      res.status(201).json(es);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "The action could not be created." });
    });
});

router.put("/:id", actionIdValidation, (req, res) => {
  Actions.update(req.params.id, req.body)
    .then((es) => {
      res.status(200).json(es);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: " The action could not be edited." });
    });
});

router.delete("/:id", actionIdValidation, (req, res) => {
  Actions.remove(req.params.id)
    .then((es) => {
      res.status(200).send("The action is successfully deleted.");
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "The action could not be deleted." });
    });
});

function actionIdValidation(req, res, next) {
  Actions.get(req.params.id)
    .then((action) => {
      if (action) {
        req.action = action;
        next();
      } else {
        res.status(404).json({ message: "the action id doesnot exist" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "There was an internal server error" });
    });
}

module.exports = router;
