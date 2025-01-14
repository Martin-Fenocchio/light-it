import { usePatients } from "../../hooks/usePatients";
import SkeletonLoading from "../commons/skeleton/SkeletonLoading";
import PatientItem from "./PatientItem";

function PatientsList() {
  const { patientsPage, isLoadingList, searchController } = usePatients({
    fetch: true,
  });

  return (
    <section className="patients-list">
      {isLoadingList &&
        Array(12)
          .fill(0)
          .map((_, index) => <SkeletonLoading key={index} />)}
      {patientsPage.map((patient, index) => (
        <PatientItem patient={patient} key={patient.id} index={index} />
      ))}

      {!isLoadingList && patientsPage.length == 0 && searchController && (
        <div className="empty-table-placeholder">
          <p>No users with `{searchController}`</p>
        </div>
      )}
    </section>
  );
}

export default PatientsList;
