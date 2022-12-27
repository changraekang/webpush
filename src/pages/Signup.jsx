import styled from "styled-components";
import AuthBox from "../component/containers/AuthBox";
import {MAIN_BACKGROUND_COLOR} from '../constants/color';
import logo from '../assets/images/logo.png';
import InactiveButton from "../component/buttons/InactiveButton";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${MAIN_BACKGROUND_COLOR};
`

const WrapLogo = styled.div`
  width: 100%;
  text-align: center;
`

const Logo = styled.img`
  width: 258px;
  height: 74px;
  `

  const WrapContents = styled.div`
    width: 317px;
  `
export default function Signup() {
  return (
    <Section>
      <h1 className="ir">회원가입</h1>
      <AuthBox>
        <WrapLogo>
          <Logo src={logo} alt="메인로고" />
        </WrapLogo>
        <WrapContents>
          <InactiveButton>로그인</InactiveButton>  
        </WrapContents>
      </AuthBox>  
    </Section>
  )
}
