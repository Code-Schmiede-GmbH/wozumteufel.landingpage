# Wo zum Teufel Landing Page

A modern, responsive landing page for the Wo zum Teufel location guessing game, designed to match the game's visual style and branding.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Game-Style UI**: Matches the Flutter app's design language with earthy colors and rustic theme
- **Smooth Animations**: CSS animations and JavaScript interactions for enhanced user experience
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Lazy loading, debounced scroll events, and optimized assets

## Design Elements

### Color Palette
- Primary: `#beac84` (Beige - from game buttons)
- Secondary: `#4E3B2A` (Dark brown - borders and text)
- Text Dark: `#362d1a` (Dark brown for headings)
- Text Light: `#8B7355` (Lighter brown for body text)
- Background: `#f5f2e9` (Light beige background)

### Typography
- Primary Font: Lato (sans-serif)
- Secondary Font: Merriweather (serif)
- Matches the fonts used in the Flutter app

### Visual Style
- Rustic/outdoor theme with earthy colors
- Custom buttons matching the game's button design
- Background aerial imagery
- Card-based layout with subtle shadows and borders

## File Structure

```
landing-page/
├── index.html              # Main landing page
├── privacy-policy.html     # Privacy policy page
├── terms-of-service.html   # Terms of service page
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
└── README.md               # This file
```

## Sections

1. **Hero Section**: Main headline, description, and call-to-action buttons
2. **Features**: Four key game features with icons
3. **How to Play**: Step-by-step guide with numbered cards
4. **Download**: App store download buttons
5. **Footer**: Links and legal information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy Loading**: Images load as they come into view
- **Debounced Scroll**: Optimized scroll event handling
- **CSS Animations**: Hardware-accelerated animations
- **Minimal JavaScript**: Lightweight interactions
- **Optimized Assets**: Compressed images and efficient CSS

## Setup Instructions

1. Ensure all files are in the `landing-page/` directory
2. The page references assets from `../mount-guessr.app/assets/`
3. Open `index.html` in a web browser to view the landing page
4. For production, consider:
   - Hosting on a web server
   - Setting up proper domain and SSL
   - Optimizing images further
   - Adding analytics tracking

## Customization

### Colors
Update the CSS custom properties in `:root` to change the color scheme:

```css
:root {
    --color-primary: #beac84;
    --color-secondary: #4E3B2A;
    /* ... other colors */
}
```

### Content
- Update text content in the HTML files
- Replace placeholder download links with actual app store URLs
- Update contact email addresses in legal pages

### Images
- Replace game screenshots with actual app screenshots
- Update logo image if needed
- Consider adding more game-related imagery

## Legal Pages

The landing page includes:
- **Privacy Policy**: Based on the existing game privacy policy
- **Terms of Service**: Comprehensive terms for app usage

Both pages maintain the same design language and are fully responsive.

## Future Enhancements

Potential improvements:
- Add game trailer or demo video
- Include user testimonials or reviews
- Add social media links
- Implement newsletter signup
- Add more interactive elements
- Include app store ratings and reviews 