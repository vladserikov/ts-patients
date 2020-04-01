import express from "express";
import service from "../service";

const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
  res.json(service.getPatient());
});

export default patientRouter;