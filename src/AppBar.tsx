import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import { Logout, UserMenu } from "react-admin";
import { Link, matchPath, useLocation } from "react-router-dom";
import { LanguageMenu, TabWithMenu } from "./Menu_AppBar";
import SearchBar from "./Search_Bar";

const Header = () => {
  const location = useLocation();
  const movieResource = ["popular","top_rated","now_playing","upcoming"]
  const seriesResource = ["popular","top_rated","on_the_air","airing_today"]

  //Buttons Create navigation buttons on the navBar
  let currentPath: string | boolean = "/";
  if (!!matchPath("/home_page", location.pathname)) {
    currentPath = "/home_page";
  } else if (!!matchPath("/actors_gallery", location.pathname)) {
    currentPath = "/actors_gallery";
  } else if (!!matchPath("/tv_page", location.pathname)) {
    currentPath = "/tv_page";
  } else {
    currentPath = false;
  }

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
                <TabWithMenu name="Movies" value={"/home_page"} resourceOptions={movieResource} />
                <Tab
                  label={"People"}
                  component={Link}
                  to="/actors_gallery"
                  value="/actors_gallery"
                />
                <TabWithMenu name="Tv Series" value={"/tv_page"} resourceOptions={seriesResource}/>
              </Tabs>
            </Box>
            <Box>
              <SearchBar />
            </Box>
            <Box display="flex" alignItems="center">
              <Box display="flex" alignItems="center">
                <Box sx={{ fontSize: "0.75rem", color: "white" }}>
                  Language:
                </Box>
                <LanguageMenu />
              </Box>
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
