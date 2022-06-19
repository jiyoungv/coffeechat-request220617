import { useState, useCallback } from 'react';

const useInputText = (defaultState = '') => {
    const [state, setState] = useState(defaultState);
    const handler = useCallback((e) => {
        setState(e.target.value);
    }, []);    

    return [state, handler, setState];
}

export default useInputText;