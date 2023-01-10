import styled from 'styled-components'
import ProfileBox from '../../components/containers/profile/ProfileBox'
import { grey3 } from '../../constants/color'
import Layout from '../../templates/Layout';
import { InputValidateGroup } from '../../components/inputs/InputGroups'
import UpdateProfile from '../../components/buttons/ProfileButtons';

const Section = styled.section`
  background: ${grey3};
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 100vh;
  font-family: "Pretendard-Regular";
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 32px;
`

const WrapBox = styled.div`
  width: 800px;
  margin-top: 80px;
`

const WrapInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 380px;
  /* gap: 180px; */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

const LabelStyle = styled.label`
  display: flex;
  /* width: 180px; */
`
const Wrapbutton = styled.div`
  width: 180px;
  margin: 40px auto 0;

`

export default function MyPage() {
  return (
    <Layout>
        <Section>
        <h1 className='ir'>나의 정보 페이지</h1>
        <WrapBox>
            <ProfileBox>
              <Title>나의 정보</Title>
              <form action="">
                <WrapInputs>
                  <LabelStyle htmlFor="email">이메일</LabelStyle>
                  <div>
                    <InputValidateGroup type="text" id='email'/>
                  </div>
                </WrapInputs>
                <WrapInputs>
                  <LabelStyle htmlFor="phone">휴대폰 번호</LabelStyle>
                  <div>
                    <InputValidateGroup type="text" id='phone'/>
                  </div>
                </WrapInputs>
                <WrapInputs>
                  <LabelStyle htmlFor="company">회사명</LabelStyle>
                  <div>
                    <InputValidateGroup type="text" id='company'/>
                  </div>
                </WrapInputs>
                  <Wrapbutton>
                    <UpdateProfile>수정</UpdateProfile>
                  </Wrapbutton>
              </form>
            </ProfileBox>
        </WrapBox>
        </Section>
    </Layout>
  )
}
