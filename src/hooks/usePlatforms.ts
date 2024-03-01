import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import APIClient from "../services/api-client";
import ms from "../utilities/ms";

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24h
    initialData: platforms,
  });
};

export default usePlatforms;
