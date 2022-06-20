import { useCallback } from 'react';
import { useNavigate  } from 'react-router-dom';
import Modal from '../Modal';

function ReviewConfirmCloseModal({ onClose }) {
    const navigate = useNavigate();
    const onClickBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <Modal title={'수락하지 않고 종료하시겠습니까?'} text={'모든 일정이 어렵거나, 도움이 필요하신 경우 고객센터로 말씀 부탁드립니다.'}>
            <div className='button-strange1'>
                <button type='button' onClick={onClickBack}>나가기</button>
                <button type='button' onClick={onClose}>돌아가기</button>
            </div>
            <div className='button-strange2'>
                <a href='https://pf.kakao.com/_xjxcxbxfK/chat' target='_blank' rel='noreferrer'>고객센터</a>
            </div>
        </Modal>
    );
}

export default ReviewConfirmCloseModal;