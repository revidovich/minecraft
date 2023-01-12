import { ApiContext } from '@/contexts/apiContext';
import { useContext } from 'react';

export const useApi = () => {
    const value = useContext(ApiContext);

    if (!value) {
        throw new Error('u forgot to use ApiProvider :(');
    }

    return value;
};
