// components/SessionProvider.tsx
'use client';

import { SessionProvider as NextAuthSessionProvider, useSession } from 'next-auth/react';
import Nav from './left-nav';

import { ReactNode } from 'react';

export default function SessionProvider({ children }: { children: ReactNode }) {
  return <NextAuthSessionProvider><AuthWrapper>{children}</AuthWrapper></NextAuthSessionProvider>;
}

function AuthWrapper({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();

    if (status === 'loading') {
      return <body className="flex"><div>Loading...</div></body>;
    }
  
    return (
        <body className="flex">
            {session && <Nav />}
            <div className="flex-1 p-4 w-full sm:w-1/2 md:w-1/2 lg:w-3/4 h-full min-h-screen">
                {children}
            </div>
        </body>
    );
  }