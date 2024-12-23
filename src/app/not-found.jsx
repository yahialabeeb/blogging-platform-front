import Link from 'next/link';
import Image from 'next/image';
import NotFoundImg from '@public/not-found.png';
import React from 'react';
import { PiHouseLineBold } from 'react-icons/pi';
import {
  Container,
  Content,
  CenteredBox,
  StyledImage,
  Title,
  Subtitle,
  StyledButton,
} from './styles';

export default function NotFound() {
  return (
    <Container>
      <Content>
        <CenteredBox>
          <StyledImage>
            <Image
              src={NotFoundImg}
              alt='not found'
              layout='responsive'
              width={800}
              height={326}
            />
          </StyledImage>
          <Title>Sorry, the page not found</Title>
          <Subtitle>
            We have been spending long hours in order to launch our new website.
          </Subtitle>
          <Link href='/'>
            <StyledButton
              size='xl'
              color='primary'
            >
              <PiHouseLineBold className='icon' />
              Back home
            </StyledButton>
          </Link>
        </CenteredBox>
      </Content>
    </Container>
  );
}
