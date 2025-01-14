/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { usePatientsContext } from "../context/patients-context";
import axios from "axios";
import { IPatient } from "../models/patients-models";
import { toast } from "react-toastify";

const colors = ["#FFD6BA", "#FFC0CB", "#B0E0E6", "#98FB98", "#FFA07A"];

export const usePatients = (config: { fetch?: boolean }) => {
  const {
    setPatientsList,
    patientsPage,
    patientsList,
    setPatientsPage,
    setPage,
    searchController,
    setSearchController,
    totalCount,
    setTotalCount,
    page,
  } = usePatientsContext();

  const [isLoadingList, setIsLoadingList] = useState(false);

  const handleFetchPatients = async () => {
    setIsLoadingList(true);

    try {
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
      setTotalCount(payload.length);
      setPatientsPage?.(payload.slice(0 * page, 12));
    } catch {
      toast.error("An error occurred while fetching the patients");
    }

    setIsLoadingList(false);
  };

  const handleonChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchController(e.target.value);
  };

  const getPatientsPage = () => {
    const filteredList = patientsList.filter((patient) =>
      patient.name.toLowerCase().includes(searchController.toLowerCase())
    );

    const skip = 12 * page;

    setTotalCount(filteredList.length);
    setPatientsPage?.(filteredList.slice(skip, skip + 12));
  };

  useEffect(getPatientsPage, [searchController, page]);

  useEffect(() => {
    if (config.fetch) handleFetchPatients();
  }, []);

  return {
    patientsPage: patientsPage || [],
    isLoadingList,
    searchController,
    handleonChangeSearch,
    patientsList: patientsList || [],
    amountOfPages: Math.ceil(totalCount / 12),
    changePage: setPage,
    page,
  };
};
