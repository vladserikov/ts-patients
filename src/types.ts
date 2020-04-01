export type Gender = 'male' | 'female';

export interface DiagnosesType {
  code: string;
  name: string;
  latin?: string;
}

export interface PatientType {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type NotSsnPatientType = Omit<PatientType, 'ssn'>;

export type NonLatinDiagnosData = Omit<DiagnosesType, 'latin'>;