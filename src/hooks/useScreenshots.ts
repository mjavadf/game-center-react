import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "../utilities/ms";

interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
  isDeleted: boolean;
}

const useScreenshots = (id: number | string) => {
  const apiClient = new APIClient<Screenshot>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useScreenshots;
