import {UserDto} from './user-dto.model';
import {CommentDto} from './comment-dto.model';

export interface BaseEntityDto {
    id: number;
    theme: string;
    user: UserDto;
    rating: number;
    comments: CommentDto[];
}
