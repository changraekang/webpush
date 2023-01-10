import styled from "styled-components"
import { grey1 } from "../../../constants/color";

const Box = styled.div`
  padding: 32px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.16);
  background-color: ${grey1};
`;

export default function ProfileBox({children}) {
  return (
    <Box>
        {children}
    </Box>
  )
}
