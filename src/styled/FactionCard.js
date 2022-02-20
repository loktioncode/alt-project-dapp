import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
max-width:350px;
margin:0 auto;
text-align:center;
@media(min-width:768px){
    width:20%;
}
.img{
    width:100%;
    img{
        width:100%;
        border-radius:10px;
    }
}
    h3{
        font-family:${props => props.theme.fam.helvetica};
        text-transform:uppercase;
        margin:10px 0 30px;
        width:max-content;
        display:block;
        position:relative;
        left:50%;
        transform:translateX(-50%);
        font-size:25px;
        @media(min-width:768px){
            font-size:20px;
            text-align:center;
        }
    }
`

function FactionCard({text, imageName}) {
    return (
        <CardWrapper>
            <div className="img">
                <img src={`./images/${imageName}`} alt="" />
            </div>
            <h3>
                {text}
            </h3>
        </CardWrapper>
    )
}

export default FactionCard
