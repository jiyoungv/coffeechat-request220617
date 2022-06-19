import { useState, useCallback } from 'react';

const useInputCheck = (initialState = new Set()) => {
    const [state, setState] = useState(initialState);
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
    // state - new Set([id1, id2, ...])
}

export default useInputCheck;