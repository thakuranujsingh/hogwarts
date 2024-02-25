import React, { ReactElement, Suspense } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { theme } from "@/theme";
import { GlobalStyle } from "@/theme/defaultCss";
import { StoreProvider } from "@/store/StoreProvider";
import { ThemeProvider } from "@mui/material";
export * from "@testing-library/react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StoreProvider>{children}</StoreProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
