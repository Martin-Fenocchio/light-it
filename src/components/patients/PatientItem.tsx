import { useState } from "react";
import { IPatient } from "../../models/patients-models";

interface Props {
  patient: IPatient;
}

function PatientItem({ patient }: Props) {
  const [imageExists, setImageExists] = useState(true);
  const colors = ["#FFD6BA", "#FFC0CB", "#B0E0E6", "#98FB98", "#FFA07A"];

  const getInitials = () => {
    const names = patient.name.split(" ");
    return names
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase();
  };

  return (
    <article className="patient-item">
      <header
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
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
    </article>
  );
}

export default PatientItem;
