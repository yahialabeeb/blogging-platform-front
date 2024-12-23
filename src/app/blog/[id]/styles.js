'use client';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 768px) {
    padding: 0 6rem;
  }

  @media (min-width: 1024px) {
    padding: 0 9rem;
  }
`;

export const GridContainer = styled.div`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

export const FullSpan = styled.div`
  grid-column: span 3;
`;

export const TwoSpan = styled.div`
  grid-column: span 3;

  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;

export const HiddenOnSmall = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    grid-column-start: 3;
  }
`;
