import styled from "styled-components"
import {NORMAL_BUTTON_COLOR, NORMAL_BUTTON_FONT_COLOR,NORMAL_BUTTON_BORDER_COLOR} from '../../constants/color'

const NormalBtn = styled.button`
  display: block;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${NORMAL_BUTTON_BORDER_COLOR};
  background-color: ${NORMAL_BUTTON_COLOR};
  color:${NORMAL_BUTTON_FONT_COLOR};
`

export default function NormalButton({children}) {
  return (
    <NormalBtn>{children}</NormalBtn>
  )
}