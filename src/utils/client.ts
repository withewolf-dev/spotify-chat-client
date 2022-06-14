import axios from "axios";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // enabled: false,
    },
  },
});

export const apiClient = axios.create({
  baseURL: "http://localhost:4000",
});
