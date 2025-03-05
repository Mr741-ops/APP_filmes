import { Admin, Resource } from "react-admin";
import MyLayout from "./CostumLayout";

export const App = () => 

<Admin layout={MyLayout}>

    <Resource name="popular"/>
    
</Admin>;
