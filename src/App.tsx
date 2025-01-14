//Setup
import { ToastContainer } from "react-toastify";
import { PatientsContextProvider } from "./context/patients-context";

// Layout
import Header from "./components/header/Header";
import PatientsList from "./components/patients/PatientsList";
import Pagination from "./components/pagination/Pagination";

// Styles
import "./styles/global.scss";
import "./styles/common.scss";
import "./styles/patients.scss";
import "animate.css";

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
