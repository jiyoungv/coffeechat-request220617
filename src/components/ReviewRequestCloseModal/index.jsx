import { useCallback } from 'react';
import { useNavigate  } from 'react-router-dom';
import Modal from '../Modal';

function ReviewRequestCloseModal({ onClose }) {
    const navigate = useNavigate();
    const onClickBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <Modal title={'정말 나가시겠습니까?'} text={'작성하신 내용이 저장되지 않습니다.'}>
            <button type='button' onClick={onClickBack}>네</button>
            <button type='button' onClick={onClose}>아니오</button>
        </Modal>
    );
}

export default ReviewRequestCloseModal;