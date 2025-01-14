import { IPatient } from "../../../models/patients-models";
import { formatDate } from "../../../utils/misc-utils";
import Button from "../../commons/button/Button";
import ModalContainer from "../../commons/modal/ModalContainer";
import PatientForm from "../form/PatientForm";
import { usePatientModal } from "../../../hooks/usePatientModal";

interface Props {
  close: () => void;
  patient: IPatient;
}

function PatientModal(props: Props) {
  const {
    register,
    errors,
    handleSubmit,
    thereIsImage,
    editMode,
    handleSetData,
    setThereIsImage,
    handleOnEdit,
    setEditMode,
  } = usePatientModal(props);

  const patient = props.patient;

  return (
    <ModalContainer
      title="Patient information"
      desc="In this section you can see the patient information and update it."
      close={props.close}
    >
      {thereIsImage && (
        <img
          src={patient.avatar}
          alt={`${patient.name} avatar`}
          className="avatar"
          onError={() => setThereIsImage(false)}
        />
      )}

      <PatientForm
        errors={errors}
        register={register}
        patient={patient}
        onSubmit={handleSubmit(handleOnEdit)}
        editMode={editMode}
      />

      <div className="row">
        <p>
          Inscription date: <strong>{formatDate(patient.createdAt)}</strong>
        </p>
        <p>
          ID: <strong>{patient.id}</strong>
        </p>
      </div>

      <footer>
        {editMode ? (
          <>
            <Button
              text="Save changes"
              theme="success"
              onClick={() => handleSubmit(handleOnEdit)()}
            />
            <Button
              text="Cancel edition"
              onClick={handleSetData}
              theme="danger"
            />
          </>
        ) : (
          <Button
            text="Edit information"
            onClick={() => setEditMode(true)}
            theme="primary"
          />
        )}
      </footer>
    </ModalContainer>
  );
}

export default PatientModal;
