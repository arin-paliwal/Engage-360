import { renderHook, act } from "@testing-library/react-hooks";
import axiosInstance from "../api/axios";
import { vi, Mock } from "vitest";
import usePayrolls from "../hooks/usePayrolls";

vi.mock("../api/axios");

describe("usePayrolls hook", () => {
  it("should return loading true initially", () => {
    const { result } = renderHook(() => usePayrolls());
    expect(result.current.loading).toBe(true);
    expect(result.current.fetchedPayrolls).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  it("should return payroll data on successful API call", async () => {
    const mockData = [{ id: 1, name: "John Doe", salary: 50000 }];
    (axiosInstance.get as Mock).mockResolvedValueOnce({ data: mockData });

    const { result, waitForNextUpdate } = renderHook(() => usePayrolls());

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.fetchedPayrolls).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });

  it("should return error on failed API call", async () => {
    const mockError = new Error("Failed to fetch payrolls");
    (axiosInstance.get as Mock).mockRejectedValueOnce(mockError);

    const { result, waitForNextUpdate } = renderHook(() => usePayrolls());

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.fetchedPayrolls).toEqual([]);
    expect(result.current.error).toEqual(mockError);
  });
});
