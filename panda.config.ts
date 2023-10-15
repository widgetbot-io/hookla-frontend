import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  shorthands: false,

  jsxStyleProps: "none",

  utilities: {
    displayFlex: {
      className: "flex",
      values: ["column", "row", "start"],
      transform(value) {
        return {
          display: "flex",
          flexDirection: value,
        };
      },
    },
    paddingX: {
      className: "padding-x",
      values: "spacing",
      transform(value: string) {
        return {
          paddingLeft: value,
          paddingRight: value,
        };
      },
    },
    paddingY: {
      className: "padding-y",
      values: "spacing",
      transform(value: string) {
        return {
          paddingTop: value,
          paddingBottom: value,
        };
      },
    },
    inputBorder: {
      className: "input-border",
      values: { type: "boolean" },
      transform(value: boolean, { token }) {
        if (!value) return {};

        return {
          borderWidth: "1px",
          borderColor: token("colors.borders.normal"),
          borderStyle: "solid",
          borderRadius: token("radii.input"),
          outline: "none",
          transition: `border-color ${token("durations.fast")}`,

          "&:not([disabled])": {
            "&:hover:not(:focus)": {
              borderColor: token("colors.borders.hover"),
            },

            "&:focus": {
              borderColor: token("colors.borders.focus"),
            },
          },
        };
      },
    },
  },

  // Useful for theme customization
  theme: {
    extend: {
      textStyles: {
        normal: {
          description: "Normal text",
          value: {
            fontSize: "sm",
            lineHeight: "1.2",
          },
        },
        button: {
          description: "Button text",
          value: {
            fontSize: "sm",
            lineHeight: "1.2",
            fontWeight: "500",
          },
        },
        medium: {
          description: "Medium text",
          value: {
            fontSize: "md",
            lineHeight: "1.2",
            fontWeight: "500",
          },
        },
        hero: {
          description: "Hero text",
          value: {
            fontSize: "6xl",
            lineHeight: "1.2",
            fontWeight: "400",
          },
        },
      },
      tokens: {
        durations: {
          fast: { value: "150ms" },
          normal: { value: "300ms" },
        },
        radii: {
          input: {
            value: "{radii.lg}",
          },
        },
        spacing: {
          paddingToMaxWidth: {
            value: "3rem",
          },
        },
        sizes: {
          homeMaxWidth: {
            value: "1200px",
          },
        },
        zIndex: {
          nav: {
            value: 1337,
          },
          popup: {
            value: 9999,
          },
        },
        colors: {
          grey: {
            200: { value: "#EEEEEE" },
          },
          buttons: {
            primary: { value: "#7A97FF" },
            danger: { value: "#FF6868" },
          },
          input: {
            bg: {
              value: "#fff",
            },
            placeholder: {
              value: "#ACACAC",
            },
          },
          borders: {
            normal: { value: "#BCC5C0" },
            hover: { value: "#707070" },
            focus: { value: "black" },
          },
          text: {
            primary: { value: "#343434" },
            secondary: { value: "#535353" },
          },
          neutral: {
            100: { value: "#F4F8F6" },
            200: { value: "#D9DFDB" },
            300: { value: "#BCC5C0" },
            400: { value: "#A4ACA7" },
            500: { value: "#89908C" },
            600: { value: "#676C69" },
            700: { value: "#444846" },
            800: { value: "#202221" },
            900: { value: "#0C0D0C" },
          },
          green: {
            100: { value: "#CFF8DF" },
            200: { value: "#B9EFCE" },
            300: { value: "#8FDCAC" },
            400: { value: "#50AF74" },
            500: { value: "#369259" },
            600: { value: "#287947" },
            700: { value: "#15502B" },
            800: { value: "#092915" },
            900: { value: "#010603" },
          },
          magenta: {
            100: { value: "#F8CFE8" },
            200: { value: "#EFB9DB" },
            300: { value: "#DC8FBF" },
            400: { value: "#AF508B" },
            500: { value: "#92366F" },
            600: { value: "#79285A" },
            700: { value: "#501539" },
            800: { value: "#29091D" },
            900: { value: "#060104" },
          },
          red: {
            100: { value: "#FFEEEE" },
            200: { value: "#FAD7D7" },
            300: { value: "#F5BEBE" },
            400: { value: "#EB9A9A" },
            500: { value: "#DF7878" },
            600: { value: "#D35454" },
            700: { value: "#C93232" },
            800: { value: "#BA1414" },
            900: { value: "#A00000" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
