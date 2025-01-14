/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { IPatient } from "../../../models/patients-models";
import { useEffect, useState } from "react";
import { formatDate } from "../../../utils/misc-utils";
import Button from "../../commons/button/Button";
import { toast } from "react-toastify";
import ModalContainer from "../../commons/modal/ModalContainer";
import PatientForm from "../form/PatientForm";

interface Props {
  close: () => void;
  patient: IPatient;
}

function PatientModal({ patient, ...props }: Props) {
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
    props.close();
    toast.success("Information updated successfully", {
      autoClose: 2000,
    });
  };

  useEffect(() => {
    handleSetData();
  }, []);

  return (
    <ModalContainer
      title="Patient information"
      desc="In this section you can see the patient information and update it."
      close={props.close}
    >
      {thereIsImage && (
        <img
          src={patient.avatar}
          alt={`${patient.name} avatar`}
          className="avatar"
          onError={() => setThereIsImage(false)}
        />
      )}

      <PatientForm
        errors={errors}
        register={register}
        patient={patient}
        onSubmit={handleSubmit(handleOnEdit)}
        editMode={editMode}
      />

      <div className="row">
        <p>
          Inscription date: <strong>{formatDate(patient.createdAt)}</strong>
        </p>
        <p>
          ID: <strong>{patient.id}</strong>
        </p>
      </div>

      <footer>
        {editMode ? (
          <>
            <Button
              text="Save changes"
              theme="success"
              onClick={() => handleSubmit(handleOnEdit)()}
            />
            <Button
              text="Cancel edition"
              onClick={handleSetData}
              theme="danger"
            />
          </>
        ) : (
          <Button
            text="Edit information"
            onClick={() => setEditMode(true)}
            theme="primary"
          />
        )}
      </footer>
    </ModalContainer>
  );
}

export default PatientModal;
