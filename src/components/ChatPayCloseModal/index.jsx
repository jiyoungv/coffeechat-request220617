import { useCallback } from 'react';
import { useNavigate  } from 'react-router-dom';
import Modal from '../Modal';

function ChatPayCloseModal({ onClose }) {
    const navigate = useNavigate();
    const onClickBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <Modal title={'정말 나가시겠습니까?'} text={'제안 일정과 사전 질문은 저장되며, 결제 이어하기로 신청을 완료할 수 있습니다.'}>
            <button type='button' onClick={onClickBack}>네</button>
            <button type='button' onClick={onClose}>아니오</button>
        </Modal>
    );
}

export default ChatPayCloseModal;