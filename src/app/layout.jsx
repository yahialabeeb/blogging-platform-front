import './globals.css';
import Provider from './provider';
import { getServerSession } from 'next-auth';
import ModalProvider from './ModalProvider';
import { Toaster } from 'react-hot-toast';
import { authOptions } from '@/components/auth/auth-option';
import React from 'react';

export const metadata = {
  title: 'blog',
  description: 'blogs',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <Provider session={session}>
        <body>
          <Toaster
            containerStyle={{
              top: '20vh',
            }}
            toastOptions={{
              style: {
                display: 'block',
                width: '40%',
                fontSize: '20px',
                padding: '30px 10px',
              },
            }}
          />
          <ModalProvider>{children}</ModalProvider>d{' '}
        </body>
      </Provider>
    </html>
  );
}
