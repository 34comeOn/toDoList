import styled from 'styled-components';
import variables from '../../sass/variables.module.scss';

export const StyledMain = styled.div`
    box-sizing: border-box;
    width: 390px;
    min-height: 200px;
    height: min-content;
    margin: 20px auto;
    padding: 20px;
    background-color: ${variables.colorDark};
    color: ${variables.colorFont};
    border-radius: 30px;
`