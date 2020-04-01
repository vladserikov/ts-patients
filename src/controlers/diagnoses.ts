import express from "express";
import service from "../service";

const diagnosesRouter = express.Router();

diagnosesRouter.get('/', (_req, res) => {
  res.json(service.getDiagnoses());
});

diagnosesRouter.get('/not-latin', (_req, res) => {
  res.json(service.getNotLatinsDiagnoses());
});

export default diagnosesRouter;