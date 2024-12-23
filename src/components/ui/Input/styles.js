import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const InputElement = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Error = styled.p`
  color: red;
  font-size: 0.9em;
  margin: -8px 0 12px 0;
`;

export { Error, InputElement, Label };
