import React from 'react';
import styled from "styled-components";
import { ACTIVE_BUTTON_COLOR } from '../constants/color';
    
  
const TestButton = styled.button`
display: flex;
width: 155px;
justify-content: center;
align-items: center;
color: white;
font-size: 1.875rem;
background-color: ${ACTIVE_BUTTON_COLOR};
cursor: pointer;
-webkit-box-align: center;
-webkit-box-pack: center;
border-radius: 8px;
border: none;
`;
const Test = () => {
    return (
        <div>
<<<<<<< HEAD
          <h1>TEST</h1>
          <TestButton>test</TestButton> 
=======
          <h1></h1>  
>>>>>>> 22ff3146e336cd817543acdca79507be43b2b59a
        </div>
    );
};

export default Test;

