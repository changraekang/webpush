import styled from "styled-components";
import React from "react";
import { grey5, grey6, primary5 } from "../../constants/color";
const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid ${grey5};

  &:focus {
    border: 1px solid ${primary5};
  }

  &::placeholder {
    color: ${grey6};
  }
`;

export const InputGroup = ({
  type = "text",
  placeholder = "",
  value,
  setValue,
  id,
  readonly = false,
}) => {
  return (
    <div>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        readOnly={readonly}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const InputValidateGroup = ({
  type = "text",
  placeholder = "",
  value,
  setValue,
  id,
  name,
  maxlength,
  readonly = false,
}) => {
  return (
    <div>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        readOnly={readonly}
        maxlength={maxlength}
        name={name}
        onChange={setValue}
      />
    </div>
  );
};
