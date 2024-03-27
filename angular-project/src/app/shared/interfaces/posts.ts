import { IUser } from './user';

export interface IPost{
    subscribers: string[],
    posts: string[],
    _id: string,
    themeName: string,
    userId: IUser,
    created_at: string,
    updatedAt: string,
    __v: 0
}

