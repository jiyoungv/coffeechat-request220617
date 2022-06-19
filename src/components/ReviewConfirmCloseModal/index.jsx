import Modal from '../Modal';

function ReviewConfirmCloseModal({ onClose }) {
    return (
        <Modal title={'수락하지 않고 종료하시겠습니까?'} text={'모든 일정이 어렵거나, 도움이 필요하신 경우 고객센터로 말씀 부탁드립니다.'}>
            <a href='https://pf.kakao.com/_xjxcxbxfK/chat' target='_blank' rel='noreferrer'>고객센터</a>
            <button type='button' onClick={onClose}>돌아가기</button>
        </Modal>
    );
}

export default ReviewConfirmCloseModal;