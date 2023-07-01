'use client'

import { FilterContextProvider } from '@/context/FilterContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

interface DefaultProvidersProps {
    children: React.ReactNode,
}

const theme = {
    desktopBreakpoint: '968px',
    tabletBreakpoint: '768px',
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
    const client = new QueryClient()
    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    );
};
