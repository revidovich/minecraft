export type Activity = {
    id: string;
    title: string;
    description: string;
    category: string;
    location: string;
    startsAt: Date;
    price: string;
    tags: string[];
    organizer: {
        name: string;
        link: string;
    };
};
