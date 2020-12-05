import {User} from './user-dto.model';

export interface Comment {
    id?: number;
    user?: User;
    content?: string;
}
