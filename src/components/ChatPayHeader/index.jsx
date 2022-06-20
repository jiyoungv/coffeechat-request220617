import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Headers } from '../../styles/Common';
import ChatPayCloseModal from '../ChatPayCloseModal';

function ChatPayHeader({ title }) {
    // 모달
    const [openModal, setOpenModal] = useState(false);
    const onOpenModal = useCallback(() => {
        setOpenModal(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setOpenModal(false);
    }, []);

    const pageTitle = title 
        ? (
            <div className='header-title'>
                <p>{title}</p>
            </div>
        )
        : '';

    return (
        <Headers>
            {pageTitle}
            <button type="button" onClick={onOpenModal} className='left-button back-button'>
                <span className='left-button-text'>뒤로 가기</span>
            </button>
            {openModal && <ChatPayCloseModal onClose={onCloseModal} />}
        </Headers>        
    );
}

ChatPayHeader.propTypes = {
    title: PropTypes.string,
};

export default ChatPayHeader;
