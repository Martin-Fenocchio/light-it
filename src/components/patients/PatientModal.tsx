/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { IPatient } from "../../models/patients-models";
import InputText from "../commons/input/InputText";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/misc-utils";
import CloseModalIcon from "../../styles/assets/x.svg";

interface Props {
  close: () => void;
  patient: IPatient;
}

function PatientModal({ patient, ...props }: Props) {
  const { register, setValue } = useForm();
  const [thereIsImage, setThereIsImage] = useState(true);

  useEffect(() => {
    setValue("name", patient.name);
    setValue("website", patient.website);
    setValue("description", patient.description);
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

        <form>
          <InputText form={register("name")} label="Name" />
          <InputText form={register("website")} label="Web Site" />
          <InputText
            form={register("description")}
            label="Description"
            value={patient.description}
            disabled
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
      </section>
    </div>
  );
}

export default PatientModal;
