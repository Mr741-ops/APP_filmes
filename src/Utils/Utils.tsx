//Script used to save every function or variable that is generally used throught the app

import { useNavigate } from "react-router-dom";

export function useHandleClick() {
  const navigate = useNavigate();

  return (resource: string, id: any) => {
    navigate(`/${resource}`, { state: { id: id } });
  };
}
