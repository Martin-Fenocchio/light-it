import { useEffect, useState } from "react";
import { IPatient } from "../models/patients-models";
import Wave1 from "../styles/assets/bg-1.svg";
import Wave2 from "../styles/assets/bg-2.svg";
import Wave3 from "../styles/assets/bg-3.svg";
import Wave4 from "../styles/assets/bg-4.svg";
import axios from "axios";

export const usePatients = () => {
  const [patientsList, setPatientsList] = useState<IPatient[]>([]);
  const [page] = useState(1);
  const [isLoadingList, setIsLoadingList] = useState(false);

  const handleGetPatients = async () => {
    setIsLoadingList(true);

    const { data } = await axios.get(
      "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users"
    );

    setPatientsList(data);

    setIsLoadingList(false);
  };

  useEffect(() => {
    handleGetPatients();
  }, []);

  return { patientsList: patientsList.slice(0, page * 12), isLoadingList };
};
