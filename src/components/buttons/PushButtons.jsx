import styled from "styled-components";
import {
  ACTIVE_BUTTON_COLOR,
  ACTIVE_BUTTON_FONT_COLOR,
  INACTIVE_BUTTON_COLOR,
  INACTIVE_BUTTON_FONT_COLOR,
  NORMAL_BUTTON_COLOR,
  NORMAL_BUTTON_FONT_COLOR,
  NORMAL_BUTTON_BORDER_COLOR,
} from "../../constants/color";
import { BUTTON_SIZE } from "../../constants/fontSize";

const Button = styled.button`
  display: block;
  border: none;
  width: 100%;
  padding: 16px;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 40px;
  background: ${(props) => (props.normal ? `${NORMAL_BUTTON_COLOR}` : null)};
  background: ${(props) => (props.active ? `${ACTIVE_BUTTON_COLOR}` : null)};
  background: ${(props) =>
    props.inactive ? `${INACTIVE_BUTTON_COLOR}` : null};
  color: ${(props) => (props.normal ? `${NORMAL_BUTTON_FONT_COLOR}` : null)};
  color: ${(props) => (props.active ? `${ACTIVE_BUTTON_FONT_COLOR}` : null)};
  color: ${(props) =>
    props.inactive ? `${INACTIVE_BUTTON_FONT_COLOR}` : null};
  border: 1px solid
    ${(props) => (props.normal ? `${NORMAL_BUTTON_BORDER_COLOR}` : "none")};

  &:hover {
  }
`;

// DM 발송
function ActivePushButton({ children, handleSubmit }) {
  return (
    <Button onClick={handleSubmit} active>
      {children}
    </Button>
  );
}

function InactivePushButton({ children }) {
  return <Button inactive>{children}</Button>;
}

// 이미지 등록
function RegisterImageButton({ children }) {
  return <Button active>{children}</Button>;
}

export { ActivePushButton, InactivePushButton, RegisterImageButton };
