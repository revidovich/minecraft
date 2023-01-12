import type { Activity } from './activity';

export type ActivitiesApiInterface = {
    getAll: () => Promise<Activity[]>;
    getById: (id: string) => Promise<Activity>;
};
