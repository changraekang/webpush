import styled from 'styled-components'
import {PasswordBox} from '../../components/containers/profile/ProfileBox'
import { grey3 } from '../../constants/color'
import Layout from '../../templates/Layout';
import { InputGroup } from '../../components/inputs/InputGroups'
import {UpdatePasswordBtn} from '../../components/buttons/ProfileButtons';
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
  /* width: 180px; */
`
const WrapButton = styled.div`
  width: 180px;
  margin: 40px auto 0;
`

export default function NewPassword() {
  const [email, setEmail] = useState('');
  const [confimPassword, setConfimPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const getMemberInfo = async() => {
    try{
      const response = await instanceAxios.post('/member/me',{})
      console.log(response);
      const data = response.data; 
      if(response.status === 200) {
        setEmail(data.email);
      }
    } catch (err) {
        console.error(err);
    }
  }
  
  useEffect(() => {
    getMemberInfo();
  }, [])


  const updateData = {
    "email": email,
    "confimPassword": confimPassword,
    "currentPassword": currentPassword,
    "newPassword": newPassword,
  }

  const updatePassword = async(e) => {
    e.preventDefault();
    if(window.confirm('비밀번호를 수정하시겠습니까?')) {
      try{
        const response = await instanceAxios.put('/member/password/update', updateData)
        console.log(response, "비밀번호 변경 api");
        const data = response.data; 
        if(response.status === 200) {
          // setEmail(data.email);
          // setPhone(data.phone);
          // setCompany(data.company);
          alert('성공적으로 비밀번호를 수정하였습니다.🎉');
          window.location.reload();
        }
      } catch (err) {
          console.error(err);
      }
    }
  }
  return (
    <Layout>
        <PasswordBox>
        <form action="post">
          <WrapInputs>
            <LabelStyle htmlFor="currentPassword">기존 비밀번호</LabelStyle>
            <div>
              <InputGroup 
              type="text" 
              id='currentPassword' 
              value={currentPassword === undefined ? '' : currentPassword} 
              setValue={setCurrentPassword}
              />
            </div>
          </WrapInputs>
          <WrapInputs>
            <LabelStyle htmlFor="newPassword">새 비밀번호</LabelStyle>
            <div>
              <InputGroup 
              type="text" 
              id='newPassword' 
              value={newPassword === undefined ? '' : newPassword} 
              setValue={setNewPassword}
              />
            </div>
          </WrapInputs>
          <WrapInputs>
            <LabelStyle htmlFor="confimPassword">새비밀번호 확인</LabelStyle>
            <div>
              <InputGroup 
              type="text" 
              id='confimPassword' 
              value={confimPassword === undefined ? '' : confimPassword} 
              setValue={setConfimPassword}
              />
            </div>
          </WrapInputs>
            <WrapButton>
              <UpdatePasswordBtn updatePassword={updatePassword}>수정</UpdatePasswordBtn>
            </WrapButton>
        </form>
      </PasswordBox>
    </Layout>
  )
}
