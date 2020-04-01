import diagnosesData from "./data/diagnoses";

import { DiagnosesType, NonLatinDiagnosData, NotSsnPatientType } from "./types";
import patienData from "./data/patients";

const getDiagnoses = (): Array<DiagnosesType> => {
  return diagnosesData;
};

const getNotLatinsDiagnoses = (): Array<NonLatinDiagnosData> => {
  return diagnosesData.map(({ code, name }) => ({ code, name }));
};

const getPatient = (): Array<NotSsnPatientType> => {
  return patienData.map(({ id, name, dateOfBirth, gender, occupation }) => ({ id, name, dateOfBirth, gender, occupation }));
};

export default {
  getDiagnoses,
  getNotLatinsDiagnoses,
  getPatient
};