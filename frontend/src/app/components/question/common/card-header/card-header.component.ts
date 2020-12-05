import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseEntity} from '../../../../models/dto/base-entity-dto.model';

@Component({
    selector: 'app-card-header',
    templateUrl: './card-header.component.html',
    styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent {

    @Input() public data: BaseEntity;
    @Output() public updateRating: EventEmitter<number> = new EventEmitter<number>();

    onUpdateRatingClick(inc: number) {
        this.updateRating.emit(inc);
    }
}
