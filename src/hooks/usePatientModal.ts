/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IPatient } from "../models/patients-models";

export const usePatientModal = ({
  patient,
  close,
}: {
  patient: IPatient;
  close: () => void;
}) => {
  const {
    register,
    setValue,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [thereIsImage, setThereIsImage] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const handleSetData = () => {
    setEditMode(false);
    setValue("name", patient.name);
    setValue("website", patient.website);
    setValue("description", patient.description);
    clearErrors();
  };

  const handleOnEdit = () => {
    close();
    toast.success("Information updated successfully", {
      autoClose: 2000,
    });
  };

  useEffect(() => {
    handleSetData();
  }, []);

  return {
    register,
    errors,
    handleSubmit,
    thereIsImage,
    editMode,
    handleSetData,
    setThereIsImage,
    handleOnEdit,
    setEditMode,
  };
};
