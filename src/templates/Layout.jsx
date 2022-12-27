import logo from '../assets/images/logo.png';
import mypageLogo from '../assets/images/mypage-logo.png';
import styled from 'styled-components';
import {SIDE_NAV_COLOR ,NAV_FONT_HOVER_COLOR,NAV_MAIN_COLOR,NAV_BUTTON_HOVER_COLOR,NAV_FONT_COLOR} from '../constants/color';
import { useEffect, useState } from 'react';


const Header = styled.header`
  display: flex;
`
const Nav = styled.nav`
  background: ${SIDE_NAV_COLOR};
  color: ${NAV_FONT_COLOR};
  padding: 40px;
  height: 100vh
`

const MainLogo = styled.img`
  width: 152px;
  height: 44px;
`

const NavLi = styled.ul`
  margin-top: 61px;
`

const WrapRight = styled.div`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
`

const TopHeader = styled.div`
  background: ${NAV_MAIN_COLOR};
  padding: 21px;
  box-sizing: border-box;
`

const MyButton = styled.button`
  display: block;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  float: right;
  padding: 5px;
  cursor: pointer;
  font-weight: 900;

  &:hover {
    background: ${NAV_BUTTON_HOVER_COLOR};
    border-radius: 8px;
  }
`
const LI = styled.li`
  margin-bottom: 32px;
  `
  
const A = styled.a`
color: ${NAV_FONT_COLOR};

&:hover {
  color : ${NAV_FONT_HOVER_COLOR};
}
`

const SubNav = styled.ul`
  margin: 0 0 20px 30px;
`

const SubLI = styled.li`
  margin-bottom:20px;
`

export default function Layout({children}) {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    !openNav ? setOpenNav(true) : setOpenNav(false)
  }

  return (
    <Header>
    {/* 왼쪽 */}
      <Nav>
          <MainLogo src={logo} alt="메인 로고" />
          <NavLi>
              <LI><A href='#'>대시보드</A></LI>
              <LI onClick={handleOpenNav}><A href='#'>PUSH 관리</A></LI>
              {openNav && 
                <SubNav>
                  <SubLI><A href='#'>push 작성</A></SubLI>
                  <SubLI><A href='#'>push 리스트</A></SubLI>
                </SubNav>
              }  
            
          </NavLi>
      </Nav>

      {/* 오른쪽 */}
      <WrapRight>
          <TopHeader>
              <MyButton>
                <img src={mypageLogo} alt="마이페이지 로고" />
                김태희(사용자)
              </MyButton>
          </TopHeader>
          <main>
            { children }
          </main>  
      </WrapRight>
    </Header>
  )
}
