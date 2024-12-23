'use client';
import styled from 'styled-components';

export const UpperContainer = styled.div`
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Container = styled.div`
  max-width: 1800px;
  width: 100%;
  margin: 48px auto;
  padding: 10px 2rem;

  @media (min-width: 768px) {
    padding: 0 6rem;
  }

  @media (min-width: 1024px) {
    padding: 0 9rem;
  }
`;

export const Navbar = styled.div`
  background: #5dbddb;
  padding: 20px;
`;
