import styled from 'styled-components';
import { Link } from 'react-scroll';
import SimpleBar from 'simplebar-react';

export const Container = styled.div`
  @container;
`;

export const StyledForm = styled.form`
  & label.block > span {
    font-medium;
  }
`;

export const Section = styled.div`
  margin-bottom: 10px;
  display: grid;
  gap: 7px;
  border-top: 1px dashed gray;
  padding-top: 7px;

  @media (min-width: 1280px) {
    gap: 9px;
  }

  @media (min-width: 1600px) {
    gap: 11px;
  }
`;

// FormFooter
export const FooterContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: -2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  border-top: 1px solid #e5e7eb;
  background-color: #fff;
  padding: 1rem;

  @media (min-width: 768px) {
    margin-left: -1.25rem;
    margin-right: -1.25rem;
    padding: 1.25rem;
  }

  @media (min-width: 1024px) {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 1920px) {
    margin-left: -2rem;
    margin-right: -2rem;
    padding: 2rem;
  }
`;

export const StyledButton = styled.button`
  background-color: #3b82f6;
  border-radius: 0.375rem;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s ease;
  margin: 1rem auto;
  width: 60%;
  &:hover {
    background-color: #2563eb;
  }

  &:active {
    background-color: #1d4ed8;
  }

  @media (min-width: 1024px) {
    width: 40%;
    font-size: 1.125rem;
    padding: 0.625rem 1.25rem;
  }
`;
