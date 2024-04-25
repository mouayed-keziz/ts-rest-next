"use client";

import { contract } from '@/contract';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initQueryClient } from '@ts-rest/react-query';


const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>);
}


export const client = initQueryClient(contract, {
    baseUrl: 'http://localhost:3000/api',
    baseHeaders: {},
    //   api?: () => ... // <- Optional Custom API Fetcher (see below)
});