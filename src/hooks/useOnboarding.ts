import useSWR from 'swr';
import { useApi } from '@/hooks/useApi';

export const useOnboarding = () => {
    const api = useApi();

    const isActivated = useSWR(
        'api.onboarding.checkIsActivated',
        api.onboarding.checkIsActivated
    );

    return { isActivated };
};
