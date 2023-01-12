import type { Activity } from '@/services/api/activities/activity';
import type { ActivitiesApiInterface } from '@/services/api/activities/api';
import { fakeFetch } from '@/utils/fakeFetch';

const activity: Activity = {
    id: '1',
    title: 'VK Fest',
    description:
        'Программа фестиваля объединяет актуальные тренды разных сфер: от музыки и блогинга до видеоигр и технологий. В 2022 году VK Fest впервые проходил в формате digital-моста в трех городах, а сегодня',
    category: 'Фестивали',
    location: 'Москва, Парк Горького',
    organizer: {
        name: 'VK',
        link: 'https://vk.com',
    },
    price: '35.000 - 45.000',
    tags: ['6+', 'Фестивали', 'Опен эйр', 'Концерты'],
    startsAt: new Date(),
};

export class MockActivitiesApi implements ActivitiesApiInterface {
    async getAll() {
        return fakeFetch([activity, activity, activity]);
    }
    async getById(id: string) {
        return fakeFetch({ ...activity, id });
    }
}
