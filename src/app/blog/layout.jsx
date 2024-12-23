import React from 'react';

import { UpperContainer, Navbar, Container } from './styles';
import Header from '@/components/header';
export default async function Layout({ children }) {
  return (
    <UpperContainer>
      <Header />
      <Container>
        <div className='flex-1'>{children}</div>
      </Container>
    </UpperContainer>
  );
}
