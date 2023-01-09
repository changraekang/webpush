import styled from "styled-components";
import React from "react";
import {
  ACTIVE_INPUT_BORDER_COLOR,
  grey1,
  INACTIVE_INPUT_BORDER_COLOR,
  INACTIVE_INPUT_FONT_COLOR,
  primary5,
} from "../../constants/color";
const Input = styled.input`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${grey1};

  &:focus {
    border: 1px solid ${primary5};
  }

  &::placeholder {
    color: ${grey1};
  }
`;

const InputGroup = ({
  type = "text",
  placeholder = "",
  value,
  setValue,
  readonly = false,
}) => {
  return (
    <div>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        readOnly={readonly}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputGroup;
