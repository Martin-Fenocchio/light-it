/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import { describe, expect, it, Mock, vi } from "vitest";
import { PatientsContextProvider } from "../context/patients-context";
import { usePatients } from "../hooks/usePatients";

vi.mock("axios");

describe("usePatients", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <PatientsContextProvider>{children}</PatientsContextProvider>
  );

  it("should fetch patients and set the patients list", async () => {
    const mockPatients = [
      { id: "1", name: "John Doe" },
      { id: "2", name: "Jane Doe" },
    ];
    (axios.get as Mock).mockResolvedValueOnce({ data: mockPatients });

    const { result, waitForNextUpdate } = renderHook(
      () => usePatients({ fetch: true }),
      { wrapper }
    );

    await waitForNextUpdate();

    expect(
      result.current.patientsList.map((p) => ({ ...p, color: undefined }))
    ).toEqual(mockPatients.map((p) => ({ ...p, color: undefined })));
    expect(result.current.isLoadingList).toBe(false);
  });

  it("should handle errors when fetching patients", async () => {
    (axios.get as Mock).mockRejectedValueOnce(new Error("Network Error"));

    const { result, waitForNextUpdate } = renderHook(
      () => usePatients({ fetch: true }),
      { wrapper }
    );

    await waitForNextUpdate();

    expect(result.current.patientsList).toEqual([]);
    expect(result.current.isLoadingList).toBe(false);
  });

  it("should set isLoadingList to true while fetching", async () => {
    (axios.get as Mock).mockImplementation(() => new Promise(() => {}));

    const { result } = renderHook(() => usePatients({ fetch: true }), {
      wrapper,
    });

    expect(result.current.isLoadingList).toBe(true);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    expect(result.current.isLoadingList).toBe(true);
  });

  it("should update search controller and filter patients", () => {
    const { result } = renderHook(() => usePatients({ fetch: false }), {
      wrapper,
    });

    act(() => {
      result.current.handleonChangeSearch({ target: { value: "John" } } as any);
    });

    expect(result.current.searchController).toBe("John");
  });
});
