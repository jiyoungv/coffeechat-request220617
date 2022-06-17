import styled from 'styled-components';
import { color } from '../../styles/Variable';
import icon_arrow_down from '../../assets/images/icon_arrow_down.svg';

const { brand500 } = color;

export const ReviewRequestForms = styled.form`
    .form-date-input {
        margin-top: 15px;

        > div {
            margin-bottom: 16px;
        }
    }

    .form-date-more {
        padding: 16px 0;
        text-align: center;

        button {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            color: ${brand500};
            font-weight: 700;

            &::after {
                content: '';
                display: block;
                width: 18px;
                height: 18px;
                background: url(${icon_arrow_down}) center/auto no-repeat;
            }
        }
    }

    .form-link {
        padding-bottom: 15px;
    }

    .form-link-input {
        margin: 16px 0;
    }

    .form-message {
        padding-bottom: 16px;
    }

    .form-message-input {
        margin-top: 15px;
    }
`;