/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
import { IPatient } from "../models/patients-models";

export const GlobalContext = createContext<{
  patientsList: IPatient[];
  patientsPage: IPatient[];
  page: number;
  searchController: string;
  setSearchController: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setPatientsList?: React.Dispatch<React.SetStateAction<IPatient[]>>;
  setPatientsPage?: React.Dispatch<React.SetStateAction<IPatient[]>>;
  totalCount: number;
  setTotalCount: React.Dispatch<React.SetStateAction<number>>;
}>({
  page: 1,
  searchController: "",
  patientsList: [],
  patientsPage: [],
  totalCount: 0,
  setTotalCount: () => {},
  setSearchController: () => {},
  setPage: () => {},
});

export const PatientsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [patientsList, setPatientsList] = useState<IPatient[]>([]);
  const [patientsPage, setPatientsPage] = useState<IPatient[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [searchController, setSearchController] = useState("");
  const [page, setPage] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        patientsList,
        totalCount,
        setTotalCount,
        setPatientsList,
        patientsPage,
        setPatientsPage,
        page,
        setPage,
        searchController,
        setSearchController,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const usePatientsContext = () => React.useContext(GlobalContext);
