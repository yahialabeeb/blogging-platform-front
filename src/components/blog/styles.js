import styled from 'styled-components';

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f4f6;
  border-radius: 1rem;
  gap: 1rem;
  padding: 2rem;
  margin: 4rem auto;
  width: 75%;
`;

export const NoCommentsMessage = styled.h5`
  font-size: 1.25rem;
  color: #6b7280;
  text-align: center;
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 1rem;
    color: #374151;
  }
`;

export const ArrowIcon = styled.svg.attrs(() => ({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 20 17',
  fill: 'none',
}))`
  width: 20px;
  height: 17px;
  stroke: #052951;
  stroke-width: 1.5;
  stroke-miterlimit: 10;
  stroke-linecap: square;
  stroke-linejoin: bevel;

  &:hover {
    transform: translateX(5px);
    transition: transform 0.3s ease;
    cursor: pointer;
  }
`;

export const AddCommentButton = styled.button`
  max-width: 12rem;
  padding: 0.75rem 2rem;
  margin-top: 1.75rem;
  border-radius: 1.25rem;
  background-color: #1e3a8a;
  border: 1px solid #1e3a8a;
  color: white;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #3b82f6;
    cursor: not-allowed;
  }
`;
