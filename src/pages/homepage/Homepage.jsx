import styled from "styled-components";
import HomepageBox from "../../components/containers/homepage/HomepageBox";
import Layout from '../../templates/Layout';
import { InputGroup } from '../../components/inputs/InputGroups'
import UpdateProfile from '../../components/buttons/ProfileButtons';
import { instanceAxios } from '../../api/axios';
import { useEffect, useState } from 'react';
import HompageButton from "../../components/buttons/HompageButtons";
import { grey1, grey4, primary4, error3 } from "../../constants/color";
import {SelectHomepage, UpdateHomepage} from "../../components/buttons/HompageButtons";
import { useRecoilState } from "recoil";
import { MyProject, MyPushProject } from "../../atom/Atom";
const WrapInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 380px;
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

const TopAlign = styled.ul`
  display: flex;
  gap: 10px;
  position: relative;
  margin-bottom: 40px;
  justify-content: space-between;

    ::after {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${grey4};
    bottom: -20px;
    left: 0;
  }
`

const WrapHomepages = styled.ul`
  display: flex;
  gap: 10px;
  position: relative;
  align-items: center;
`

 const DeleteBtn = styled.button`
  color: ${error3};
  font-weight: 600;
 `

export default function Homepage() {
  const [myProject, setMyProject] = useRecoilState(MyProject);
  const [myPushProject, setMyPushProject] = useRecoilState(MyPushProject);
  // const [projectArr, setProjectArr] = useState([]);
  const [homepage, setHomepage] = useState(MyPushProject.name);
  const [link, setLink] = useState(MyPushProject.projectUrl);
  const [cateogry, setCategory] = useState(MyPushProject.categoryCode);
  const [pid, setPid] = useState('');
  // console.log(myPushProject, "myPushProject🐰");
  // console.log(myProject, "myProject🎉🎉🎉");

  const getOneHomepage = async() => {
    try{
      const response = await instanceAxios.get(`/project/${pid}`);
      console.log("하나의 프로젝트⭐" , response.data);
      if(response.status === 200) {
        setMyPushProject(response.data);
      }    
      } catch (err) {
        console.error(err);
    }
  }

  // useEffect(() => {
  //   setMyPushProject(myProject)
  // },[])

  useEffect(() => {
    if(pid) {
      getOneHomepage()
    }
  }, [pid])


  const updateData = {
    "code": cateogry,
    "name": homepage,
    "projectUrl": link
  }  

  const updateHomePage = async(e) => {
    e.preventDefault()
    try{
      const response = await instanceAxios.put(`/project/${pid}`, updateData);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  const deleteHomePage = async(e) => {
    e.preventDefault()
    try{
      const response = await instanceAxios.delete(`/project/${pid}`);
      console.log(response.data, "데이터 지우기⚠️");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Layout>
      <HomepageBox>
        <TopAlign>
          <WrapHomepages>
            {myProject?.map(({name, pid})=> {
              return (
                <li key={pid}>
                  <SelectHomepage setValue={()=> {setPid(pid);}}>
                    {name}
                  </SelectHomepage >
                </li>
              ) 
            })}
          </WrapHomepages>
          <DeleteBtn onClick={deleteHomePage}>삭제하기</DeleteBtn>
        </TopAlign>
      <form action="post">
        <WrapInputs>
          <LabelStyle htmlFor="homepage">홈페이지명</LabelStyle>
          <div>
          <InputGroup 
          type="text" 
          id='homepage' 
          value={myPushProject.name} 
          setValue={setHomepage}
          />
          </div>
        </WrapInputs>
        <WrapInputs>
          <LabelStyle htmlFor="link">홈페이지주소</LabelStyle>
          <div>
          <InputGroup 
          type="text" 
          id='link' 
          value={myPushProject.projectUrl} 
          setValue={setLink}
          />
          </div>
        </WrapInputs>
        <WrapInputs>
          <LabelStyle htmlFor="category">카테고리</LabelStyle>
          <div>
          <InputGroup 
          type="text" 
          id='category' 
          value={myPushProject.categoryCode} 
          setValue={setCategory}
          />
          </div>
        </WrapInputs>
          <WrapButton>
          <UpdateHomepage updateHomePage={updateHomePage}>수정</UpdateHomepage>
          </WrapButton>
        </form>
      </HomepageBox>
    </Layout>
  )
}
