import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import IconCheck from '../IconCheck';
import InputChecks from './Style';

function InputCheck({ name, id, label, children, onChange }) {
    const [checked, setChecked] = useState(false);
    const onChangeCheck = useCallback((e) => {
        setChecked(e.target.checked);
        onChange && onChange(e.target.checked, id);
    }, [id, onChange]);

    return (
        <InputChecks>
            <input 
                type='checkbox' 
                name={name} 
                id={id} 
                checked={checked} 
                onChange={onChangeCheck} 
            />
            <label htmlFor={id}>
                {label && <p>{label}</p>}
                {children}
                <figure className='check-icon'>
                    <IconCheck checked={checked} />
                </figure>
            </label>            
        </InputChecks>
    );
}

InputCheck.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    children: PropTypes.node,
    onChange: PropTypes.func,
};

export default InputCheck;