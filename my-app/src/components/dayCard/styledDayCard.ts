import styled from "styled-components";
import variables from '../../sass/variables.module.scss';
import { IisOpenedProps } from ".";

export const StyledDayCard = styled.ul<IisOpenedProps>`
    box-sizing: border-box;
    padding: 24px 37px 20px 15px;
    width: 350px;
    min-height: ${p => p.isOpened? '140':'79'}px;
    hight: min-content;
    background-color: ${variables.colorCardDark};
    box-shadow: 16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05);
    border-radius: ${p => p.isOpened? '40':'25'}px;
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    margin-top: ${p => p.isOpened? '50':'0'}px;
    margin-bottom: 32px;
    position: ${p => p.isOpened? 'relative':'static'};

    display: flex;
    align-items: center;
    flex-wrap: no-wrap;
`