# Alyusroh Admin Portal

## Overview

The Alyusroh Admin Portal is a web application designed for administrators to manage members and their financial data. This application provides a comprehensive interface for handling member information, loans, shares, balances, and other financial records within the Alyusroh organization.

## Features

### Member Management
- Import members from external sources
- Add new members manually
- Edit member information
- Delete members
- Search and filter members

### Financial Data Management
- View and manage member loans
- Track member shares
- Monitor member account balances
- Generate financial reports

### Authentication & Security
- Secure admin login using Clerk authentication
- Role-based access control
- Data encryption for sensitive information

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
   git clone https://github.com/your-username/alyusroh-admin.git
   cd alyusroh-admin
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Project Structure

```
alyusroh-admin/
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
│   │   ├── Image/       # Image components
│   │   │   ├── Image.tsx           # Basic image component
│   │   │   ├── ImageWithFallback.tsx # Advanced image component
│   │   │   └── index.ts           # Component exports
│   │   └── ... other components
│   ├── constants/       # Application constants
│   │   ├── images.ts    # Image path constants
│   │   └── ... other constants
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Page layouts
│   ├── pages/           # Application pages
│   ├── routes/          # Routing configuration
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   │   ├── imageUtils.ts # Image utility functions
│   │   └── ... other utilities
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── .env                 # Environment variables
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration with image optimization
```

## Usage

### Authentication

The application uses Clerk for authentication. Administrators need to sign in with their credentials to access the admin portal.

### Member Management

1. **Importing Members**:
   - Navigate to the Members section
   - Click on "Import Members"
   - Upload a CSV file with member data
   - Review and confirm the import

2. **Adding Members Manually**:
   - Navigate to the Members section
   - Click on "Add Member"
   - Fill in the required information
   - Save the new member

3. **Editing Members**:
   - Find the member in the members list
   - Click on the edit icon
   - Update the information
   - Save changes

4. **Deleting Members**:
   - Find the member in the members list
   - Click on the delete icon
   - Confirm deletion

### Financial Data Management

1. **Viewing Member Financial Data**:
   - Select a member from the members list
   - Navigate to the Financial tab
   - View loans, shares, and balance information

2. **Managing Loans**:
   - Add new loans
   - Update loan status
   - View loan history

3. **Managing Shares**:
   - Add new shares
   - Update share values
   - View share history

## Development

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

This section outlines the best practices for handling images in the Alyusroh Admin project.

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

```
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

For questions or support, please contact ydeniyi@gmail.com.
