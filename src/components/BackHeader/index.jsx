import { useCallback } from "react"
import { useNavigate  } from 'react-router-dom';
import { BackHeaders } from './Style';

function BackHeader() {
    const navigate = useNavigate();
    const onClick = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <BackHeaders>
            <button type="button" onClick={onClick} className='back-button'>
                <span className='back-button-text'>뒤로 가기</span>
            </button>
        </BackHeaders>
    );
}

export default BackHeader;