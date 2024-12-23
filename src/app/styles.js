'use client';
import styled from 'styled-components';
import { Button as RizzuiButton } from 'rizzui';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8fafc;
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
  backdrop-filter: blur(10px);

  @media (min-width: 1024px) {
    backdrop-filter: none;
    padding: 2.5rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 0 1.5rem;

  @media (min-width: 1280px) {
    padding: 0 2.5rem;
  }
`;

export const CenteredBox = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const StyledImage = styled.div`
  margin: 0 auto 2rem;
  aspect-ratio: 360 / 326;
  max-width: 256px;

  @media (min-width: 480px) {
    max-width: 370px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 3rem;
  }

  @media (min-width: 1440px) {
    margin-bottom: 4rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.375rem;
  font-weight: bold;
  line-height: 1.5;
  color: #1f2937;

  @media (min-width: 1024px) {
    font-size: 1.875rem;
  }
`;

export const Subtitle = styled.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.75;
  color: #6b7280;

  @media (min-width: 1024px) {
    margin-top: 1.5rem;
    font-size: 1rem;
  }
`;

export const StyledButton = styled(RizzuiButton)`
  margin-top: 2rem;
  height: 3rem;
  padding: 0 1rem;

  @media (min-width: 1280px) {
    height: 3.5rem;
    padding: 0 1.5rem;
  }

  .icon {
    margin-right: 0.375rem;
    font-size: 1.125rem;
  }
`;
