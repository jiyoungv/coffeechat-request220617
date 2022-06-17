import styled from 'styled-components';
import { clearFix } from './Mixin';
import { color } from './Variable';
import icon_information from '../assets/images/icon_information.svg';

const { midnight200, midnight300, midnight400, midnight500, brand500, midnight100, slate100 } = color;

export const Inners = styled.div`
    position: relative;
    height: 100%;
    margin: 0 24px;
    ${clearFix}
`;

export const Layouts = styled.div`
    min-width: 320px;
    max-width: 414px;
    margin: 0 auto;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    margin: 24px 0;
    background: ${midnight100};
`;

export const Titles = styled.div`
    padding: 16px 0 32px;

    h1 {
        margin-bottom: 4px;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.03em;

        &:last-child {
            margin-bottom: 0;
        }
    }

    p {
        color: ${midnight500};
    }
`;

export const Legends = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h6 {
        font-size: 16px;
        font-weight: 700;
    }

    small {
        font-size: 12px;
        font-weight: 700;
        color: ${brand500};
    }
`;

export const LegendTexts = styled.div`
    margin-top: 4px;

    &:first-child {
        margin-top: 0;
    }

    p {
        color: ${midnight400};
    }
`;

export const Cautions = styled.div`
    padding: 16px;
    padding-left: 50px;
    border-radius: 8px;
    background: ${slate100};

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 16px;
        left: 16px;
        width: 18px;
        height: 18px;
        background: url(${icon_information}) center/auto no-repeat;
    }

    p {
       font-size: 12px; 
    }
`;

export const Buttons = styled.button`
    width: 100%;
    padding: 15px 0;
    border-radius: 8px;
    background: linear-gradient(135deg, #7E6CF5 0%, #6CA3F5 100%);
    color: white;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    box-shadow: 0px 2px 16px rgba(108, 163, 245, 0.48);

    &:disabled {
        opacity: 0.5;
        color: rgba(255, 255, 255, 0.48);
    }
`;

export const FloatButtons = styled(Buttons)`
    position: sticky;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 24px 0;
`;

export const InputTexts = styled.input`
    width: 100%;
    padding: 15px 16px;
    border: 1px solid ${midnight200};
    border-radius: 8px;
    font-size: 16px;

    &::placeholder {
        color: ${midnight300};
    }

    &:focus {
        outline-color: ${brand500};
    }
`;

export const InputTextAreas = styled.textarea`
    width: 100%;
    min-height: 162px;
    padding: 16px 20px;
    border: 0;
    border-radius: 8px;
    background: ${slate100};
    word-break: break-all;
    resize: none;

    &::placeholder {
        color: ${midnight400};
    }

    &:focus {
        outline-color: ${brand500};
    }
`;