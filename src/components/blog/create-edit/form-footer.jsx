'use client';

import React from 'react';
import { FooterContainer, StyledButton } from './styles';

export default function FormFooter({
  altBtnText = 'Save as Draft',
  submitBtnText = 'Submit',
  handleAltBtn,
  hideAltBtn,
}) {
  return (
    <FooterContainer>
      {!hideAltBtn && (
        <StyledButton
          variant='outline'
          onClick={handleAltBtn}
        >
          {altBtnText}
        </StyledButton>
      )}
      <StyledButton type='submit'>{submitBtnText}</StyledButton>
    </FooterContainer>
  );
}
