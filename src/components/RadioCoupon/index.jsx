import PropTypes from 'prop-types';
import InputRadio from '../InputRadio';
import RadioCoupons from './Style';
import { priceToString } from '../../utils/func';

function RadioCoupon({ name, id, checkId, onClick, data }) {
    return (
        <RadioCoupons>
            <InputRadio name={name} id={id} checkId={checkId} onClick={onClick}>
                <div className='label-coupon'>
                    <p>{data.name}</p>
                    <p>{priceToString(data.amount)}원</p>
                    <small>{data.closeDate}까지</small>
                </div>
            </InputRadio>
        </RadioCoupons>
    );
}

RadioCoupon.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checkId: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};

export default RadioCoupon;