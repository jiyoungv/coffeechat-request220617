import styled from 'styled-components';
import { color } from '../../styles/Variable';
import { hidden } from '../../styles/Mixin';

const { midnight200, brand100, brand500 } = color;

export const InputChecks = styled.div`
    input[type="checkbox"] {
        ${hidden}
    }

    label {
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

    .check-text {
        p {
            margin-bottom: 4px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
`;