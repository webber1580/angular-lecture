import {BaseEntityDto} from './base-entity-dto.model';
import {AnswerDto} from './answer-dto.model';

export interface QuestionDto extends BaseEntityDto {
    answers: AnswerDto[];
    tags: string[];
}
