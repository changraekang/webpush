import React from "react";
import { BoardWrapBox } from "../components/containers/dashboard/BoardBox";
import Layout from "../templates/Layout";
import styled from "styled-components";
import { grey3 } from "../constants/color";
const PageWrapper = styled.div`
  width: 100%;
  padding-top: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${grey3};
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
