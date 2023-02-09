import styled from "styled-components";
import { IbackgroundColor } from ".";

export const StyledIndicator = styled.div<IbackgroundColor>`
    width: 5px;
    height: 40px;
    background-color: ${p => p.backgroundColor};
    border-radius: 3px;
`