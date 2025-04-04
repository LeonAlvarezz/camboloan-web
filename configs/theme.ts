import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const AppTheme = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          color: "hsl(359, 100%, 63%)",
          inverseColor: "#fff",
          hoverColor: "hsl(359, 100%, 53%)",
          activeColor: "hsl(359, 100%, 43%)",
        },
        highlight: {
          background: "{red.300}",
          focusBackground: "{red.200}",
          color: "{red.300}",
          focusColor: "{red.300}",
        },
      },
    },
  },
});

export default AppTheme;
