import React from "react";
import { BoardWrapBox } from "../components/containers/dashboard/BoardBox";
import Layout from "../templates/Layout";
import styled from "styled-components";
const PageWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const DashBoard = () => {
  return (
    <Layout>
      <PageWrapper>
        <BoardWrapBox>전체 발송량</BoardWrapBox>
        <BoardWrapBox>발송중</BoardWrapBox>
        <BoardWrapBox>발송 완료</BoardWrapBox>
      </PageWrapper>
    </Layout>
  );
};

export default DashBoard;
