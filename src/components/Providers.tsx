'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const client = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}

export default Providers