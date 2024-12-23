'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SignUp from '@/components/auth/signup';
import Signin from '@/components/auth/signIn';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #ccc;
`;

const Tab = styled.div`
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.activate == 'true' ? '#0070f3' : '#555')};
  border-bottom: ${(props) =>
    props.activate == 'true' ? '2px solid #0070f3' : 'none'};
  &:hover {
    color: #0070f3;
  }
`;

export default function Home() {
  const [activeTab, setActiveTab] = useState('signin');
  const { status } = useSession();
  useEffect(() => {
    if (status === 'authenticated') redirect('/blog');
  }, [status]);

  return (
    <Container>
      <NavBar>
        <Tab
          activate={`${activeTab === 'signin'}`}
          onClick={() => setActiveTab('signin')}
        >
          Sign In
        </Tab>
        <Tab
          activate={`${activeTab === 'signup'}`}
          onClick={() => setActiveTab('signup')}
        >
          Sign Up
        </Tab>
      </NavBar>
      {activeTab === 'signin' && <Signin />}
      {activeTab === 'signup' && <SignUp />}
    </Container>
  );
}
