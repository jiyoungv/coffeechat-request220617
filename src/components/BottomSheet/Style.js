import styled from "styled-components";
import { color, maxWidth } from '../../styles/Variable';

const { midnight500, blue100 } = color;

const BottomSheets = styled.article`
    z-index: 10;
    position: fixed;
    bottom: 0;
    left: 50%;
    right: 0;
    transform: translate(-50%, 100%);
    width: 100%;
    max-width: ${maxWidth};
    padding: 40px 32px;
    border-radius: 16px 16px 0px 0px;
    background: white;
    box-shadow: 0px 2px 32px rgba(0, 0, 0, 0.24);
    text-align: center;
    transition: all 0.3s;

    &.open {
        transform: translate(-50%, 0);
    }

    &.close {
        transform: translate(-50%, 100%);
    }

    > .title {
        margin-bottom: 16px;

        h3 {
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -0.03em;
        }
    }

    > .text {
        p {
            color: ${midnight500};
            font-size: 16px;
        }
    }

    > .button {
        margin-top: 32px;

        button {
            width: 100%;
            padding: 15px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 700;
            background: ${blue100};
        }
    }
`;

export default BottomSheets;