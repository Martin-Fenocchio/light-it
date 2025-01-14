import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import InputText from "../../commons/input/InputText";
import { IPatient } from "../../../models/patients-models";
import InputImage from "../../commons/input/InputImage";

interface Props {
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  editMode: boolean;
  patient?: IPatient;
  onSubmit: () => void;
}

function PatientForm({ errors, onSubmit, register, editMode, patient }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <InputText
        form={register("name", {
          required: {
            message: "This field is required",
            value: true,
          },
        })}
        error={errors.name?.message as string}
        label="Name"
        disabled={!editMode}
        placeholder="Enter the patient name"
      />
      <InputText
        form={register("website", {
          required: {
            message: "This field is required",
            value: true,
          },
          pattern: {
            value:
              /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w.-](?:\/[\w.-]*)?$/,
            message: "Invalid URL format",
          },
        })}
        placeholder="Enter the patient website"
        error={errors.website?.message as string}
        label="Web Site"
        disabled={!editMode}
      />
      <InputText
        form={register("description", {
          required: {
            message: "This field is required",
            value: true,
          },
        })}
        placeholder="Enter the patient description"
        error={errors.description?.message as string}
        label="Description"
        value={editMode ? undefined : patient?.description}
        disabled={!editMode}
        textarea
      />

      {editMode && (
        <InputImage
          register={register}
          error={errors.image?.message as string}
        />
      )}
    </form>
  );
}

export default PatientForm;
