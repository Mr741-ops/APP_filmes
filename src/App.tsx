import { Admin, CustomRoutes,} from "react-admin";
import { dataProvider } from "./Data/dataProvider";
import { Route } from "react-router-dom";
import MyLayout from "./MyLayout";
import HomePage from "./Home_page/home_page";
import ActorPage from "./Actor_page/actor_page"

export const App = () => 

<Admin layout={MyLayout} dataProvider={dataProvider} >
        <CustomRoutes>
            <Route path="/home_page" element={<HomePage/>}/>
            <Route path="/actor_page" element={<ActorPage/>}/>
        </CustomRoutes>
</Admin>;
