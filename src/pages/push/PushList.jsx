import React, { useEffect, useState } from "react";
import Layout from "../../templates/Layout";
import styled from "styled-components";
import fox from "../../assets/images/fox.png";
import { PushListBoxs } from "../../components/containers/push/PushBox";
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
import { ActiveDeletePushButton } from "../../components/buttons/PushButtons";
import Pagination from "../../components/pagination/Pagination";
import { useNavigate } from "react-router-dom";
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
  display: flex;
  width: 35%;
  color: ${grey9};
  font-size: 18px;
`;
const DetailMessage = styled.p`
  display: flex;
  justify-content: center;
  width: 35%;
  color: ${grey9};
  margin-bottom: 5px;
  font-size: 14px;
  border-right: 1px solid black;
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
  flex-direction: row;
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
const PushContentListWrapper = styled.div`
  padding-top: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid black; ;
`;
const PushDetailListWrapper = styled.div`
  width: 160%;
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
  //React ??????
  const navigate = useNavigate();
  //?????? ??????
  const offset = 1000 * 60 * 60 * 9;
  const koreaNow = new Date(new Date().getTime() + offset).toISOString();
  //state
  const [myPushProject, setMyPushProject] = useRecoilState(MyPushProject);
  const [isReserve, setIsReserve] = useState(true);
  const [isProceed, setIsProceed] = useState(true);
  const [isComplete, setIsComplete] = useState(true);
  const [isAll, setIsAll] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [pushList, setPushList] = useState([]);

  // ??????????????????
  const [currentPage, setCurrrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = pushList
    .slice(firstPostIndex, lastPostIndex)
    .sort(function (a, b) {
      if (a.create_time > b.create_time) {
        return -1;
      }
      if (a.create_time < b.create_time) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });

  useEffect(() => {
    if (isReserve && isProceed && isComplete) {
      setIsAll(true);
    }
    if (!isReserve || !isProceed || !isComplete) {
      setIsAll(false);
    }
  }, [isReserve, isProceed, isComplete]);
  useEffect(() => {
    getPushList();
  }, [myPushProject]);
  const getPushList = async () => {
    try {
      const response = await instanceAxios.get(
        `/message/${myPushProject.pid}/all`,
        {}
      );
      if (response.status === 200) {
        setPushList(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  //handle ??????
  const handleSubmit = async (mid) => {
    if (window.confirm("push ???????????? ?????????????????????????")) {
      try {
        const response = await instanceAxios.delete(`/message/${mid}`);
        if (response.status === 200) {
          alert("??????????????? ?????????????????????.");
          window.location.reload();
        }
      } catch (err) {
        console.error(err);
      }
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
  const renderAllPush = () => {
    return currentPosts.map((item, index) => {
      return (
        <PushContentListWrapper key={item.mid}>
          <PushDetailListWrapper
            onClick={() => navigate(`/pushdetail/${item.mid}`)}
          >
            <DetailMessage>{item.state}</DetailMessage>
            <DetailMessage>{item.pushType}</DetailMessage>
            <DetailMessage>
              {item.title.length > 20
                ? item.title.substring(0, 20) + "..."
                : item.title}
            </DetailMessage>
            <DetailMessage>
              {item.content.length > 20
                ? item.content.substring(0, 20) + "..."
                : item.content}
            </DetailMessage>
            <DetailMessage>
              {item.sendTime.replace("T", " ").substring(0, 16)}
            </DetailMessage>
          </PushDetailListWrapper>
          <DetailMessage>
            <ActiveDeletePushButton handleSubmit={() => handleSubmit(item.mid)}>
              ??????
            </ActiveDeletePushButton>
          </DetailMessage>
        </PushContentListWrapper>
      );
    });
  };
  const renderWaitingPush = () => {
    return currentPosts.map((item, index) => {
      return (
        <PushContentListWrapper key={item.mid}>
          <PushDetailListWrapper
            onClick={() => navigate(`/pushdetail/${item.mid}`)}
          >
            <DetailMessage>{item.state}</DetailMessage>
            <DetailMessage>{item.pushType}</DetailMessage>
            <DetailMessage>
              {item.title.length > 20
                ? item.title.substring(0, 20) + "..."
                : item.title}
            </DetailMessage>
            <DetailMessage>
              {item.content.length > 20
                ? item.content.substring(0, 20) + "..."
                : item.content}
            </DetailMessage>
            <DetailMessage>
              {item.sendTime.replace("T", " ").substring(0, 16)}
            </DetailMessage>
          </PushDetailListWrapper>
          <DetailMessage>
            <ActiveDeletePushButton handleSubmit={() => handleSubmit(item.mid)}>
              ??????
            </ActiveDeletePushButton>
          </DetailMessage>
        </PushContentListWrapper>
      );
    });
  };
  const renderReservePush = () => {
    return currentPosts.map((item, index) => {
      // console.log(item.sendTime < koreaNow, "?????? ??????");
      // console.log(koreaNow, "?????? ??????");
      if (item.sendTime > koreaNow) {
        return (
          <PushContentListWrapper key={item.mid}>
            <PushDetailListWrapper
              onClick={() => navigate(`/pushdetail/${item.mid}`)}
            >
              <DetailMessage>{item.state}</DetailMessage>
              <DetailMessage>{item.pushType}</DetailMessage>
              <DetailMessage>
                {item.title.length > 20
                  ? item.title.substring(0, 20) + "..."
                  : item.title}
              </DetailMessage>
              <DetailMessage>
                {item.content.length > 20
                  ? item.content.substring(0, 20) + "..."
                  : item.content}
              </DetailMessage>
              <DetailMessage>
                {item.sendTime.replace("T", " ").substring(0, 16)}
              </DetailMessage>
            </PushDetailListWrapper>
            <DetailMessage>
              <ActiveDeletePushButton
                handleSubmit={() => handleSubmit(item.mid)}
              >
                ??????
              </ActiveDeletePushButton>
            </DetailMessage>
          </PushContentListWrapper>
        );
      }
    });
  };
  return (
    <Layout>
      <PageWrapper>
        <Title>
          {myPushProject.name ? myPushProject.name : "??????????????? ??????????????????"}
        </Title>
        <PageTitle>PUSH ????????? </PageTitle>

        <Message>??????????????? ?????? ????????? ??????????????????</Message>
        <PushListBoxs>
          <PushButtonWrapper>
            <RadioList>
              <RadioLi onClick={handleAllClick}>
                {!isAll && <img src={inActiveCheck} alt="????????? ?????? ?????????" />}
                {isAll && <img src={activeCheck} alt="????????? ?????? ?????????" />}
                ??????
              </RadioLi>
              <RadioLi onClick={() => setIsReserve(!isReserve)}>
                {!isReserve && (
                  <img src={inActiveCheck} alt="????????? ?????? ?????????" />
                )}
                {isReserve && (
                  <img src={activeCheck} alt="????????? ?????? ?????????" />
                )}
                ?????????
              </RadioLi>
              <RadioLi onClick={() => setIsProceed(!isProceed)}>
                {!isProceed && (
                  <img src={inActiveCheck} alt="??????????????? ?????? ?????????" />
                )}
                {isProceed && (
                  <img src={activeCheck} alt="??????????????? ?????? ?????????" />
                )}
                ?????????
              </RadioLi>
              <RadioLi onClick={() => setIsComplete(!isComplete)}>
                {!isComplete && (
                  <img src={inActiveCheck} alt="??????????????? ?????? ?????????" />
                )}
                {isComplete && (
                  <img src={activeCheck} alt="??????????????? ?????? ?????????" />
                )}
                ????????????
              </RadioLi>
            </RadioList>
          </PushButtonWrapper>
        </PushListBoxs>
        <PushListBoxs>
          <PushListWrapper>
            <PushContentListWrapper>
              <PushDetailListWrapper>
                <DetailMessage>??????</DetailMessage>
                <DetailMessage>????????????</DetailMessage>
                <DetailMessage>??????</DetailMessage>
                <DetailMessage>??????</DetailMessage>
                <DetailMessage>????????????</DetailMessage>
              </PushDetailListWrapper>
              <DetailMessage></DetailMessage>
            </PushContentListWrapper>
            {isReserve && isComplete && isProceed && renderAllPush()}
            {isReserve && !isAll && renderReservePush()}
          </PushListWrapper>
        </PushListBoxs>
        <Pagination
          totalPost={pushList.length}
          postsPerPage={postsPerPage}
          setCurrrentPage={setCurrrentPage}
        />
      </PageWrapper>
    </Layout>
  );
};

export default PushList;
