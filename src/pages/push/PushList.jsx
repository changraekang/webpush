import React, { useEffect, useState } from "react";
import Layout from "../../templates/Layout";
import styled from "styled-components";
import fox from "../../assets/images/fox.png";
import { PushListBox } from "../../components/containers/push/PushBox";
import activeCheck from "../../assets/images/active-check.png";
import inActiveCheck from "../../assets/images/inactive-check.png";
import {
  grey1,
  grey2,
  grey3,
  grey5,
  grey9,
  primary2,
} from "../../constants/color";
import { useRecoilState } from "recoil";
import { MyPushProject } from "../../atom/Atom";
import { instanceAxios } from "../../api/axios";
const PageWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  background-color: ${grey3};
`;
const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-left: 40px;
`;
const Title = styled.p`
  display: flex;
  font-weight: 600;
  margin-bottom: 24px;
  border-bottom: 3px solid black;
`;

const Message = styled.p`
  color: ${grey9};
  font-size: 18px;
`;
const PageTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  padding-bottom: 12px;
`;
const PushListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
const PushButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
const RadioList = styled.ul`
  display: flex;
  margin: 14px 0;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
`;

const RadioLi = styled.li`
  display: flex;
  margin-right: 20px;
  align-items: center;
  gap: 4px;
`;
const PushConteneListWrapper = styled.div`
  padding-top: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid black; ;
`;
const Tabs = styled.div`
  display: flex;
  font-size: 24px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  flex: 0 0 30px;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const Message10 = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
  font-size: 14px;
  height: 23px;
  border-right: 1px solid black;
`;
const Message35 = styled.div`
  display: flex;
  justify-content: center;
  width: 35%;
  margin-bottom: 5px;
  font-size: 14px;
  height: 23px;
  border-right: 1px solid black;
`;
const MessageEven = styled.div`
  display: flex;
  font-size: 14px;
  height: 23px;
  background-color: ${primary2};
`;
const PushList = () => {
  const [myPushProject, setMyPushProject] = useRecoilState(MyPushProject);
  const [isReserve, setIsReserve] = useState(false);
  const [isProceed, setIsProceed] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isAll, setIsAll] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [pushList, setPushList] = useState([]);
  useEffect(() => {
    if (isReserve && isProceed && isComplete) {
      setIsAll(true);
    }
    if (!isReserve || !isProceed || !isComplete) {
      setIsAll(false);
    }
  }, [isReserve, isProceed, isComplete]);
  const getPushList = async () => {
    console.log("pushList", myPushProject.pid);

    try {
      const response = await instanceAxios.get(
        `/message/${myPushProject.pid}/all`,
        {}
      );
      console.log(response);
      const data = response.data;
      if (response.status === 200) {
        setPushList(data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleAllClick = () => {
    if (isAll === false) {
      setIsAll(true);
      if (isProceed === false) {
        setIsProceed(true);
      }
      if (isComplete === false) {
        setIsComplete(true);
      }
      if (isReserve === false) {
        setIsReserve(true);
      }
    } else {
      setIsProceed(false);
      setIsComplete(false);
      setIsReserve(false);
      setIsAll(false);
    }
  };
  return (
    <Layout>
      <PageWrapper>
        <Title>
          {myPushProject.name ? myPushProject.name : "프로젝트를 선택해주세요"}
        </Title>
        <PageTitle>PUSH 리스트 </PageTitle>

        <Message>고객들에게 날린 웹푸시 리스트입니다</Message>
        <PushListBox>
          <PushButtonWrapper>
            <RadioList>
              <RadioLi onClick={handleAllClick}>
                {!isAll && <img src={inActiveCheck} alt="웹푸시 체크 아이콘" />}
                {isAll && <img src={activeCheck} alt="웹푸시 체크 아이콘" />}
                전체
              </RadioLi>
              <RadioLi onClick={() => setIsReserve(!isReserve)}>
                {!isReserve && (
                  <img src={inActiveCheck} alt="웹푸시 체크 아이콘" />
                )}
                {isReserve && (
                  <img src={activeCheck} alt="웹푸시 체크 아이콘" />
                )}
                예약중
              </RadioLi>
              <RadioLi onClick={() => setIsProceed(!isProceed)}>
                {!isProceed && (
                  <img src={inActiveCheck} alt="모바일푸시 체크 아이콘" />
                )}
                {isProceed && (
                  <img src={activeCheck} alt="모바일푸시 체크 아이콘" />
                )}
                진행중
              </RadioLi>
              <RadioLi onClick={() => setIsComplete(!isComplete)}>
                {!isComplete && (
                  <img src={inActiveCheck} alt="모바일푸시 체크 아이콘" />
                )}
                {isComplete && (
                  <img src={activeCheck} alt="모바일푸시 체크 아이콘" />
                )}
                진행완료
              </RadioLi>
            </RadioList>
          </PushButtonWrapper>
        </PushListBox>
        <PushListBox>
          <PushListWrapper>
            <PushConteneListWrapper>
              <Message10>상태</Message10>
              <Message10>발송타입</Message10>
              <Message35>내용</Message35>
              <Message10>발송시간</Message10>
              <Message35></Message35>
            </PushConteneListWrapper>
            <PushConteneListWrapper>
              <Message10>예약중</Message10>
              <Message10>웹푸시</Message10>
              <Message35>테스트 메세지입니다</Message35>
              <Message10>2023-02-15</Message10>
              <Message35>
                <button>수정</button>
                <button>삭제</button>
              </Message35>
            </PushConteneListWrapper>
          </PushListWrapper>
        </PushListBox>
      </PageWrapper>
    </Layout>
  );
};

export default PushList;
