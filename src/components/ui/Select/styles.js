import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none;
  outline: none;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #0056b3;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 12px;
  color: #888;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Error = styled.p`
  color: red;
  font-size: 0.9em;
  margin: -8px 0 12px 0;
`;
