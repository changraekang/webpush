import styled from "styled-components";

const Box = styled.div`
  padding: 32px;
  width: 300px;
  margin-left: 30px;
  border-radius: 16px;
  border: 2px solid #afafaf;
`;
const DemoShowBox = styled.div`
  padding: 32px;
  width: 100%;
  display: flex;
  margin-left: 25px;
  margin-right: 25px;
  box-shadow: 0px -3px 16px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

export function BoardWrapBox({ children }) {
  return <Box>{children}</Box>;
}
export function BoardBox({ children }) {
  return <DemoShowBox>{children}</DemoShowBox>;
}
