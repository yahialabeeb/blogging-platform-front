'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useSession, signOut } from 'next-auth/react';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  background-color: #1f2937;
  color: #ffffff;

  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const AuthButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2563eb;
  }

  &:active {
    background-color: #1d4ed8;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
    padding: 0.625rem 1.25rem;
  }
`;

export const CreateButton = styled(AuthButton)`
  margin-right: 0.5rem;
`;

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleAuthAction = () => {
    if (session) {
      signOut();
    } else {
      router.push('/');
    }
  };

  return (
    <HeaderContainer>
      <Title>Blogging Platform</Title>
      <div>
        {session ? (
          <CreateButton onClick={() => router.push('/blog/create')}>
            Create Blog
          </CreateButton>
        ) : null}
        <AuthButton onClick={handleAuthAction}>
          {session ? 'Sign Out' : 'Sign In'}
        </AuthButton>
      </div>
    </HeaderContainer>
  );
}
