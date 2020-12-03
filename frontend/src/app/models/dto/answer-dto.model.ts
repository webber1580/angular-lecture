import {BaseEntity} from './base-entity-dto.model';

export interface Answer extends BaseEntity {
    isCorrect: boolean;
}
