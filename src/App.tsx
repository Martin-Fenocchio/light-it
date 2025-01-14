import PatientsList from "./components/patients/PatientsList";
import "./styles/global.scss";
import "./styles/common.scss";
import "./styles/patients.scss";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import { PatientsContextProvider } from "./context/patients-context";

function App() {
  return (
    <PatientsContextProvider>
      <Header />
      <PatientsList />
      <ToastContainer />
    </PatientsContextProvider>
  );
}

export default App;
