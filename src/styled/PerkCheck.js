import styled from 'styled-components';
import React from 'react'
import {GiCircleClaws} from 'react-icons/gi'
import Bounce from 'react-reveal/Bounce'


const Wrapper = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
    svg{
        color:${props => props.theme.color.yellow};
        height:15px;
        width:15px;
        @media(min-width:768px){
            width:30px;
            height:30px;
        }
    }
    span{
        color:rgb(160,160,159);
        font-size:15px;
        margin-left:10px;
        @media(min-width:992px){
            font-size:18px;
        }
    }
`

function PerkCheck({description}) {
    return (
        <Bounce top cascade>
        <Wrapper>
            <GiCircleClaws /> 
            <span>{description}</span>
        </Wrapper>
         </Bounce>
    )
}

export default PerkCheck
