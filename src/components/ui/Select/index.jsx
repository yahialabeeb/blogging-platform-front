import React from 'react';
import { SelectWrapper, StyledSelect, Arrow, Error, Label } from './styles';
const Select = ({ options, onChange, value, label, error }) => {
  return (
    <>
      <Label>{label}</Label>
      <SelectWrapper>
        <StyledSelect
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.name}
            </option>
          ))}
        </StyledSelect>
        <Arrow>▼</Arrow>
      </SelectWrapper>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default Select;
