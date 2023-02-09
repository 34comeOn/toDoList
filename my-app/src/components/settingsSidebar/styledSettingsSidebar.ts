import styled from "styled-components";
import variables from '../../sass/variables.module.scss';

export const StyledSettingsSidebar = styled.div`
    position: absolute;
    width: 200px;
    height: 100px;
    background-color: ${variables.colorCardDark};
    border-radius: 30px;
    right: -205px;
    top: 0;
    padding: 15px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;
`