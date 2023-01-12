import styled from 'styled-components'
import {ProfileBox} from '../../components/containers/profile/ProfileBox'
import { error3 } from '../../constants/color'
import Layout from '../../templates/Layout';
import { InputGroup, InputValidateGroup } from '../../components/inputs/InputGroups'
import {UpdateProfileBtn} from '../../components/buttons/ProfileButtons';
import { instanceAxios } from '../../api/axios';
import { useEffect, useState } from 'react';

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
`
const WrapButton = styled.div`
  width: 180px;
  margin: 40px auto 0;
`
const LabelWarning = styled.span`
  display: block;
  color: ${error3};
  font-size: 12px;
  margin: 8px 0 0;
`;

export default function MyPage() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    if (phone.length === 10) {
      setPhone(phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (phone.length === 13) {
      setPhone(
        phone
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [email]);

  const handlePhone = (e) => {
    if (e.target.name === "phone") {
      const regex = /^[0-9\b -]{0,13}$/;
      if (regex.test(e.target.value)) {
        setPhone(e.target.value);
      } 
  }}

  const handleEmail = (e) => {
    setEmail(e.target.value)
    if (e.target.name === "email") {
      const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm;
      if (regex.test(e.target.value)) {
        setEmail(e.target.value);
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false)
      }
   }
  }

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
        }
      } catch (err) {
          console.error(err);
      }
    }
  }

  return (
    <Layout>
      <ProfileBox>
        <form action="post">
          <WrapInputs>
            <LabelStyle htmlFor="email">이메일</LabelStyle>
            <div>
              <InputValidateGroup 
              type="text" 
              id='email' 
              name='email'
              value={email === undefined ? '' : email} 
              setValue={handleEmail}
              />
              {!isValidEmail && <LabelWarning>올바른 이메일 형식이 아닙니다.</LabelWarning>}
            </div>
          </WrapInputs>
          <WrapInputs>
            <LabelStyle htmlFor="phone">휴대폰 번호</LabelStyle>
            <div>
              <InputValidateGroup 
              type="text" 
              id='phone' 
              name='phone'
              value={phone === undefined ? '' : phone} 
              setValue={handlePhone}
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
              <UpdateProfileBtn updateMyInfo={updateMyInfo}>수정</UpdateProfileBtn>
            </WrapButton>
        </form>
      </ProfileBox>
    </Layout>
  )
}
