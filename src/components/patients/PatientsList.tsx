import { usePatients } from "../../hooks/usePatients";
import PatientItem from "./PatientItem";

function PatientsList() {
  const { patientsPage } = usePatients({ fetch: true });
  console.log("patientsPage", patientsPage);

  return (
    <section className="patients-list">
      {patientsPage.map((patient) => (
        <PatientItem patient={patient} key={patient.id} />
      ))}
    </section>
  );
}

export default PatientsList;
