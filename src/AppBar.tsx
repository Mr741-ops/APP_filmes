import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import { LoadingIndicator, Logout, useRefresh, UserMenu } from "react-admin";
import { Link, matchPath, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  //Buttons Create navigation buttons on the navBar
  let currentPath: string | boolean = "/";
  if (!!matchPath("/home_page", location.pathname)) {
    currentPath = "/home_page";
  } else if (!!matchPath("/actor_page", location.pathname)) {
    currentPath = "/actor_page";
  } else if (!!matchPath("/trending", location.pathname)) {
    currentPath = "/trending";
  } else {
    currentPath = false;
  }

  const refresh = useRefresh();

  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar variant="dense">
          <Box flex={1} display="flex" justifyContent="space-between">
            <Box>
              <Tabs
                value={currentPath}
                aria-label="Navigation Tabs"
                indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab
                  label={"Home"}
                  component={Link}
                  to="/home_page"
                  value="/home_page"
                />
                <Tab
                  label={"People"}
                  component={Link}
                  to="/Actors_Gallery"
                  value="/Actors_Gallery"
                />
              </Tabs>
            </Box>
            <Box display="flex" alignItems="center">
              <LoadingIndicator  onClick={refresh}/>
              <UserMenu>
                <Logout />
              </UserMenu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
