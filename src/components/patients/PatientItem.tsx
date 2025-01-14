import { useState } from "react";
import { IPatient } from "../../models/patients-models";
import Chevron from "../../styles/assets/chevron-right.svg";
import PatientModal from "./modals/PatientModal";

interface Props {
  patient: IPatient;
  index: number;
}

function PatientItem({ patient, ...props }: Props) {
  const [imageExists, setImageExists] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const getInitials = () => {
    const names = patient.name.split(" ");
    return names
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase();
  };

  return (
    <>
      <article
        className="patient-item animate__animated animate__fadeIn"
        style={{
          animationDelay: `${props.index ? props.index * 0.1 : 0}s`,
        }}
      >
        <header
          style={{
            backgroundColor: patient.color,
          }}
        />
        <div className="avatar">
          {imageExists ? (
            <img
              src={patient.avatar}
              alt={`${patient.name} Avatar`}
              onError={() => {
                setImageExists(false);
              }}
            />
          ) : (
            <div className="user-initials">{getInitials()}</div>
          )}
        </div>
        <h3>{patient.name}</h3>
        <p className="description">{patient.description}</p>

        <button onClick={() => setShowModal(true)}>
          More details
          <img src={Chevron} alt="Expand details" />
        </button>
      </article>
      {showModal && (
        <PatientModal patient={patient} close={() => setShowModal(false)} />
      )}
    </>
  );
}

export default PatientItem;
