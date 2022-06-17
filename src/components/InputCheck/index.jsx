import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { InputChecks } from './Style';
import InputCheckIcon from '../InputCheckIcon';

function InputCheck({ name, id, content }) {
    const [check, setCheck] = useState(false);
    const onChangeCheck = useCallback((e) => {
        setCheck(e.target.checked);
    }, []);

    return (
        <InputChecks>
            <input 
                type="checkbox" 
                name={name}
                id={id}
                checked={check}
                onChange={onChangeCheck} 
            />
            <label htmlFor={id} className={check ? 'active' : ''}>
                <div className='check-text'>
                    <p>{content.date}</p>
                    <p><b>{content.time}</b></p>
                </div>
                <figure className='check-icon'>
                    <InputCheckIcon checked={check} />
                </figure>
            </label>
        </InputChecks>
    )
}

InputCheck.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    content: PropTypes.object,
};

export default InputCheck;