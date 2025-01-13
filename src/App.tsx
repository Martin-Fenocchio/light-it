import PatientsList from "./components/patients/PatientsList";
import { usePatients } from "./hooks/usePatients";
import "./styles/global.scss";
import "./styles/patients.scss";

function App() {
  const { patientsList } = usePatients();

  return (
    <>
      <PatientsList patientsList={patientsList} />
    </>
  );
}

export default App;
