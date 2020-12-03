import {BaseEntity} from './base-entity-dto.model';
import {Answer} from './answer-dto.model';

export interface Question extends BaseEntity {
    answers: Answer[];
    tags: string[];
}
