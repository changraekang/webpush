import styled from "styled-components";
import { MAIN_BOX_COLOR } from "../../../constants/color";

const Box = styled.div`
  background: ${MAIN_BOX_COLOR};
  box-shadow: ${(props) => (props.signup ? "0px 4px 16px rgba(0, 0, 0, 0.08);" : "none")};
  padding: 60px;
`;

function SignupBox({ children }) {
  return <Box signup>{children}</Box>;
}

function LoginBox({ children }) {
  return <Box>{children}</Box>;
}

export {SignupBox, LoginBox}