import { BrowserRouter, Route, Routes } from 'react-router';
import { ClerkProvider } from '@clerk/clerk-react';
import Dashboard from '../pages/dashboard';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const AppRoutes = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  </ClerkProvider>
  )
}

export default AppRoutes