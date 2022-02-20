import styled from 'styled-components';
import React from 'react'

const Wrapper = styled.button`
    font-family:${props => props.theme.fam.lulo};
    height:35px;
    width:170px;
    font-size:10px;
    border:none;
    text-transform:uppercase;
    border-radius:100px;
    background:${props => props.theme.color.yellow};
    text-decoration:none;
    color:#000000;
`;

function Button({ link, text }) {
    return (<a href={link}>
        <Wrapper>

            {text}

        </Wrapper></a>
    )
}

export default Button
