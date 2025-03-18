import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";

export const useApiCall = (resource: string) => {
    const dataProvider = useDataProvider();

    const [ data, setData ] = useState<any[]>([]);

    useEffect(() => {
        dataProvider.getList(resource, { pagination: { page: 1, perPage: 10 } })
          .then(({ data }) => setData(data))
          .catch((error) => console.error("Error fetching data:", error));
      }, [resource]);

      return { data };
};

export default useApiCall;