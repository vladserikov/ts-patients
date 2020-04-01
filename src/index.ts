import express from 'express';
import cors from "cors";
import diagnosesRouter from "./controlers/diagnoses";
import patientRouter from "./controlers/patients";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/patients', patientRouter);

app.get('/api/ping', (_req, res) => {
  res.status(200).send('pong');
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server start on http://localhost:${PORT}`);
});