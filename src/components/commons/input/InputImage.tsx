import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  error: string;
}

function InputImage({ register, error }: Props) {
  return (
    <div className="input-text-container image-picker">
      <label htmlFor="image">Avatar</label>
      <input
        type="file"
        accept="image/*"
        id="image"
        {...register("image", {
          required: {
            message: "The image is required",
            value: true,
          },
        })}
      />
      {error && <p className="validation-input-text">{error}</p>}
    </div>
  );
}

export default InputImage;
