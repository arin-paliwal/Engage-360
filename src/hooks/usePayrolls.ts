import { useState, useEffect } from "react";
import { EmployeePayrolls } from "../types/admin-dashboard/types";
import axiosInstance from "../api/axios";

interface UsePayrollsReturn {
  fetchedPayrolls: EmployeePayrolls[];
  loading: boolean;
  error: Error | null;
}

const usePayrolls = (): UsePayrollsReturn => {
  const [fetchedPayrolls, setPayrolls] = useState<EmployeePayrolls[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/employee_payrolls");
        setPayrolls(response.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { fetchedPayrolls, loading, error };
};

export default usePayrolls;
