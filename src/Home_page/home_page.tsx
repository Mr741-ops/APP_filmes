//merges every script that belogs on the home page
import * as React from "react";
import "./homePage.css";
import Carrousel from "./Carrousel";
import { useState } from "react";
import { Container, CssBaseline } from "@mui/material";
import { Dropdown } from "./dropdown";

export const HomePage = () => {

  /* 
  ------------------------------ Variables ------------------------
  */
  const [resource, setResource] = React.useState("movie/popular");
  const [page, setPage] = useState(1);

  /* 
  ------------------------------ Buttons functions------------------
  */
  const incrementPage = () => {
    setPage((prev) => prev + 1);
  };

  const decreasePage = () => {
    if (page != 1) {
      setPage((prev) => prev - 1);
    }
  };

  /* 
  --------------------------------- Title Function ----------------------
  */
  const title = () => {
    if(resource == "movie/popular")
    {
      return("Popular Movies");
    } else {
      return("Top Rated Movies");
    }
  };

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth='xl'>
        <Dropdown resource={resource} setResource={setResource} />
        <h1>{title()}</h1>
        <Carrousel resource={resource} page={page} />
        <button onClick={decreasePage}>Previous Page</button>
        <button onClick={incrementPage}>Next Page</button>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
