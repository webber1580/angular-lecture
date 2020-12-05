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

    getRatingOpacity() {
        if (this.data.rating === 0) {
            return 0.5;
        } else if (Math.abs(this.data.rating) < 3) {
            return 0.3;
        } else {
            return Math.abs(this.data.rating) / 10;
        }
    }


}
