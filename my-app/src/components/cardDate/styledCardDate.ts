import styled from "styled-components";
import { IisOpenedProps } from "../dayCard";

export const StyledCardDate = styled.span<IisOpenedProps>`
    margin-right: auto;
    margin-left: 11px;
    position: ${p => p.isOpened? 'absolute':'static'};
    top: ${p => p.isOpened? '-40':'0'}px;
    left: ${p => p.isOpened? '45':'0'}px;
`