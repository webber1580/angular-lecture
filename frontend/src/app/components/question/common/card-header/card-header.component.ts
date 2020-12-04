import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseEntity} from '../../../../models/dto/base-entity-dto.model';
import {UpdateEntityRating} from '../../../../models/update-entity-rating.model';

@Component({
    selector: 'app-card-header',
    templateUrl: './card-header.component.html',
    styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent {

    @Input() public data: BaseEntity;
    @Output() public updateRating: EventEmitter<UpdateEntityRating> = new EventEmitter<UpdateEntityRating>();

    onUpdateRatingClick(inc: number) {
        this.updateRating.emit({ id: this.data.id, value: inc });
    }

}
