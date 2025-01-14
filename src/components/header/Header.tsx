import Button from "../commons/button/Button";
import { usePatients } from "../../hooks/usePatients";
import { useState } from "react";
import AddPatientModal from "../patients/modals/AddPatientModal";

function Header() {
  const { searchController, handleonChangeSearch } = usePatients({});
  const [showModalCreatePatient, setShowModalCreatePatient] = useState(false);

  return (
    <>
      <header className="header-layout animate__animated animate__fadeInDown">
        <div className="input-text-container">
          <input
            type="search"
            placeholder="Search a patient..."
            value={searchController}
            onChange={handleonChangeSearch}
          />
        </div>
        <Button
          text="Add patient"
          theme="primary"
          onClick={() => setShowModalCreatePatient(true)}
        />
      </header>
      {showModalCreatePatient && (
        <AddPatientModal close={() => setShowModalCreatePatient(false)} />
      )}
    </>
  );
}

export default Header;
