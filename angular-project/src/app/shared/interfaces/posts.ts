import { IComment } from './commens';
import { IUser } from './user';

export interface IPost {
    subscribers: string[],
    posts: IComment[],
    _id: string,
    themeName: string,
    age: string,
    breed: string,
    image: string,
    description: string,
    userId: IUser,
    created_at: string,
    updatedAt: string,
    __v: 0
}

