import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IconCheck from '../IconCheck';
import InputRadios from './Style';

function InputRadio({ name, id, checkId, label, children, onClick }) {
    const [checkState, setCheckState] = useState(false);
    const onClickCheck = useCallback((e) => {
        onClick(e.target.id);
    }, [onClick]);

    useEffect(() => {
        if (id === checkId) {
            setCheckState(true);
        }
        
        return () => {
            setCheckState(false);
        }
    }, [id, checkId]);

    return (
        <InputRadios>
            <input 
                type='radio'
                name={name} 
                id={id} 
                checked={checkState}
                onChange={() => {}}
                onClick={onClickCheck}
            />
            <label htmlFor={id}>
                {label && <p>{label}</p>}
                {children}
                <figure className='check-icon'>
                    <IconCheck checked={checkState} />
                </figure>
            </label>            
        </InputRadios>
    );
}

InputRadio.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checkId: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string,
    children: PropTypes.node,
};

export default InputRadio;