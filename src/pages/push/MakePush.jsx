import React, { useState } from "react";
import styled from "styled-components";
import PushBox from "../../components/containers/push/PushBox";
import Layout from "../../templates/Layout";
import {
  AUTH_LABEL_COLOR,
  MAIN_SUBTITLE_FONT_COLOR,
  INACTIVE_INPUT_BORDER_COLOR,
  INACTIVE_INPUT_FONT_COLOR,
  MAIN_FONT_COLOR,
  ACTIVE_INPUT_COLOR,
  EMAIL_OPTION_BORDER_COLOR,
} from "../../constants/color";
import {
  SAMLL_INPUT_SIZE,
  MAIN_SUBCONTENT_SIZE,
  MAIN_TITLE_SIZE,
  MAIN_SUBTITLE_SIZE,
} from "../../constants/fontSize";
import {
  CertificationButton,
  UnCertificationButton,
  SignupButton,
  BeforeSignupButton,
} from "../../components/buttons/AuthButtons";
import activeCheck from "../../assets/images/active-check.png";
import inActiveCheck from "../../assets/images/inactive-check.png";

const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 10px;
  width: 877px;
  /* height: 100vh; */
  padding: 100px 0;
  font-family: "Pretendard-Regular";
  /* padding: 186px 0; */
`;

const Title = styled.h2`
  font-size: ${MAIN_TITLE_SIZE};
  font-weight: 600;
  padding-bottom: 12px;
`;
const SubTitle = styled.h3`
  font-size: ${MAIN_SUBTITLE_SIZE};
  width: 100px;
  font-weight: 500;
  padding: 6px;
`;

const Message = styled.p`
  font-size: ${MAIN_SUBCONTENT_SIZE};
  color: ${MAIN_SUBTITLE_FONT_COLOR};
`;

const WrapMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const WrapAreaMessage = styled.div`
  width: 100%;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const InputAlign = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: ${(props) => (props.last ? "32px" : "12px")};
  margin-bottom: ${(props) => (props.agreement ? "24px" : null)};
`;

const Input = styled.input`
  width: 100%;
  padding: 16px;
  margin-top: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${INACTIVE_INPUT_BORDER_COLOR};
  color: ${MAIN_FONT_COLOR};
`;
const InputArea = styled.input`
  width: 100%;
  padding: 16px;
  padding-bottom: 300px;
  margin-top: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${INACTIVE_INPUT_BORDER_COLOR};
  color: ${MAIN_FONT_COLOR};
`;

const Label = styled.label`
  color: ${AUTH_LABEL_COLOR};
`;

const RadioList = styled.ul`
  display: flex;
  margin: 14px 0;
  justify-content: flex-start;
  align-items: center;
  font-size: ${MAIN_SUBCONTENT_SIZE};
`;

const RadioLi = styled.li`
  display: flex;
  margin-right: 20px;
  align-items: center;
  gap: 4px;
`;
export default function MakePush() {
  const [isWebCheck, setisWebCheck] = useState(false);
  const [isMobileCheck, setisMobileCheck] = useState(false);
  const [isAdsCheck, setIsAdsCheck] = useState(false);
  const [isInfoCheck, setisInfoCheck] = useState(false);
  const [isEtcCheck, setisEtcCheck] = useState(false);
  const [isDirectCheck, setisDirectCheck] = useState(false);

  const handleWebCheckRadio = () => {
    isWebCheck ? setisWebCheck(false) : setisWebCheck(true);
  };
  const handleMobileCheckRadio = () => {
    isMobileCheck ? setisMobileCheck(false) : setisMobileCheck(true);
  };
  const handleAdsCheckRadio = () => {
    isAdsCheck ? setIsAdsCheck(false) : setIsAdsCheck(true);
  };
  const handleInfoCheckRadio = () => {
    isInfoCheck ? setisInfoCheck(false) : setisInfoCheck(true);
  };
  const handleEtcCheckRadio = () => {
    isEtcCheck ? setisEtcCheck(false) : setisEtcCheck(true);
  };
  const handleDirectCheckRadio = () => {
    isDirectCheck ? setisDirectCheck(false) : setisDirectCheck(true);
  };

  return (
    <Layout>
      <Section>
        <Title>PUSH 작성</Title>
        <Message>
          고객들에게 날릴 웹푸시를 작성 및 등록할 수 있는 페이지입니다.
        </Message>
        <PushBox>
          <Title>01.PUSH 유형</Title>
          <RadioList>
            <RadioLi onClick={handleWebCheckRadio}>
              {!isWebCheck && (
                <img src={inActiveCheck} alt="웹푸시 체크 아이콘" />
              )}
              {isWebCheck && <img src={activeCheck} alt="웹푸시 체크 아이콘" />}
              웹 푸시
            </RadioLi>
            <RadioLi onClick={handleMobileCheckRadio}>
              {!isMobileCheck && (
                <img src={inActiveCheck} alt="모바일푸시 체크 아이콘" />
              )}
              {isMobileCheck && (
                <img src={activeCheck} alt="모바일푸시 체크 아이콘" />
              )}
              모바일 웹 푸시
            </RadioLi>
          </RadioList>
        </PushBox>
        <PushBox>
          <Title>02.메시지 유형</Title>
          <RadioList>
            <RadioLi onClick={handleAdsCheckRadio}>
              {!isAdsCheck && (
                <img src={inActiveCheck} alt="광고성 체크 아이콘" />
              )}
              {isAdsCheck && <img src={activeCheck} alt="웹푸시 체크 아이콘" />}
              광고성
            </RadioLi>
            <RadioLi onClick={handleInfoCheckRadio}>
              {!isInfoCheck && (
                <img src={inActiveCheck} alt="정보성 체크 아이콘" />
              )}
              {isInfoCheck && <img src={activeCheck} alt="기타 체크 아이콘" />}
              정보성
            </RadioLi>
            <RadioLi onClick={handleEtcCheckRadio}>
              {!isEtcCheck && (
                <img src={inActiveCheck} alt="모바일푸시 체크 아이콘" />
              )}
              {isEtcCheck && (
                <img src={activeCheck} alt="모바일푸시 체크 아이콘" />
              )}
              기타
            </RadioLi>
          </RadioList>
        </PushBox>
        <PushBox>
          <Title>03.메시지 내용</Title>
          <WrapMessage>
            <SubTitle>타이틀</SubTitle>
            <Input type="text" placeholder="제목을 입력해주세요."></Input>
          </WrapMessage>
          <WrapAreaMessage>
            <SubTitle>내용</SubTitle>
            <InputArea
              type="textarea"
              placeholder="웹푸시에 넣을 내용을 입력해주세요."
            ></InputArea>
          </WrapAreaMessage>
          <WrapMessage>
            <SubTitle>링크</SubTitle>
            <Input type="text" placeholder="연결할 주소를 입력해주세요"></Input>
          </WrapMessage>
          <WrapMessage>
            <SubTitle>이미지</SubTitle>
            <Input
              type="text"
              placeholder="이메일을 입력하세요"
              readOnly="true"
            ></Input>
          </WrapMessage>
        </PushBox>
        <PushBox>
          <Title>04.발송 유형</Title>
          <RadioList>
            <RadioLi onClick={handleWebCheckRadio}>
              {!isWebCheck && (
                <img src={inActiveCheck} alt="웹푸시 체크 아이콘" />
              )}
              {isWebCheck && <img src={activeCheck} alt="웹푸시 체크 아이콘" />}
              즉시발송
            </RadioLi>
            <RadioLi onClick={handleMobileCheckRadio}>
              <img src={inActiveCheck} alt="모바일푸시 체크 아이콘" />
              예약발송
            </RadioLi>
          </RadioList>
        </PushBox>
      </Section>
    </Layout>
  );
}
