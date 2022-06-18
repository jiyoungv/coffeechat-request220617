import PropTypes from 'prop-types';

function BottomSheet({ title, text }) {
    return (
        <div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <p>{text}</p>
            </div>
            <button type='button'>확인</button>
        </div>
    );
}

BottomSheet.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default BottomSheet;