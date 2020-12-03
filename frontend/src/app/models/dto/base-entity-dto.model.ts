import {User} from './user-dto.model';
import {Comment} from './comment-dto.model';

export interface BaseEntity {
    id: number;
    theme: string;
    user: User;
    rating: number;
    comments: Comment[];
}
