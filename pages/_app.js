import { Suspense, useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ErrorBoundary from '../src/components/ErrorBoundary';
import { AlertProvider } from '../src/context/globalAlert';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AlertProvider>
          <ErrorBoundary>
            <Suspense
              fallback={<span className="text-bg-thriary">Loading...</span>}>
              <Component {...pageProps} />
            </Suspense>
          </ErrorBoundary>
        </AlertProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
