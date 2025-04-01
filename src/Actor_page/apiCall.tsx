import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";

export const useApiCall = (resource: string, id: any) => {
  const dataProvider = useDataProvider();

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if(id) {
    dataProvider
      .getOne(resource, id)
      .then(({ data }) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
    }
  }, [resource, id]);

  console.log(data);
  return { data };
};

export default useApiCall;
