import { IPatient } from "../../models/patients-models";
import PatientItem from "./PatientItem";

interface Props {
  patientsList: IPatient[];
}

function PatientsList({ patientsList }: Props) {
  return (
    <section className="patients-list">
      {patientsList.map((patient) => (
        <PatientItem patient={patient} key={patient.id} />
      ))}
    </section>
  );
}

export default PatientsList;
