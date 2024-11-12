import { useRequest } from "ahooks";
import { fetcher, getHost } from "@/helpers/request"; 

const getStatistics = () => { 
  return fetcher(null, `${getHost()}/website/api/v1/statistics`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json" 
    }),
  });
};

export const useStatistics = () => {
  return useRequest(getStatistics, {
    manual: true,
    cacheKey: 'heyo-statistics',
    retryCount: -1 
  });
};
