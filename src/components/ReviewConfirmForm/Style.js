import styled from 'styled-components';
import { color } from '../../styles/Variable';
import icon_arrow_right from '../../assets/images/icon_arrow_right.svg';
import icon_arrow_down from '../../assets/images/icon_arrow_down.svg';

const { brand500, midnight500, midnight600, bg } = color;

const ReviewConfirmForms = styled.form`
    .form-client {
        padding-bottom: 24px;
    }

    .form-client-view {
        padding: 16px;
        border-radius: 8px;
        background: ${bg};
    }

    .form-client-view-name {
        color: ${midnight500};
    }

    .form-link {
        padding-bottom: 24px;
    }

    .form-link-button {
        > a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            border: 1px solid ${brand500};
            border-radius: 8px;
            font-weight: 700;

            &::after {
                content: '';
                display: block;
                width: 24px;
                height: 24px;
                background: url(${icon_arrow_right}) center/auto no-repeat;
            }
        }
    }

    .form-message {
        padding-bottom: 32px;
    }

    .form-message-view {
        padding: 16px;
        border-radius: 8px;
        background: ${bg};
        word-break: break-all;

        p {
            color: ${midnight600};
        }
    }

    .form-schedule {
        padding-bottom: 24px;
    }

    .form-schedule-more {
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

    .form-submit {
        padding-bottom: 32px;

        > a {
            display: block;
            margin-top: 8px;
            padding: 13px 16px;
            color: ${midnight500};
            text-align: center;
        }
    }
`;

export default ReviewConfirmForms;