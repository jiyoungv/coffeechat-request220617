import PropTypes from 'prop-types';
import BottomSheets from './Style';

function BottomSheet({ close, onClose, title, text }) {
    return (
        <BottomSheets className={close ? 'close' : 'open' }>
            <div className='title'>
                <h3>{title}</h3>
            </div>
            <div className='text'>
                <p>{text}</p>
            </div>
            <div className='button'>
                <button type='button' onClick={onClose}>확인</button>
            </div>
        </BottomSheets>
    );
}

BottomSheet.propTypes = {
    close: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default BottomSheet;