import { theme } from "@/theme";
import { GlobalStyle } from "@/theme/defaultCss";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { Suspense } from "react";
import { StoreProvider } from "@/store/StoreProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StoreProvider>
          <Suspense>
            <Component {...pageProps} />
          </Suspense>
        </StoreProvider>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
