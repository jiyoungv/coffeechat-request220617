import { useState, useCallback } from 'react';
import { Headers } from '../../styles/Common';
import ReviewRequestCloseModal from '../ReviewRequestCloseModal';

function ReviewRequestHeader() {
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
            <button type="button" onClick={onOpenModal} className='left-button back-button'>
                <span className='left-button-text'>뒤로 가기</span>
            </button>
            {openModal && <ReviewRequestCloseModal onClose={onCloseModal} />}
        </Headers>        
    );
}

export default ReviewRequestHeader;
