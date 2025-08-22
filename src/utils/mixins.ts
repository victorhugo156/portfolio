// src/utils/responsive.ts
import { css } from 'styled-components';

/**
 * Responsive CSS helpers with full IntelliSense
 * These give you complete CSS property suggestions and validation
 */

export const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px'
} 

/**
 * Responsive CSS helper functions
 * Usage: ${responsive.maxTablet`display: flex;`}
 */
export const responsive = {
  // Mobile-first (min-width)
  mobileS: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${breakpoints.mobileS}) {
      ${css(cssRules, ...args)}
    }
  `,
  
  mobileM: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${breakpoints.mobileM}) {
      ${css(cssRules, ...args)}
    }
  `,
  
  mobileL: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${breakpoints.mobileL}) {
      ${css(cssRules, ...args)}
    }
  `,
  
  tablet: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${breakpoints.tablet}) {
      ${css(cssRules, ...args)}
    }
  `,
  
  laptop: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${breakpoints.laptop}) {
      ${css(cssRules, ...args)}
    }
  `,
  
  laptopL: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${breakpoints.laptopL}) {
      ${css(cssRules, ...args)}
    }
  `,
  
  desktop: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${breakpoints.desktop}) {
      ${css(cssRules, ...args)}
    }
  `,
  
  // Desktop-first (max-width)
  maxMobileS: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: ${breakpoints.mobileS}) {
      ${css(cssRules, ...args)}
    }
  `,
  
  maxMobileM: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: ${breakpoints.mobileM}) {
      ${css(cssRules, ...args)}
    }
  `,
  
  maxMobileL: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: ${breakpoints.mobileL}) {
      ${css(cssRules, ...args)}
    }
  `,
  
  maxTablet: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: ${breakpoints.tablet}) {
      ${css(cssRules, ...args)}
    }
  `,
  
  maxLaptop: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: ${breakpoints.laptop}) {
      ${css(cssRules, ...args)}
    }
  `,
  
  maxLaptopL: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: ${breakpoints.laptopL}) {
      ${css(cssRules, ...args)}
    }
  `,
  
  maxDesktop: (cssRules: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: ${breakpoints.desktop}) {
      ${css(cssRules, ...args)}
    }
  `
}; 