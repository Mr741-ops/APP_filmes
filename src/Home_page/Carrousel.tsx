import * as React from "react";
import useApiCall from "../Data/apiCall";
import { CustomDialog  } from "./dialogBox";

interface CarrouselProps {
  resource: string;
  page: number;
}


const Carrousel: React.FC<CarrouselProps> = ({ resource, page }) => {
  const { data } = useApiCall(resource, page);
  
  return (
    <div className="scroll-container">
      {CustomDialog(data)}
    </div>
  );
};

export default Carrousel;
