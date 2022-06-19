import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import IconCheck from '../IconCheck';
import InputChecks from './Style';

function InputCheck({ name, id, label, checked, children, onChange }) {
    const [checkState, setCheckState] = useState(checked ? checked : false);
    const onChangeCheck = useCallback((e) => {
        setCheckState(e.target.checked);
        onChange && onChange(e.target.checked, id);
    }, [id, onChange]);

    return (
        <InputChecks>
            <input 
                type='checkbox'
                name={name} 
                id={id} 
                checked={checkState} 
                onChange={onChangeCheck} 
            />
            <label htmlFor={id}>
                {label && <p>{label}</p>}
                {children}
                <figure className='check-icon'>
                    <IconCheck checked={checkState} />
                </figure>
            </label>            
        </InputChecks>
    );
}

InputCheck.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    checked: PropTypes.bool,
    children: PropTypes.node,
    onChange: PropTypes.func,
};

export default InputCheck;