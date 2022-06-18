import { Modals } from '../../styles/Common';

function ReviewConfirmCloseModal({ onClose }) {
    return (
        <Modals>
            <div className='title'>
                <h3>수락하지 않고 종료하시겠습니까?</h3>
            </div>
            <div className='text'>
                <p>모든 일정이 어렵거나, 도움이 필요하신 경우 고객센터로 말씀 부탁드립니다.</p>
            </div>
            <div className='button'>
                <a href='https://pf.kakao.com/_xjxcxbxfK/chat' target='_blank' rel='noreferrer'>고객센터</a>
                <button type='button' onClick={onClose} className='button-brand'>돌아가기</button>
            </div>
        </Modals>
    );
}

export default ReviewConfirmCloseModal;