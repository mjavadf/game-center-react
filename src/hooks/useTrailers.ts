import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "../utilities/ms";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const useTrailers = (id: number | string) => {
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);
  return useQuery({
    queryKey: ["trailers", id],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useTrailers;
