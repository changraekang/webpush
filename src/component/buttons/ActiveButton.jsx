import styled from "styled-components"
import {ACTIVE_BUTTON_COLOR, ACTIVE_BUTTON_FONT_COLOR} from '../../constants/color'

const ActiveBtn = styled.button`
  display: block;
  border: none;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${ACTIVE_BUTTON_COLOR};
  color: ${ACTIVE_BUTTON_FONT_COLOR};
`

export default function ActiveButton({children}) {
  return (
    <ActiveBtn>{children}</ActiveBtn>
  )
}
