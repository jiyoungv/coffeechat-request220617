import { useCallback } from "react"
import { useNavigate  } from 'react-router-dom';
import PropTypes from 'prop-types';
import Headers from './Style';

function Header({ title }) {
    const navigate = useNavigate();
    const onClick = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    const pageTitle = title 
        ? (
            <div className='page-title'>
                <p>{title}</p>
            </div>
        )
        : '';

    return (
        <Headers>
            {pageTitle}
            <button type="button" onClick={onClick} className='back-button'>
                <span className='back-button-text'>뒤로 가기</span>
            </button>
        </Headers>
    );
}

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;