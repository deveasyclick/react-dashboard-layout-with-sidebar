# React Tailwind Dashboard Layout

## Overview

A modern, responsive dashboard layout built with React 19, TypeScript, and Tailwind CSS 4. This project provides a ready-to-use dashboard template with a collapsible sidebar, responsive header, and a clean, professional design.

This template is perfect for building admin panels, dashboards, and other web applications that require a structured layout with navigation.

## Technology Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS 4
- **Authentication**: Clerk
- **Routing**: React Router

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v22.0.0 or higher, recommended v22.11.0)
- npm (v11.0.0 or higher, recommended v11.2.0) or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-dashboard-layout-with-sidebar.git
   cd react-dashboard-layout-with-sidebar
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Project Structure

```plaintext
react-tailwind-dashboard-layout/
├── public/              # Static assets
│   ├── placeholder.svg  # Default placeholder image
│   └── user-avatar-placeholder.svg # User avatar placeholder
├── src/
│   ├── assets/          # Processed assets
│   │   └── images/      # Images organized by category
│   │       ├── avatars/       # User avatars and profile pictures
│   │       ├── backgrounds/   # Background images
│   │       ├── icons/         # Custom icon images
│   │       └── logos/         # Logo variations
│   ├── components/      # Reusable UI components
│   │   ├── Dropdown/    # Dropdown components
│   │   ├── Headers/     # Header components
│   │   │   └── main/    # Main header with dropdowns
│   │   ├── IconWrapper/ # Icon component wrapper
│   │   ├── Image/       # Image components
│   │   ├── MainContent/ # Main content area
│   │   └── Sidebar/     # Sidebar components
│   ├── constants/       # Application constants
│   ├── contexts/        # React contexts
│   │   └── SidebarContext.tsx # Sidebar state management
│   ├── hooks/           # Custom React hooks
│   │   ├── useEscapeKey.ts    # Keyboard event handling
│   │   ├── useFocusEffect.ts  # Focus management
│   │   ├── useMediaQuery.ts   # Responsive design
│   │   └── useSidebarClickOutside.ts # Click outside detection
│   ├── layouts/         # Page layouts
│   ├── pages/           # Application pages
│   │   └── dashboard/   # Dashboard page
│   ├── routes/          # Routing configuration
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── .env                 # Environment variables
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration with image optimization
```

## Usage

The dashboard layout consists of three main components:

### 1. Main Header

The header includes:

- Logo and brand text
- Search functionality
- Notification dropdown
- Apps dropdown
- User menu with profile options

```tsx
<MainHeader
  logoSrc="/path/to/logo.svg"
  logoText="Dashboard"
  userName="John Doe"
  userEmail="john@example.com"
  onProfileClick={() => console.log('Profile clicked')}
  onSettingsClick={() => console.log('Settings clicked')}
  onSignOut={() => console.log('Sign out clicked')}
/>
```

### 2. Sidebar Navigation

The sidebar includes:

- Responsive design (collapses on mobile)
- Search functionality
- Navigation menu with icons
- Badge support for menu items

The sidebar automatically handles:

- Mobile responsiveness with overlay
- Keyboard navigation and accessibility
- Click outside to close on mobile

### 3. Main Content Area

A flexible content area that adjusts based on sidebar state:

```tsx
<MainContent>
  {/* Your page content goes here */}
</MainContent>
```

### Complete Example

```tsx
import { SidebarProvider } from './contexts/SidebarContext';
import MainHeader from './components/Headers/main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <SidebarProvider>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <MainHeader userName="John Doe" userEmail="john@example.com" />
        <Sidebar />
        <MainContent>
          {/* Your page content */}
        </MainContent>
      </div>
    </SidebarProvider>
  );
}
```

## Development

### Key Features

- **Responsive Design**: Works on all screen sizes with optimized mobile experience
- **Dark Mode Support**: Built-in dark mode with Tailwind CSS
- **Accessibility**: ARIA attributes, keyboard navigation, and focus management
- **TypeScript**: Full type safety throughout the codebase
- **Modular Components**: Easily customizable and extendable
- **Image Optimization**: Built-in image optimization with Vite

### Code Style

This project uses ESLint for code linting. Run the linter with:

```bash
npm run lint
# or
yarn lint
```

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Image Handling Best Practices

This section outlines the best practices for handling images in the this project.

### Image Components

The project includes two main image components:

1. **Basic Image Component** (`Image`): A simple component with error handling and lazy loading.
2. **Advanced Image Component** (`ImageWithFallback`): Includes progressive loading and more advanced features.

### Usage Examples

#### Basic Image Component

```tsx
import Image from '../components/Image';

// Basic usage
<Image
  src="/path/to/image.jpg"
  alt="Description of image"
/>

// With additional options
<Image
  src="/path/to/image.jpg"
  alt="Description of image"
  fallbackSrc="/placeholder.svg"
  aspectRatio="16/9"
  objectFit="cover"
  className="rounded-lg shadow-md"
/>
```

#### Advanced Image Component

```tsx
import { ImageWithFallback } from '../components/Image';

<ImageWithFallback
  src="/path/to/high-res-image.jpg"
  lowResSrc="/path/to/low-res-image.jpg"
  alt="Description of image"
  aspectRatio="1/1"
  objectFit="cover"
  className="rounded-full"
/>
```

### Image Storage

#### Local Images

Store local images in the following locations:

1. **Public Directory** (`/public`): For static assets that don't need processing.
   - Example: `/public/logo.svg`
   - URL usage: `<Image src="/logo.svg" alt="Logo" />`

2. **Assets Directory** (`/src/assets`): For images that should be processed by Vite.
   - Example: `/src/assets/images/backgrounds/hero.jpg`
   - Import usage: `import heroImage from '../assets/images/backgrounds/hero.jpg'`
   - URL usage: `<Image src={heroImage} alt="Hero" />`

#### Image Organization

Organize images in the assets directory by category:

```plaintext
src/assets/images/
├── avatars/       # User avatars and profile pictures
├── backgrounds/   # Background images
├── icons/         # Custom icon images (not SVG components)
└── logos/         # Logo variations
```

### Image Optimization

#### Image Formats

1. **SVG**: Use for logos, icons, and simple illustrations.
2. **WebP**: Preferred format for photographs and complex images.
3. **PNG**: Use for images requiring transparency when WebP is not suitable.
4. **JPEG**: Use for photographs when WebP is not supported.

#### Responsive Images

For responsive images, provide multiple sizes and use the `srcSet` attribute:

```tsx
<img
  src="/images/photo-800.webp"
  srcSet="/images/photo-400.webp 400w, /images/photo-800.webp 800w, /images/photo-1200.webp 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  alt="Responsive image"
/>
```

Or use the utility function:

```tsx
import { getResponsiveImageUrl } from '../utils/imageUtils';

const { src, srcSet } = getResponsiveImageUrl('/images', 'photo', 'webp', [400, 800, 1200]);

<img src={src} srcSet={srcSet} alt="Responsive image" />
```

### Image Constants

Use the constants defined in `src/constants/images.ts` for consistent image paths:

```tsx
import { DEFAULT_IMAGES, getAvatarPath } from '../constants/images';

<Image src={DEFAULT_IMAGES.USER_AVATAR} alt="User" />
<Image src={getAvatarPath('john-doe.webp')} alt="John Doe" />
```

### Performance Considerations

1. **Lazy Loading**: All images use lazy loading by default.
2. **Image Dimensions**: Always specify width and height attributes to prevent layout shifts.
3. **Responsive Images**: Use appropriate sizes for different screen sizes.
4. **Image Compression**: Compress images before adding them to the project.

### External Images

When using external images:

1. **Security**: Only use trusted sources.
2. **Fallbacks**: Always provide fallbacks for external images.
3. **Caching**: Consider caching external images if they're used frequently.

```tsx
<Image
  src="https://external-source.com/image.jpg"
  alt="External image"
  fallbackSrc={DEFAULT_IMAGES.PLACEHOLDER}
/>
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a Pull Request

## Contact

For questions or support, please contact [ydeniyi@gmail.com](mailto:ydeniyi@gmail.com).
