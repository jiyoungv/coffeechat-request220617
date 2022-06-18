import styled from 'styled-components';
import { clearFix, hidden } from './Mixin';
import { color, maxWidth } from './Variable';
import icon_information from '../assets/images/icon_information.svg';
import icon_arrow_left from '../assets/images/icon_arrow_left.svg';
import icon_close from '../assets/images/icon_close.svg';

const { midnight200, midnight300, midnight400, midnight500, brand100, brand500, midnight100, slate100, blue100 } = color;

export const Inners = styled.div`
    position: relative;
    height: 100%;
    margin: 0 24px;
    ${clearFix}
`;

export const Layouts = styled.div`
    min-width: 320px;
    max-width: ${maxWidth};
    margin: 0 auto;
`;

export const Dividers = styled.div`
    width: 100%;
    height: 1px;
    margin: 24px 0;
    background: ${midnight100};

    ${props => props.type2 && `
        width: calc(100% + 48px);
        height: 8px;
        margin-left: -24px;
    `}
`;

export const Headers = styled.section`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    height: 48px;
    background: white;

    > .left-button {
        position: absolute;
        top: 0;
        left: -12px;
        width: 48px;
        height: 48px;
        background: center/auto no-repeat;

        &.back-button {
            background-image: url(${icon_arrow_left});
        }

        &.close-button {
            background-image: url(${icon_close});
        }        

        .left-button-text {
            ${hidden}
        }        
    }

    > .header-title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        > p {
            font-size: 16px;
        }
    }
`;

export const PageTitles = styled.div`
    padding: 16px 0 32px;

    > h1 {
        margin-bottom: 4px;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.03em;

        &:last-child {
            margin-bottom: 0;
        }
    }

    > p {
        color: ${midnight500};
    }
`;

export const PageInfos = styled.div`
    padding: 24px 0 8px;

    > .info-with-image {
        display: flex;
        margin-bottom: 16px;

        > figure {
            width: 56px;
            flex: 0 0 56px;
            margin-right: 16px;
        }

        > h2 {
            font-size: 18px;
            font-weight: 700;
            letter-spacing: -0.03em;
        }
    }

    > .info-desc {
        padding: 16px;
        border: 1px solid ${midnight200};
        border-radius: 8px;

        > p {
            font-size: 12px;
        }
    }
`;

export const FieldTitles = styled.div`
    margin-bottom: ${props => props.mb || 16}px;

    > .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        > p, > small, > button {
            &:last-child {
                padding-left: 10px;
            }
        }

        > h6 {
            font-size: 16px;
            font-weight: 700;
        }
    
        > small {
            font-size: 12px;
            font-weight: 700;
            color: ${brand500};
        }

        > button {
            color: ${midnight500};
            font-size: 12px;
            text-decoration: underline;
        }
    }

    > .text {
        > p {
            margin-top: 4px;
            color: ${midnight400};
        }

        > small {
            color: ${midnight500};
            font-size: 12px;
        }
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

    > p {
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
        box-shadow: none;
    }
`;

export const FloatButtons = styled(Buttons)`
    position: sticky;
    bottom: 24px;
    left: 0;
    right: 0;
    margin: 24px 0;
`;

export const InputChecks = styled.div`
    > input[type="checkbox"] {
        ${hidden}
    }

    > label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        border: 1px solid ${midnight200};
        border-radius: 8px;        

        &.active {
            border-color: ${brand500};
            background: ${brand100};
        }
    }

    > .check-text {
        > p {
            margin-bottom: 4px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
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

export const AmountLists = styled.ul`
    padding-top: 8px;
    border-top: 2px solid ${midnight300};
    border-bottom: 1px solid ${midnight300};

    > li {
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
        font-size: 16px;
        
        > p {
            &:last-child {
                padding-left: 10px;
            }
        }

        &.list-coupon {
            color: ${brand500};
            font-weight: 700;
        }

        &.list-total {
            padding-top: 8px;
            border-top: 1px solid ${midnight300};
            font-weight: 700;
        }
    }
`;

export const Modals = styled.article`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 315px;
    padding: 24px;
    padding-top: 32px;
    border-radius: 16px;
    background: white;
    box-shadow: 0px 2px 32px rgba(0, 0, 0, 0.24);
    
    > .title {
        margin-bottom: 8px;
        text-align: center;

        > h3 {
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -0.03em;
            word-break: break-all;
        }
    }

    > .text {
        margin-bottom: 32px;
        text-align: center;

        > p {
            color: ${midnight500};
            font-size: 16px;
        }
    }

    > .button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;

        > a, > button {
            width: 47%;
            flex: 0 0 47%;
            padding: 15px;
            border-radius: 8px;
            background: ${blue100};
            font-size: 16px;
            font-weight: 700;

            &.button-brand {
                background: linear-gradient(135deg, #7E6CF5 0%, #6CA3F5 100%);
                box-shadow: 0px 2px 16px rgba(108, 163, 245, 0.48);
                color: white;
            }

            &.button-full {
                width: 100%;
                flex-basis: 100%;
            }
        }
    }
`;