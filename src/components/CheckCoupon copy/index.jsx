import PropTypes from 'prop-types';
import InputCheck from '../InputCheck';
import CheckCoupons from './Style';

function CheckCoupon({ name, id, coupon }) {
    const onChange = (checked, changeId) => {
        console.log(checked, changeId);
    };

    return (
        <CheckCoupons>
            <InputCheck name={name} id={id} onChange={onChange}>
                <div className='label-coupon'>
                    <h6>{coupon.name}</h6>
                    <h6>{coupon.amount}원</h6>
                    <small>{coupon.closeDate}까지</small>
                </div>
            </InputCheck>
        </CheckCoupons>
    )
}

CheckCoupon.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    coupon: PropTypes.object.isRequired,
};

export default CheckCoupon;