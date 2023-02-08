import styled from "styled-components";
import { ICoveredButtonProps } from ".";

export const StyledCoveredButton = styled.button<ICoveredButtonProps>`
    width: ${p => p.width};
    height: ${p => p.height};
    cursor: pointer;
    border: none;
    background-color: transparent;

    position: ${p => p.isOpened && p.movable? 'absolute':'static'};
    top: ${p => p.isOpened && p.movable? '-38':'0'}px;
`