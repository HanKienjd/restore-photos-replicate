import { Header } from './Header';
import React from 'react';
import 'styles/globals.css';

type Props = {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col max-h-screen">
      <Header />
      <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2">
        <main
          className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
          {children}
        </main>
      </div>
    </div>
  );
};
