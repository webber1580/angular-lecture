import {UserDto} from './user-dto.model';

export interface CommentDto {
    id: number;
    user: UserDto;
    data: string;
}
