const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    grays: {
      //light -> dark
      0: "hsl(105, 50%, 100%)",
      1: "hsl(105, 50%, 95%)",
      2: "hsl(105, 50%, 85%)",
      3: "hsl(105, 50%, 75%)",
      4: "hsl(105, 50%, 65%)",
      5: "hsl(105, 50%, 55%)",
      6: "hsl(105), 50%, 45%)",
      7: "hsl(105, 50%, 35%)",
      8: "hsl(105, 50%, 25%)",
      9: "hsl(105, 50%, 15%)",
      10: "hsl(105, 50%, 5%)",
    },
  },
}

const variants = {
  iconButton: {
    primary: {
      color: theme.colors.grays[8],
    },
    contrast: {
      color: theme.colors.grays[0],
    },
  },
  header: {
    primary: {
      backgroundColor: theme.colors.grays[8],
    },
  },
}

export const Gray = { ...theme, variants }
