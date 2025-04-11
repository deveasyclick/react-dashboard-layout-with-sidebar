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
- Node.js (v18.17.0 or higher)
- npm or yarn

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
├── src/
│   ├── components/      # Reusable UI components
│   ├── constants/       # Application constants
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Page layouts
│   ├── pages/           # Application pages
│   ├── routes/          # Routing configuration
│   ├── types/           # TypeScript type definitions
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── .env                 # Environment variables
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
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
