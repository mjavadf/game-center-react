import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client"
import ms from "../utilities/ms";


const apiClient = new APIClient<Platform>('/platforms')

export interface Platform {
  id: number;
  name: string;
  slug: string,
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24h
    initialData: platforms
  })
}

export default usePlatforms