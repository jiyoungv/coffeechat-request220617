import styled from "styled-components";
import { color } from "../../styles/Variable";

const { midnight500 } = color;

const CheckCoupons = styled.div`
    .label-coupon {
        padding: 8px 0;
        
        > h6 {
            font-size: 16px;
            font-weight: 700;
        }
        > small {
            display: block;
            margin-top: 4px;
            color: ${midnight500};
            font-size: 12px;
        }
    }    
`;

export default CheckCoupons;