import { IPost } from "./posts";
import { IUser } from "./user";

export interface IComment {

    likes: string[],
    _id: string,
    text: string,
    userId: IUser,
    themeId: IPost,
    created_at: string,
    updatedAt: string,
    __v: number

}
