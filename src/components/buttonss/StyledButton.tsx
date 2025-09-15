import styled, { css } from "styled-components";
import { GlobalsTypeProps } from "../GlobalTypesProps.tsx";
import { Theme } from "../../styles/Theme.styled";

type StyledButtonPropsType = {
    btnType: "primary" | "outlined"
}


export const StyledButton = styled.button<StyledButtonPropsType & GlobalsTypeProps>`
width:86px;
height:30px;
border: none;
border-radius: 5px;
font-size:${props => props.fontSize || Theme.fontSizes.btnTextSize};
font-weight: bold;



&:hover {
background-color: #4e71fec5;
cursor: pointer;
}

// outlined
${props => props.btnType === "outlined" && css<StyledButtonPropsType & GlobalsTypeProps>`
    border : 2px solid ${props => props.color || Theme.colors.btncolor};
    color: ${props => props.color || Theme.colors.btncolor};
    background-color: transparent;

    &:hover {
    cursor: pointer;
    border:none;
    color: ${props => props.color ||Theme.colors.primary};

}
    
    `}

    
    // primary
${props =>props.btnType === 'primary' && css<StyledButtonPropsType & GlobalsTypeProps>`
        background-color:${props => props.color || Theme.colors.btncolor};
        color: ${props => props.color || Theme.colors.primary};

&:hover {
    background-color: ${props => props.color ||Theme.colors.hoverBtnColor} ;
    cursor: pointer;
    }
        `}

`
