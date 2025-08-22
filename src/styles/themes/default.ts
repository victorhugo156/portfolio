

export const defaultTheme = {
  colors: {
    black: '#1A1A1A',
    white: '#FDFDFD',
    gray: '#E0E0E0',
    grayLight: '#F5F5F5',
    grayMedium: '#BDBDBD',
    lime: '#C9F31D',     // or use '#A5FF3D' for hover if preferred
    green: "#0BAE4B",
  },

  fonts: {
    heading: "'Antonio', sans-serif",
    body: "'Roboto', sans-serif",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },

  // fontSizes: {
  //   xs: '0.25rem',  // 4px
  //   sm: '0.5rem',   // 8px
  //   base: '1rem',   // 16px
  //   md: '1.5rem',   // 24px
  //   lg: '2rem',     // 32px
  //   xl: '3rem',     // 48px
  //   '2xl': '4rem',  // 64px
  //   '3xl': '6rem',  // 96px
  //   '4xl': '8rem',  // 128px
  // },

  fontSizes: {
  xs: 'clamp(0.25rem, 0.5vw, 0.5rem)',    // 4px → 8px
  sm: 'clamp(0.5rem, 1vw, 0.75rem)',      // 8px → 12px
  base: 'clamp(1rem, 2vw, 1.25rem)',      // 16px → 20px
  md: 'clamp(1.5rem, 3vw, 2rem)',         // 24px → 32px
  lg: 'clamp(2rem, 4vw, 3rem)',           // 32px → 48px
  xl: 'clamp(3rem, 5vw, 4rem)',           // 48px → 64px
  '2xl': 'clamp(4rem, 6vw, 6rem)',        // 64px → 96px
  '3xl': 'clamp(6rem, 8vw, 8rem)',        // 96px → 128px
  '4xl': 'clamp(8rem, 10vw, 10rem)',      // 128px → 160px
},

}