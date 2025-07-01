import { AppBar, Box, IconButton, Tab, Tabs, Toolbar } from "@mui/material";
import { Logout, UserMenu } from "react-admin";
import { Link, matchPath, useLocation } from "react-router-dom";
import { LanguageMenu, TabWithMenu } from "./Menu_AppBar";
import SearchBar from "./SearchBar";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useTranslation } from "react-i18next";

const Header = () => {
  const location = useLocation();
  const movieResource = ["popular", "top_rated", "now_playing", "upcoming","advancedSearchMovies"];
  const seriesResource = ["popular", "top_rated", "on_the_air", "airing_today","advancedSearchSeries"];
  const { t } = useTranslation();

  let currentPath: string | boolean = "/";
  if (!!matchPath("/Main", location.pathname)) {
    currentPath = "/Main";
  } else if (!!matchPath("/home_page", location.pathname)) {
    currentPath = "/home_page";
  } else if (!!matchPath("/actors_gallery", location.pathname)) {
    currentPath = "/actors_gallery";
  } else if (!!matchPath("/tv_page", location.pathname)) {
    currentPath = "/tv_page";
  } else if (!!matchPath("/hangedman", location.pathname)) {
    currentPath = "/hangedman";
  } 
  else {
    currentPath = false;
  }

  const handleClick = () => {
    window.location.reload();
  };

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
                  label={t("navigation.Home")}
                  component={Link}
                  to="/Main"
                  value="/Main"
                />
                <TabWithMenu
                  name={t("navigation.Movies")}
                  value={"/home_page"}
                  resourceOptions={movieResource}
                />
                <TabWithMenu
                  name={t("navigation.TvSeries")}
                  value={"/tv_page"}
                  resourceOptions={seriesResource}
                />
                <Tab
                  label={t("navigation.People")}
                  component={Link}
                  to="/actors_gallery"
                  value="/actors_gallery"
                />
                <Tab
                  label={t("navigation.Games")}
                  component={Link}
                  to="/hangedman"
                  value="/hangedman"
                />
              </Tabs>
            </Box>
            <Box display="flex" justifyContent="center">
              <SearchBar />
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              gap={1}
            >
              <IconButton
                aria-label="refresh"
                size="small"
                onClick={handleClick}
                sx={{ color: "secondary.main" }}
              >
                <RefreshIcon fontSize="inherit" />
              </IconButton>
              <Box display="flex" alignItems="center">
                <Box>
                  <LanguageMenu />
                </Box>
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
