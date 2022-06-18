import PropTypes from 'prop-types';
import { Modals } from '../../styles/Common';

function ReviewRequestModal({ title, text, onClose }) {
    return (
        <Modals>
            <div className='title'>
                <h3>{title}</h3>
            </div>
            <div className='text'>
                <p>{text}</p>
            </div>
            <div className='button'>
                <button type='button' onClick={onClose} className='button-brand button-full'>돌아가기</button>
            </div>
        </Modals>
    );
}

ReviewRequestModal.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    onClose: PropTypes.func,
};

export default ReviewRequestModal;