import { useState, useCallback } from 'react';
import { Headers } from '../../styles/Common';
import ReviewConfirmCloseModal from '../ReviewConfirmCloseModal';

function ReviewConfirmHeader() {
    // 모달
    const [openModal, setOpenModal] = useState(false);
    const onOpenModal = useCallback(() => {
        setOpenModal(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setOpenModal(false);
    }, []);

    return (
        <Headers>
            <button type="button" onClick={onOpenModal} className='left-button close-button'>
                <span className='left-button-text'>닫기</span>
            </button>
            {openModal && <ReviewConfirmCloseModal onClose={onCloseModal} />}
        </Headers>        
    );
}

export default ReviewConfirmHeader;
