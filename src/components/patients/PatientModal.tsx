/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { IPatient } from "../../models/patients-models";
import InputText from "../commons/input/InputText";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/misc-utils";
import CloseModalIcon from "../../styles/assets/x.svg";
import Button from "../commons/button/Button";
import { toast } from "react-toastify";

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
    <div className="patient-modal-container">
      <section className="patient-modal">
        <h3>
          Patient information
          <img src={CloseModalIcon} alt="Close modal" onClick={props.close} />
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          tincidunt, nunc sed ultrices tincidunt
        </p>

        {thereIsImage && (
          <img
            src={patient.avatar}
            alt={`${patient.name} avatar`}
            className="avatar"
            onError={() => setThereIsImage(false)}
          />
        )}

        <form onSubmit={handleSubmit(handleOnEdit)}>
          <InputText
            form={register("name", {
              required: {
                message: "This field is required",
                value: true,
              },
            })}
            error={errors.name?.message as string}
            label="Name"
            disabled={!editMode}
          />
          <InputText
            form={register("website", {
              required: {
                message: "This field is required",
                value: true,
              },
              pattern: {
                value:
                  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w.-](?:\/[\w.-]*)?$/,
                message: "Invalid URL format",
              },
            })}
            error={errors.website?.message as string}
            label="Web Site"
            disabled={!editMode}
          />
          <InputText
            form={register("description", {
              required: {
                message: "This field is required",
                value: true,
              },
            })}
            error={errors.description?.message as string}
            label="Description"
            value={editMode ? undefined : patient.description}
            disabled={!editMode}
            textarea
          />
        </form>

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
      </section>
    </div>
  );
}

export default PatientModal;
