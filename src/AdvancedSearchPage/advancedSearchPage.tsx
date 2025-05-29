import { Container, CssBaseline } from "@mui/material";
import { AdvancedSearch } from "../Utils/AdvancedSearch/AdvencedSearch";

export const AdvancedSearchPage = () => {

  return (
    <Container maxWidth="xl" sx={{ minWidth: "1500px", minHeight: "3220px" }}>
      <CssBaseline />
      <AdvancedSearch/>
    </Container>
  );
};

export default AdvancedSearchPage;
