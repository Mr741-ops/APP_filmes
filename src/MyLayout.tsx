import { Suspense, ReactNode } from "react";
import { Container } from "@mui/material";
import { Error, Loading, CheckForApplicationUpdate } from "react-admin";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./AppBar";

const MyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Container
        sx={{
          maxWidth: { xl: "100vw" },
          maxHeight: { xl: "100vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
        <main id="main-content">
          <ErrorBoundary FallbackComponent={Error}>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </ErrorBoundary>
        </main>
      </Container>
      <CheckForApplicationUpdate interval={30 * 1000} />
    </>
  );
};

export default MyLayout;
