import React, { useEffect, useState } from "react";
import Layout from "../../templates/Layout";
import styled from "styled-components";
import fox from "../../assets/images/fox.png";
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
  height: 100vh;
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
  width: 580px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
const PushConteneListWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
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

const MessageType = styled.div`
  display: flex;
  flex-direction: row;
  width: 80px;
  font-size: 14px;
  height: 23px;
`;
const MessageEven = styled.div`
  display: flex;
  font-size: 14px;
  height: 23px;
  background-color: ${primary2};
`;
const PushList = () => {
  const [myPushProject, setMyPushProject] = useRecoilState(MyPushProject);
  const [pushList, setPushList] = useState([]);
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
  useEffect(() => {
    if (myPushProject.pid) {
      getPushList();
    }
    console.log(pushList, "pushList");
  }, [myPushProject]);
  return (
    <Layout>
      <PageWrapper>
        <Title>
          {myPushProject.name ? myPushProject.name : "프로젝트를 선택해주세요"}
        </Title>
        <PageTitle>PUSH 리스트 </PageTitle>
        <Message>고객들에게 날린 웹푸시 리스트입니다</Message>
        <PushListWrapper>
          <Tabs>푸시타이틀</Tabs>
          <PushConteneListWrapper>
            <MessageType>상태</MessageType>
            <MessageType>내용</MessageType>
            <MessageType>진행</MessageType>
            <MessageType>발송시간</MessageType>
            <MessageType>발송시간</MessageType>
          </PushConteneListWrapper>
          <PushConteneListWrapper>
            <MessageType>예약중</MessageType>
            <MessageType>내용입니다</MessageType>
            <MessageType>70%</MessageType>
            <MessageType>2023-02-15</MessageType>
            <MessageType>2023-02-15</MessageType>
          </PushConteneListWrapper>
        </PushListWrapper>
      </PageWrapper>
    </Layout>
  );
};

export default PushList;
