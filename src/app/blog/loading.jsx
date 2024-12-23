import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  Container,
  GridContainer,
  FullSpan,
  TwoSpan,
  HiddenOnSmall,
} from './[id]/styles';

const Loading = () => {
  return (
    <Container>
      <GridContainer>
        <FullSpan>
          <Skeleton height={200} />
        </FullSpan>
        <TwoSpan>
          <Skeleton count={10} />
        </TwoSpan>
        <HiddenOnSmall>
          <Skeleton count={3} />
        </HiddenOnSmall>
      </GridContainer>
    </Container>
  );
};

export default Loading;
