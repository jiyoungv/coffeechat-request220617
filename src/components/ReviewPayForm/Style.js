import styled from "styled-components";
import { color } from '../../styles/Variable';

const { midnight600, bg } = color;

const ReviewPayForms = styled.form`
    .form-schedule {
        padding-bottom: 32px;            
    }

    .form-schedule-view {
        padding: 16px 24px;
        background: ${bg};

        ul {
            li {
                margin-bottom: 8px;
                color: ${midnight600};

                &:last-child {
                    margin-bottom :0;
                }
            }
        }
    }

    .form-message {
        padding-bottom: 8px;
    }

    .form-message-view {
        padding: 16px 24px;
        background: ${bg};
        word-break: break-all;

        p {
            color: ${midnight600};
        }
    }
`;

export default ReviewPayForms;