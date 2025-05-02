import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import { Logout, UserMenu } from "react-admin";
import { Link, matchPath, useLocation } from "react-router-dom";
import { LanguageMenu, TabWithMenu } from "./Menu_AppBar";
import SearchBar from "./Search_Bar";

const Header = () => {
  const location = useLocation();
  const movieResource = ["popular", "top_rated", "now_playing", "upcoming"];
  const seriesResource = ["popular", "top_rated", "on_the_air", "airing_today"];

  //Buttons Create navigation buttons on the navBar
  let currentPath: string | boolean = "/";
  if (!!matchPath("/Main", location.pathname)) {
  } else if (!!matchPath("/home_page", location.pathname)) {
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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box display="flex" justifyContent="flex-start">
              <Tabs
                value={currentPath}
                aria-label="Navigation Tabs"
                indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab
                  label={"Home"}
                  component={Link}
                  to="/Main"
                  value="/MainPage"
                />
                <TabWithMenu
                  name="Movies"
                  value={"/home_page"}
                  resourceOptions={movieResource}
                />
                <TabWithMenu
                  name="Tv Series"
                  value={"/tv_page"}
                  resourceOptions={seriesResource}
                />
                <Tab
                  label={"People"}
                  component={Link}
                  to="/actors_gallery"
                  value="/actors_gallery"
                />
              </Tabs>
            </Box>
            <Box display="flex" justifyContent="center">
              <SearchBar />
            </Box>
            <Box display="flex" justifyContent="flex-end" alignItems="center" gap={1}>
              <Box display="flex" alignItems="center" gap={0.5} >
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
