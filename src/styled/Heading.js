import styled from 'styled-components';
import React from 'react'

const Wrapper = styled.h2`
    font-family:${props => props.theme.fam.helvetica};
    color:#ffffff;
    text-transform:uppercase;
    position:relative;
    margin:0 auto 30px;
    font-size:20px;
    letter-spacing:5px;
    width:max-content;
    @media(min-width:768px){
        margin:0 0 30px;
        font-size:30px;
    }
    &:before{
        width:40%;
        height:2px;
        background:${props => props.theme.color.yellow};
        content:"";
        bottom:-15px;
        position:absolute;
        left:0;
    }
`;

function Heading({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Heading
