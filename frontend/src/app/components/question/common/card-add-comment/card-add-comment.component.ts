import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UpdateEntityRating} from '../../../../models/update-entity-rating.model';
import {AddEntityComment} from '../../../../models/add-entity-comment.model';

@Component({
    selector: 'app-card-add-comment',
    templateUrl: './card-add-comment.component.html',
    styleUrls: ['./card-add-comment.component.scss']
})
export class CardAddCommentComponent {

    @Input() public id: number;
    @Output() public addComment: EventEmitter<AddEntityComment> = new EventEmitter<AddEntityComment>();
    public comment = '';

    onAddComment() {
        if (this.comment) {
            this.addComment.emit({ id: this.id, comment: this.comment });
            this.comment = '';
        }
    }
}
