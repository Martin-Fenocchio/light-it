import { describe, expect, it, vi } from "vitest";
import { IPatient } from "../models/patients-models";
import PatientItem from "../components/patients/PatientItem";
import { fireEvent, render, screen } from "@testing-library/react";

vi.mock("./modals/PatientModal", () => {
  return ({ patient, close }: { patient: IPatient; close: () => void }) => (
    <div role="dialog">
      <h2>{patient.name}</h2>
      <button onClick={close}>Close</button>
    </div>
  );
});

describe("PatientItem", () => {
  const mockPatient: IPatient = {
    id: "1",
    name: "John Doe",
    description: "A description of John Doe",
    avatar: "https://example.com/avatar.jpg",
    color: "#FFD6BA",
    createdAt: new Date(),
    website: "https://example.com",
  };

  it("renders patient information correctly", () => {
    render(<PatientItem patient={mockPatient} index={0} />);

    expect(screen.getByText(mockPatient.name)).toBeInTheDocument();
    expect(screen.getByText(mockPatient.description)).toBeInTheDocument();
  });

  it("displays initials when the image fails to load", () => {
    render(
      <PatientItem
        patient={{ ...mockPatient, avatar: "invalid-url" }}
        index={0}
      />
    );

    const image = screen.getByAltText(`${mockPatient.name} Avatar`);
    fireEvent.error(image);

    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("opens the modal when the button is clicked", () => {
    render(<PatientItem patient={mockPatient} index={0} />);

    fireEvent.click(screen.getByText("More details"));

    expect(screen.getByTestId("modal")).toBeInTheDocument();
    expect(screen.getByText(mockPatient.name)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("close-moda"));
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });
});
