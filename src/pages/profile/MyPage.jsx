import styled from 'styled-components'
import ProfileBox from '../../components/containers/profile/ProfileBox'
import { grey3 } from '../../constants/color'
import Layout from '../../templates/Layout';
import { InputValidateGroup, InputGroup } from '../../components/inputs/InputGroups'
import UpdateProfile from '../../components/buttons/ProfileButtons';
import { instanceAxios } from '../../api/axios';
import { useEffect, useState } from 'react';

const Section = styled.section`
  background: ${grey3};
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 100vh;
  padding: 20px;
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
const WrapButton = styled.div`
  width: 180px;
  margin: 40px auto 0;
`


export default function MyPage() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');

  const getMemberInfo = async() => {
    try{
      const response = await instanceAxios.post('/member/me',{})
      console.log(response);
      const data = response.data; 
      if(response.status === 200) {
        setEmail(data.email);
        setPhone(data.phone);
        setCompany(data.company);
      }
    } catch (err) {
        console.error(err);
    }
  }
  
  useEffect(() => {
    getMemberInfo();
  }, [])


  const updateData = {
    "company": company,
    "email": email,
    "phone": phone
  }

  const updateMyInfo = async(e) => {
    e.preventDefault();
    if(window.confirm('개인정보를 수정하시겠습니까?')) {
      try{
        const response = await instanceAxios.put('/member/update', updateData)
        console.log(response);
        const data = response.data; 
        if(response.status === 200) {
          setEmail(data.email);
          setPhone(data.phone);
          setCompany(data.company);
          alert('성공적으로 정보를 수정하였습니다.🎉');
          window.location.reload();
        }
      } catch (err) {
          console.error(err);
      }
    }
  }

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
                    <InputGroup 
                    type="text" 
                    id='email' 
                    value={email === undefined ? '' : email} 
                    setValue={setEmail}
                    />
                  </div>
                </WrapInputs>
                <WrapInputs>
                  <LabelStyle htmlFor="phone">휴대폰 번호</LabelStyle>
                  <div>
                    <InputGroup 
                    type="text" 
                    id='phone' 
                    value={phone === undefined ? '' : phone} 
                    setValue={setPhone}
                    />
                  </div>
                </WrapInputs>
                <WrapInputs>
                  <LabelStyle htmlFor="company">회사명</LabelStyle>
                  <div>
                    <InputGroup 
                    type="text" 
                    id='company' 
                    value={company === undefined ? '' : company} 
                    setValue={setCompany}
                    />
                  </div>
                </WrapInputs>
                  <WrapButton>
                    <UpdateProfile updateMyInfo={updateMyInfo}>수정</UpdateProfile>
                  </WrapButton>
              </form>
            </ProfileBox>
        </WrapBox>
        </Section>
    </Layout>
  )
}
