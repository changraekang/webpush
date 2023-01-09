import styled from "styled-components";
import {
  primary4,
  grey1,
  grey3,
  grey5,
} from "../../constants/color";
import {
  BUTTON_SIZE,
  CERTIFICATION_BUTTON_SIZE,
} from "../../constants/fontSize";

const Button = styled.button`
  display: block;
  border: none;
  width: 100%;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 32px;
  font-size: ${(props) =>
    props.certificate ? `${CERTIFICATION_BUTTON_SIZE}` : `${BUTTON_SIZE}`};
  background: ${(props) => (props.normal ? `${grey1}` : null)};
  background: ${(props) => (props.active ? `${primary4}` : null)};
  background: ${(props) =>
    props.inactive ? `${grey3}` : null};
  color: ${(props) => (props.normal ? `${primary4}` : null)};
  color: ${(props) => (props.active ? `${grey1}` : null)};
  color: ${(props) =>
    props.inactive ? `${grey5}` : null};
  border: 1px solid
    ${(props) => (props.normal ? `${primary4}` : "none")};
  cursor: ${(props) => (props.inactive ? `default` : null)};
  &:hover {
  }
`;
//로그인 유효성 통과 전
function LoginButton({ children, requestLogin }) {
  return (
    <Button active onClick={requestLogin}>
      {children}
    </Button>
  );
}

// 로그인 유효성 검사 통과 후
function BeforeLoginButton({ children }) {
  return (
    <Button disabled inactive>
      {children}
    </Button>
  );
}

// 로그인 -> 회원가입
function GoSignupButton({ children, handleGoSignup }) {
  return (
    <Button normal onClick={handleGoSignup}>
      {children}
    </Button>
  );
}

export { LoginButton, BeforeLoginButton, GoSignupButton };
