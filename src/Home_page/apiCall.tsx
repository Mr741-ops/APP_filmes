import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";

export const useApiCall = (resource: string, page: any) => {
    const dataProvider = useDataProvider();

    const [ data, setData ] = useState<any[]>([]);

    useEffect(() => {
        dataProvider.getList(resource,  { pagination: { page: page, perPage: 10 }})
          .then(({ data }) => setData(data))
          .catch((error) => console.error("Error fetching data:", error));
      }, [resource, page]);

      return { data };
};

export default useApiCall;