import PatientsList from "./components/patients/PatientsList";
import "./styles/global.scss";
import "./styles/common.scss";
import "./styles/patients.scss";
import "animate.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import { PatientsContextProvider } from "./context/patients-context";
import Pagination from "./components/pagination/Pagination";

function App() {
  return (
    <main>
      <PatientsContextProvider>
        <Header />
        <PatientsList />
        <Pagination />
        <ToastContainer />
      </PatientsContextProvider>
    </main>
  );
}

export default App;
