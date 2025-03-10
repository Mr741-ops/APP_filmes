import { Admin, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import MyLayout from "./CustomLayout";


export const App = () => 

<Admin layout={MyLayout}>
        <CustomRoutes>
            <Route path="/home_page" element={"/"}/>
        </CustomRoutes>
</Admin>;
