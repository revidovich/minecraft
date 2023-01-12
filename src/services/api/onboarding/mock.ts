import { fakeFetch } from '@/utils/fakeFetch';
import type { OnboardingApiInterface } from './onboarding';

export const makeMockOnboardingApi = ({
    isActivated,
}: {
    isActivated: boolean;
}) => {
    const Api = class implements OnboardingApiInterface {
        async checkIsActivated() {
            return fakeFetch(isActivated);
        }
    };

    return new Api();
};
