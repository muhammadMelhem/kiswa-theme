# Kiswa Theme Migration - Documentation

## Overview

This document describes the successful migration of the Kiswa theme from a React-based implementation to the official Angular Keycloakify starter. The theme now features a fashion-focused two-panel layout with Kiswa branding, complete with Arabic RTL support and custom styling.

## What Was Migrated

### ✅ Successfully Migrated Components

#### 1. **CSS Styling**
- **Global Theme Variables** (`src/login/styles/kiswa-theme.css`)
  - Kiswa brand colors (#8B7355 primary, #E8D8C3 secondary)
  - Custom typography (Montserrat, Playfair Display)
  - Spacing, border radius, shadows, transitions
  - Complete animation library (fadeIn, slideIn, bounceIn, etc.)

- **Login Page Styling** (`src/login/styles/kiswa-login.css`)
  - Two-panel layout (fashion panel + form panel)
  - Responsive design (desktop, tablet, mobile breakpoints)
  - Form styling with Kiswa aesthetics
  - Social login button styling (Google, Facebook)
  - Alert and notification styling
  - Loading states and hover effects

#### 2. **Angular Components**
- **Custom Template Component** (`src/login/components/kiswa-template.component.ts`)
  - Two-panel layout implementation
  - Fashion branding panel with logo, title, and quote
  - Form panel with proper alert handling
  - Fully integrated with Angular's template system

#### 3. **Internationalization**
- **English Translations** - Complete UI labels
- **Arabic Translations** - Full RTL support with Arabic text
- Custom translations for:
  - Login forms
  - Registration
  - Password reset
  - Fashion-themed messages

#### 4. **Email Templates**
- **Base Template** (`src/login/email/template.ftl`)
  - Branded email header with Kiswa logo
  - Professional styling matching web theme
  - Responsive email design
  
- **Email Verification** (`src/login/email/email-verification.ftl`)
  - Styled verification button
  - Security notices
  - Expiration warnings
  
- **Password Reset** (`src/login/email/password-reset.ftl`)
  - Secure reset link button
  - Security advisories
  - Professional layout

## File Structure

```
keycloakify-starter/
├── src/
│   ├── login/
│   │   ├── styles/
│   │   │   ├── kiswa-theme.css          # Global theme variables & styles
│   │   │   └── kiswa-login.css          # Login page specific styles
│   │   ├── components/
│   │   │   └── kiswa-template.component.ts  # Custom Angular template
│   │   ├── email/
│   │   │   ├── template.ftl             # Email base template
│   │   │   ├── email-verification.ftl   # Email verification
│   │   │   └── password-reset.ftl       # Password reset
│   │   ├── KcPage.ts                    # Updated with Kiswa config
│   │   ├── i18n.ts                      # English & Arabic translations
│   │   ├── KcContext.ts
│   │   └── KcPageStory.ts
│   └── ...
├── vite.config.ts                       # Updated with email theme config
├── package.json
└── dist_keycloak/                       # Generated JAR files
    ├── keycloak-theme-for-kc-22-to-25.jar
    └── keycloak-theme-for-kc-all-other-versions.jar
```

## Key Features

### 🎨 Visual Design
- **Two-Panel Layout**: Fashion branding on left, login form on right
- **Responsive**: 
  - Desktop (>900px): Side-by-side panels
  - Tablet (600-900px): Stacked layout
  - Mobile (<600px): Form only (brand panel hidden)
- **Animations**: Smooth entrance animations for all elements
- **Brand Colors**: Elegant brown/tan color scheme

### 🌍 Internationalization
- **English**: Default language with custom Kiswa terminology
- **Arabic**: Full RTL support with proper translations
- **Extensible**: Easy to add more languages

### 🔐 Authentication Features
- Standard login with username/email
- Password visibility toggle (CSS-based)
- Remember me functionality
- Forgot password flow
- Social login support (Google, Facebook)
- Registration with custom styling
- Email verification
- Password reset

### 📧 Email Templates
- Professional branded emails
- Responsive HTML design
- Kiswa logo and branding
- Security notices
- Action buttons with hover states

## Build Process

### Prerequisites
- Node.js 20+
- npm or yarn

### Building the Theme

```bash
cd /home/muhammadmelhem/Downloads/keycloakify-starter

# Install dependencies
npm install

# Build the Keycloak theme (generates JAR files)
npm run build-keycloak-theme
```

### Output
The build generates two JAR files in `dist_keycloak/`:
1. `keycloak-theme-for-kc-22-to-25.jar` - For Keycloak 22-25
2. `keycloak-theme-for-kc-all-other-versions.jar` - For other Keycloak versions

## Deployment

### Option 1: JAR Deployment (Recommended)

1. Build the theme (see above)
2. Copy the appropriate JAR file to your Keycloak deployment:
   ```bash
   # For Keycloak 22-25
   cp dist_keycloak/keycloak-theme-for-kc-22-to-25.jar /path/to/keycloak/providers/
   ```
3. Restart Keycloak
4. In Keycloak Admin Console:
   - Go to Realm Settings → Themes
   - Select "keycloakify-starter-angular-vite" for Login Theme
   - Select "keycloakify-starter-angular-vite" for Email Theme (if available)
   - Save

### Option 2: Docker Deployment

```dockerfile
FROM quay.io/keycloak/keycloak:25.0

# Copy the theme JAR
COPY dist_keycloak/keycloak-theme-for-kc-22-to-25.jar /opt/keycloak/providers/

# Build Keycloak with the new theme
RUN /opt/keycloak/bin/kc.sh build
```

## Configuration

### Theme Configuration (`src/login/KcPage.ts`)

```typescript
export const classes = {} satisfies Partial<Record<ClassKey, string>>;
export const doUseDefaultCss = true;  // Uses Keycloak base CSS + Kiswa overlay
export const doMakeUserConfirmPassword = true;
```

### Vite Configuration (`vite.config.ts`)

```typescript
keycloakify({
  accountThemeImplementation: 'none',
  emailThemeImplementation: 'ftl',  // Enables email templates
})
```

## Customization

### Changing Brand Colors

Edit `src/login/styles/kiswa-theme.css`:

```css
:root {
    --brand-primary: #8B7355;        /* Your primary color */
    --brand-primary-hover: #6D5A47;  /* Hover state */
    --brand-secondary: #E8D8C3;      /* Secondary color */
    /* ... */
}
```

### Modifying Logo

Edit `src/login/components/kiswa-template.component.ts`:

```typescript
<div class="brandLogo">K</div>  <!-- Change to your logo/text -->
```

Or add an image:
```typescript
<img src="path/to/logo.png" alt="Logo" class="brandLogo" />
```

### Adding Languages

Edit `src/login/i18n.ts`:

```typescript
.withCustomTranslations({
  en: { /* English translations */ },
  ar: { /* Arabic translations */ },
  fr: { /* Add French translations */ },
  // ... more languages
})
```

### Modifying Layout

Edit `src/login/styles/kiswa-login.css`:
- Change panel widths (`.fashionPanel`, `.formPanel`)
- Adjust responsive breakpoints
- Modify spacing and padding
- Customize animations

## Testing

### Local Development
```bash
npm run start
# Opens development server at http://localhost:4200
```

### Storybook (Component Testing)
```bash
npm run storybook
# Opens at http://localhost:6006
```

### Production Build Test
```bash
npm run build-keycloak-theme
# Check dist_keycloak/ for JAR files
```

## Technical Details

### Framework Compatibility
- **Original**: React-based with JSX/TSX components
- **Migrated**: Angular-based with TypeScript components
- **Challenge**: React components cannot be directly used in Angular
- **Solution**: Recreated components using Angular's component system

### CSS Architecture
- Uses CSS custom properties (variables) for theming
- Follows BEM-like naming for Keycloak classes
- Fully responsive with mobile-first approach
- No preprocessors needed (pure CSS)

### Angular Integration
- Standalone Angular components (no module required)
- Uses Angular's template syntax (`@if`, `[class]`, etc.)
- Integrates with Keycloakify's Angular adapter
- Type-safe with full TypeScript support

## Known Limitations

### Email Templates
The email templates are created but may need additional configuration in `vite.config.ts` or manual copying to ensure they're included in the JAR. The templates are located in `src/login/email/` and follow FreeMarker template syntax.

To manually include email templates if they're not in the JAR:
1. Extract the JAR file
2. Add email templates to `theme/keycloakify-starter-angular-vite/email/html/`
3. Repackage the JAR

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS custom properties required (IE11 not supported)
- CSS Grid and Flexbox required

## Troubleshooting

### Build Errors
```bash
# Clear