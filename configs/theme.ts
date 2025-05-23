import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const AppTheme = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          color: "var(--color-primary)",
          inverseColor: "#fff",
          hoverColor: "hsl(from var(--color-primary) h s l / 0.8)", // 80% opacity
          activeColor: "hsl(from var(--color-primary) h s l / 0.9)", // 50% opacity
          borderColor: "var(--color-primary)",
          focusBorderColor: "hsl(from var(--color-primary) h s l / 0.8)", // 80% opacity
          hoverBorderColor: "hsl(from var(--color-primary) h s l / 0.9)", // 80% opacity
        },
        highlight: {
          color: "var(--color-color)",
          // focusBackgroundColor: "var(--color-)"
          focusColor: "var(--color-foreground)",
        },
        semantic: {
          primary: {
            50: "hsl(from var(--color-primary) h s l / 0.2)",
            100: "hsl(from var(--color-primary) h s l / 0.7)",
            200: "hsl(from var(--color-primary) h s l / 0.75)",
          },
          content: {
            background: "var(--color-content-background)",
            borderColor: "var(--color-content-border)",
          },
        },
      },
    },
  },
});

export default AppTheme;
