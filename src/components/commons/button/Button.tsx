interface Props {
  text: string;
  onClick?: () => void;
  theme: "primary" | "success" | "danger";
  formId?: string;
}

function Button(props: Props) {
  return (
    <button onClick={props.onClick} className="button" data-theme={props.theme}>
      {props.text}
    </button>
  );
}

export default Button;
