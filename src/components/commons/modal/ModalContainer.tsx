import CloseModalIcon from "../../../styles/assets/x.svg";

interface Props {
  close: () => void;
  title: string;
  desc: string;
  children: React.ReactNode;
}

export default function ModalContainer(props: Props) {
  return (
    <div className="patient-modal-container">
      <section className="patient-modal">
        <h3>
          {props.title}
          <img src={CloseModalIcon} alt="Close modal" onClick={props.close} />
        </h3>

        <p>{props.desc}</p>
        {props.children}
      </section>
    </div>
  );
}
