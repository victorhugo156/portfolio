# Responsive Design Guide

This project now includes a comprehensive responsive design system using the breakpoints defined in your theme.

## Breakpoints

The following breakpoints are available:

- **mobileS**: 320px (Small phones - iPhone SE)
- **mobileM**: 375px (Medium phones)
- **mobileL**: 425px (Large phones)
- **tablet**: 768px (Tablets portrait)
- **laptop**: 1024px (Small laptops)
- **laptopL**: 1440px (Large laptops/Desktops)
- **desktop**: 1920px (Full HD desktops)

## Usage

### 1. Import the mixins

```typescript
import { maxTablet, maxMobileL, maxMobileM } from '../../styles/mixins'
```

### 2. Use the mixins in your styled components

```typescript
export const MyComponent = styled.div`
  padding: 2rem;
  font-size: 1.5rem;

  ${maxTablet`
    padding: 1.5rem;
    font-size: 1.25rem;
  `}

  ${maxMobileL`
    padding: 1rem;
    font-size: 1rem;
  `}

  ${maxMobileM`
    padding: 0.5rem;
    font-size: 0.875rem;
  `}
`
```

## Available Mixins

### Min-width media queries (mobile-first approach)
- `mobileS(styles)` - Styles applied from 320px and up
- `mobileM(styles)` - Styles applied from 375px and up
- `mobileL(styles)` - Styles applied from 425px and up
- `tablet(styles)` - Styles applied from 768px and up
- `laptop(styles)` - Styles applied from 1024px and up
- `laptopL(styles)` - Styles applied from 1440px and up
- `desktop(styles)` - Styles applied from 1920px and up

### Max-width media queries (desktop-first approach)
- `maxMobileS(styles)` - Styles applied up to 320px
- `maxMobileM(styles)` - Styles applied up to 375px
- `maxMobileL(styles)` - Styles applied up to 425px
- `maxTablet(styles)` - Styles applied up to 768px
- `maxLaptop(styles)` - Styles applied up to 1024px
- `maxLaptopL(styles)` - Styles applied up to 1440px
- `maxDesktop(styles)` - Styles applied up to 1920px

## Best Practices

1. **Mobile-first approach**: Start with mobile styles and use min-width queries to enhance for larger screens
2. **Consistent spacing**: Use the same spacing scale across breakpoints
3. **Typography scaling**: Use the responsive font sizes from your theme
4. **Touch-friendly**: Ensure buttons and interactive elements are at least 44px on mobile
5. **Performance**: Avoid complex animations on mobile devices

## Example Implementation

```typescript
import styled from 'styled-components'
import { maxTablet, maxMobileL, maxMobileM } from '../../styles/mixins'

export const ResponsiveCard = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  /* Tablet styles */
  ${maxTablet`
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  `}

  /* Mobile L styles */
  ${maxMobileL`
    gap: 1rem;
    padding: 1rem;
    border-radius: 4px;
  `}

  /* Mobile M styles */
  ${maxMobileM`
    gap: 0.75rem;
    padding: 0.75rem;
    margin: 0 0.5rem;
  `}
`
```

## What's Already Implemented

The following components have been updated with responsive design:

- ✅ MainContentContainer
- ✅ Hero section
- ✅ About section
- ✅ Experience timeline
- ✅ Projects section
- ✅ Skills slider
- ✅ Header menu
- ✅ Footer
- ✅ Sidebar (hidden on mobile)
- ✅ Global styles

## Testing

To test the responsive design:

1. Use browser dev tools to resize the viewport
2. Test on different device sizes
3. Check that content remains readable on all screen sizes
4. Verify that interactive elements are touch-friendly on mobile
5. Ensure no horizontal scrolling occurs

## Future Enhancements

Consider adding:

- Touch gesture support for mobile
- Reduced motion preferences for accessibility
- High contrast mode support
- Dark/light theme toggle
- Custom breakpoint hooks for React components 