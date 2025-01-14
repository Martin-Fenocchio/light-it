/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
import { IPatient } from "../models/patients-models";

export const GlobalContext = createContext<{
  patientsList?: IPatient[];
  setPatientsList?: React.Dispatch<React.SetStateAction<IPatient[]>>;
  patientsPage?: IPatient[];
  setPatientsPage?: React.Dispatch<React.SetStateAction<IPatient[]>>;
}>({});

export const PatientsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [patientsList, setPatientsList] = useState<IPatient[]>([]);
  const [patientsPage, setPatientsPage] = useState<IPatient[]>([]);

  return (
    <GlobalContext.Provider
      value={{ patientsList, setPatientsList, patientsPage, setPatientsPage }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const usePatientsContext = () => React.useContext(GlobalContext);
