import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  placeholder?: string;
  form?: UseFormRegisterReturn;
  error?: string;
  label?: string;
  value?: string;
  textarea?: boolean;
  disabled?: boolean;
}

function InputText(props: Props) {
  const inputProps = {
    ...props,
    ...props.form,
    type: "text",
    className: "input-text",
    "data-has-error": props.error != null,
  } as InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
  return (
    <div className="input-text-container">
      {props.label && <label>{props.label}</label>}
      {!props.textarea ? (
        <input {...inputProps} />
      ) : props.disabled ? (
        <div className="textarea-disabled">{inputProps.value}</div>
      ) : (
        <textarea {...inputProps} />
      )}
      {props.error && <p className="validation-input-text">{props.error}</p>}
    </div>
  );
}

export default InputText;
