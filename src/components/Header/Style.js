import styled from 'styled-components';
import { hidden } from '../../styles/Mixin';
import icon_arrow_left from '../../assets/images/icon_arrow_left.svg';

const Headers = styled.section`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    height: 48px;
    background: white;

    .back-button {
        position: absolute;
        top: 0;
        left: 12px;
        width: 48px;
        height: 48px;
        background: url(${icon_arrow_left}) center/auto no-repeat;
    }

    .back-button-text {
        ${hidden}
    }

    .page-title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        p {
            font-size: 16px;
        }
    }
`;

export default Headers;