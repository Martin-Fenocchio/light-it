import PatientsList from "./components/patients/PatientsList";
import { usePatients } from "./hooks/usePatients";
import "./styles/global.scss";
import "./styles/common.scss";
import "./styles/patients.scss";
import { ToastContainer } from "react-toastify";

function App() {
  const { patientsList } = usePatients();

  return (
    <>
      <ToastContainer />
      <PatientsList patientsList={patientsList} />
    </>
  );
}

export default App;
