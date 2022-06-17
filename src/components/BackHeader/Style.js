import styled from 'styled-components';
import { hidden } from '../../styles/Mixin';
import icon_arrow_left from '../../assets/images/icon_arrow_left.svg';

export const BackHeaders = styled.section`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 10;

    .back-button {
        width: 48px;
        height: 48px;
        margin-left: 12px;
        background: url(${icon_arrow_left}) center/auto no-repeat;
    }

    .back-button-text {
        ${hidden}
    }
`;