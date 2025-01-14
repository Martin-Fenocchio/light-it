import { useForm } from "react-hook-form";
import ModalContainer from "../../commons/modal/ModalContainer";
import PatientForm from "../form/PatientForm";
import { toast } from "react-toastify";
import Button from "../../commons/button/Button";

interface Props {
  close: () => void;
}

function AddPatientModal(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnCreate = () => {
    props.close();
    toast.success("Patient created successfully", {
      autoClose: 2000,
    });
  };

  return (
    <ModalContainer
      title="Add patient"
      desc="In this section you can add a new patient"
      close={props.close}
    >
      <PatientForm
        errors={errors}
        register={register}
        onSubmit={handleSubmit(handleOnCreate)}
        editMode={true}
      />

      <footer>
        <Button
          text="Create patient"
          theme="success"
          onClick={() => handleSubmit(handleOnCreate)()}
        />
        <Button text="Cancel" theme="danger" onClick={props.close} />
      </footer>
    </ModalContainer>
  );
}

export default AddPatientModal;
