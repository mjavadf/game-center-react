import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    // gray: {
    //   50: "#defefa",
    //   100: "#b9f4ef",
    //   200: "#92eae3",
    //   300: "#6ae2d8",
    //   400: "#44dacd",
    //   500: "#2cc0b4",
    //   600: "#1d958c",
    //   700: "#0f6b64",
    //   800: "#00413c",
    //   900: "#001715",
    // },
  },
});

export default theme;
