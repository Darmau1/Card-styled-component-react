
import styled from "styled-components";
import img from '../public/images/Rectangle 1.svg';
import { StyledButton } from './components/buttonss/StyledButton.tsx'
import { Theme } from './styles/Theme.styled.tsx';
import { GlobalsTypeProps } from "./components/GlobalTypesProps.tsx";
export default function App() {
    return (
        <div>
            <Card>
                    <Img src ={img} alt="card image"/>
                <CardContiner>
                    <TextName>Headline</TextName>
                    <TextContent>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</TextContent>
                    <BtnContiner>
                        <StyledButton btnType={"primary"}>See more</StyledButton>
                        <StyledButton btnType={"outlined"}>Save</StyledButton>
                    </BtnContiner>
                </CardContiner>
            </Card>
        </div>
    )
}


const Card = styled.div`
width: 300px;
height: 350px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
border-radius:10px;
padding:10px;
box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);
baground-color: ${Theme.colors.primary};
`

const CardContiner = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
padding:10px;
width:100%;
height:100%;
`

const Img = styled.img`
width: 100%;
height:100%;
`

const TextName = styled.h1<GlobalsTypeProps>`
font-size:${props => props.fontSize || Theme.fontSizes.mainTextSize};
font-weight:bold;
line-height:100%;
color: ${props => props.color || Theme.colors.textmainColor};
`
const TextContent = styled.p<GlobalsTypeProps>`
width: 260px;
font-size:${props => props.fontSize || Theme.fontSizes.textSize};
font-weight:medium;
line-height:20px;
color:${props => props.color || Theme.colors.textConetentColor};

`
const BtnContiner = styled.div`
display: flex;
gap: 20px;
`


