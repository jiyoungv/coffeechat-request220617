import { useState, useCallback } from 'react';

const useInputCheck = (defaultState = new Set()) => {
    const [state, setState] = useState(defaultState);
    const handler = useCallback((checked, change) => {
        let newState = new Set(state);
    
        if (checked) {
            newState.add(change);
        } else {
            newState.delete(change);
        }
    
        setState(newState);
    }, [state]);

    return [state, handler, setState];
}

export default useInputCheck;