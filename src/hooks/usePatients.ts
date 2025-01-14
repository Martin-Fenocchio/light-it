/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { usePatientsContext } from "../context/patients-context";
import axios from "axios";
import { debounce } from "lodash";
import { IPatient } from "../models/patients-models";

const colors = ["#FFD6BA", "#FFC0CB", "#B0E0E6", "#98FB98", "#FFA07A"];

export const usePatients = (config: { fetch?: boolean }) => {
  const { setPatientsList, patientsPage, setPatientsPage } =
    usePatientsContext();

  const [isLoadingList, setIsLoadingList] = useState(false);
  const [searchController, setSearchController] = useState("");

  const handleGetPatients = async () => {
    setIsLoadingList(true);

    const response = await axios.get(
      "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users"
    );

    const payload = response.data.map((patient: IPatient) => {
      return {
        ...patient,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    setPatientsList?.(payload);
    setPatientsPage?.(payload.slice(0, 12));

    setIsLoadingList(false);
  };

  const handleonChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchController(e.target.value);
    debounceSearch(e.target.value);
  };

  const handleFilterPatients = (value: string) => {
    setPatientsList?.((list) => {
      const filteredPatients = (list ?? []).filter((patient) =>
        patient.name.toLowerCase().includes(value.toLowerCase())
      );

      setPatientsPage?.(filteredPatients.slice(0, 12));

      return list;
    });
  };

  const debounceSearch = useCallback(debounce(handleFilterPatients, 300), []);

  useEffect(() => {
    if (config.fetch) handleGetPatients();
  }, []);

  return {
    patientsPage: patientsPage || [],
    isLoadingList,
    searchController,
    handleonChangeSearch,
  };
};
