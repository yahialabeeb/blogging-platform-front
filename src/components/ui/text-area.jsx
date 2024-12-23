import React from 'react';
import styled from 'styled-components';

const TextAreaWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: start;
  align-items: center;
  margin: 1rem;
`;

const SuffixIconWrapper = styled.div`
  margin-top: 0.25rem 
  position: absolute;
  right: 0.5rem;
`;

const StyledTextArea = styled.textarea`
  background-color: var(--color-primary);
  border-radius: 0.5rem;
  flex: 1;
  padding-left: 1.25rem;
  padding-top: 1rem;
  padding-right: 3rem;
  resize: none;
  border: 1px solid #f5f5f7;
  box-shadow: none;
  outline: none;

  &::placeholder {
    color: #dfdfdf;
  }

  &:focus {
    border-color: var(--color-secondary);

    &::placeholder {
      color: #9c9ca4;
    }
  }
`;

const TextArea = ({ placeholder, autoFocus, onChange, value = '' }) => {
  return (
    <TextAreaWrapper>
      <StyledTextArea
        placeholder={placeholder}
        rows={8}
        value={value}
        autoFocus={autoFocus}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </TextAreaWrapper>
  );
};

export default TextArea;
