import styled from 'styled-components';

const ReviewRequestForms = styled.form`
    .form-link {
        padding-bottom: 15px;
    }

    .form-link-input {
        margin-bottom: 16px;
    }

    .form-message {
        padding-bottom: 16px;

        > .field-title {
            .text {
                opacity: 0.5;
            }
        }
    }

    .form-message-input {
        margin-top: 15px;
    }
`;

export default ReviewRequestForms;