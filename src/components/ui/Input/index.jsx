import { Error, InputElement, Label } from './styles';
const Input = ({ error, label, placeholder, ...props }) => {
  return (
    <div>
      <Label>{label}</Label>
      <InputElement
        placeholder={placeholder}
        {...props}
      />
      {error && <Error>{error}</Error>}
    </div>
  );
};

export default Input;
