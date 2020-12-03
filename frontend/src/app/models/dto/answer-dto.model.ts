import {BaseEntityDto} from './base-entity-dto.model';

export interface AnswerDto extends BaseEntityDto {
    isCorrect: boolean;
}
